<template>
	<div><pre>{{ currentUser }}</pre></div>
</template>

<script>
import { mapGetters } from "vuex"

export default {
	name: 'Home',
	computed: {
		...mapGetters({
			currentUser: "auth/getCurrentUser"
		})
	},
	mounted() {
		console.log(this.$store)
	}
}
</script>
