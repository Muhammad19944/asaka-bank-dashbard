<template>
	<div class="user-cabinet-view">
		<template v-if="moduleLoaded">
			<router-view />
		</template>
	</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"

const aboutBankStoreModule = () => import(/* webpackChunkName: "aboutBankStoreModule" */ "@/modules/AboutBank/store")

export default {
	name: "index",
	computed: {
		...mapGetters({
			moduleLoaded: "getIsModuleLoaded"
		})
	},
	mounted() {
		aboutBankStoreModule().then(aboutBankModule => {
			this.$store.registerModule("aboutBank", aboutBankModule.default)

			this.loadModule(true)

			console.log(this.$store)
		})
	},
	beforeDestroy() {
		this.$store.unregisterModule("aboutBank")

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
