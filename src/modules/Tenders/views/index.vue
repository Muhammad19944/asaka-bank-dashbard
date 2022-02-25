<template>
	<div class="user-cabinet-view">
		<template v-if="moduleLoaded">
			<router-view />
		</template>
	</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"

const tendersStoreModule = () => import(/* webpackChunkName: "tendersStoreModule" */ "@/modules/Tenders/store")

export default {
	name: "index",
	computed: {
		...mapGetters({
			moduleLoaded: "getIsModuleLoaded"
		})
	},
	mounted() {
		tendersStoreModule().then(tendersModule => {
			this.$store.registerModule("tenders", tendersModule.default)

			this.loadModule(true)

			console.log(this.$store)
		})
	},
	beforeDestroy() {
		this.$store.unregisterModule("tenders")

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
