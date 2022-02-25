<template>
	<div class="user-cabinet-view">
		<template v-if="moduleLoaded">
			<router-view />
		</template>
	</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"

const feedbackStoreModule = () => import(/* webpackChunkName: "feedbackStoreModule" */ "@/modules/Feedback/store")

export default {
	name: "index",
	computed: {
		...mapGetters({
			moduleLoaded: "getIsModuleLoaded"
		})
	},
	mounted() {
		feedbackStoreModule().then(feedbackModule => {
			this.$store.registerModule("feedback", feedbackModule.default)

			this.loadModule(true)

			console.log(this.$store)
		})
	},
	beforeDestroy() {
		this.$store.unregisterModule("feedback")

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
