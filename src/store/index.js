import Vue from "vue"
import Vuex from "vuex"
import vuexPlugins from "@/plugins/vuexPlugins";
import { SET_ENTITY } from "./mutation-types"
import CrudService from "@/service/crud.service";

import auth from "./modules/auth"

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		isButtonLoading: false,
		isModuleLoaded: false,
		statusList: [],
		pageOptions: {
			page: 1,
			page_size: 10,
			page_length: null
		}
	},
	getters: {
		getIsButtonLoading: state => state.isButtonLoading,
		getIsModuleLoaded: state => state.isModuleLoaded,
		getStatusList: state => state.statusList
	},
	mutations: {
		[SET_ENTITY](state, { module, entity, value }) {
			module ? state[module][entity] = value : state[entity] = value
		},
	},
	actions: {
		loadModule({ commit }, payload) {
			commit(SET_ENTITY, { entity: "isModuleLoaded", value: payload })
		},
		/*
		*
		* */
		initActions({ dispatch }) {
			dispatch("fetchStatusList")
		},
		/*
		*
		* */
		fetchStatusList({ commit }) {
			CrudService.getList(`/status/`)
				.then(({ results }) => {
					commit(SET_ENTITY, { module: null, entity: "statusList", value: results })
				})
		}
	},
	modules: {
		auth
	},
	plugins: [vuexPlugins]
})
