<template>
	<div class="user-cabinet-view">
<!--		v-if="moduleLoaded"-->
		<template>
			<router-view />
		</template>
	</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"

const hrStoreModule = () => import(/* webpackChunkName: "hrStoreModule" */ "@/modules/HR/store")

export default {
	name: "index",
	computed: {
		...mapGetters({
			moduleLoaded: "getIsModuleLoaded"
		})
	},
	mounted() {
		hrStoreModule().then(hrModule => {
			this.$store.registerModule("hr", hrModule.default)

			// this.loadModule(true)

			// console.log(this.$store)
		})
	},
	beforeDestroy() {
		this.$store.unregisterModule("hr")

		this.loadModule(false)
	},
	methods: {
		...mapActions({
			loadModule: "loadModule"
		})
	}
}
</script>
