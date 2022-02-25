<template>
	<div class="user-cabinet-view">
		<template v-if="moduleLoaded">
			<router-view />
		</template>
	</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"

const pressCenterStoreModule = () => import(/* webpackChunkName: "pressCenterStoreModule" */ "@/modules/PressCenter/store")

export default {
	name: "index",
	computed: {
		...mapGetters({
			moduleLoaded: "getIsModuleLoaded"
		})
	},
	mounted() {
		pressCenterStoreModule().then(pressCenterModule => {
			this.$store.registerModule("pressCenter", pressCenterModule.default)

			this.loadModule(true)

			console.log(this.$store)
		})
	},
	beforeDestroy() {
		this.$store.unregisterModule("pressCenter")

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
