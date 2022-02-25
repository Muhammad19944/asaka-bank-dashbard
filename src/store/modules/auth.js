import { SET_ENTITY } from "../mutation-types"

export default {
	namespaced: true,
	state: {
		currentUser: {},
		companyId: null
	},
	/*
	*
	* */
	getters: {
		getCurrentUser: (state) => state.currentUser
	},
	/*
	*
	* */
	mutations: {

	},
	/*
	*
	* */
	actions: {
		/*
		*
		* */
		fetchUserLogin({ commit }, payload) {
			commit(SET_ENTITY, { entity: "isButtonLoading", value: true }, { root: true })

			return new Promise((resolve, reject) => {
				this.$axios.post("/login/", payload)
					.then(({ data }) => {
						commit(SET_ENTITY, { module: "auth", entity: "currentUser", value: data }, { root: true })
						commit(SET_ENTITY, { module: "auth", entity: "companyId", value: data.user.company.id }, { root: true })

						this.$jwt.saveToken(data.token)

						resolve()
					})
					.finally(() => {
						commit(SET_ENTITY, { entity: "isButtonLoading", value: false }, { root: true })
					})
			})
		},
		/*
		*
		* */
		fetchCurrentUser({ commit }) {
			return new Promise((resolve, reject) => {
				this.$axios.get("/my/profile/")
					.then(({ data }) => {
						commit(SET_ENTITY, { module: "auth", entity: "currentUser", value: data }, { root: true })
						commit(SET_ENTITY, { module: "auth", entity: "companyId", value: data.company.id }, { root: true })

						resolve()
					})
			})
		}
	},
}
