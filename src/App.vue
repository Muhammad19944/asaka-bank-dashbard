<template>
	<v-app>
		<router-view />
	</v-app>
</template>

<script>
import { setVH } from "@/common/helpers";

export default {
	name: "App",
	mounted() {
		setVH()
	}
};
</script>
