<template>
	<div class="user-cabinet-view">
		<template v-if="moduleLoaded">
			<router-view />
		</template>
	</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"

const smallBusinessStoreModule = () => import(/* webpackChunkName: "smallBusinessStoreModule" */ "@/modules/SmallBusiness/store")

export default {
	name: "index",
	computed: {
		...mapGetters({
			moduleLoaded: "getIsModuleLoaded"
		})
	},
	mounted() {
		smallBusinessStoreModule().then(smallBusinessModule => {
			this.$store.registerModule("smallBusiness", smallBusinessModule.default)

			this.loadModule(true)

			console.log(this.$store)
		})
	},
	beforeDestroy() {
		this.$store.unregisterModule("smallBusiness")

		this.loadModule(false)
	},
	destroyed() {
		console.log(this.$store)
	},
	methods: {
		...mapActions({
			loadModule: "loadModule"
		})
	}
}
</script>
