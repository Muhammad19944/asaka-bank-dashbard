<template>
	<div class="admin-main-layout">
		<template v-if="loading">
			<app-loader size="56" />
		</template>

		<template v-else>
			<the-sidebar ref="appSidebar" />

			<the-header @emit:up="toggleDrawer" />

			<v-main class="admin-main">
				<template>
					<router-view class="admin-router-view d-flex flex-column p-relative pa-4 px-sm-7 py-sm-6" />
				</template>

				<TheFooter />
			</v-main>
		</template>
	</div>
</template>

<script>
import AppLoader from "@/common/components/base/AppLoader";
import TheSidebar from "./Sidebar";
import TheHeader from "./Header";
import TheFooter from "./Footer";

import { mapActions } from "vuex"

export default {
	name: "Admin",
	components: {
		AppLoader,
		TheFooter,
		TheSidebar,
		TheHeader
	},
	data() {
		return {
			loading: true
		}
	},
	watch: {
		$route(to) {

		}
	},
	mounted() {
		this.$jwt.getToken() && this.$store.dispatch("auth/fetchCurrentUser").then(() => {
			this.loading = false

			this.initActions()
		})
	},
	methods: {
		...mapActions({
			initActions: "initActions"
		}),
		/*
		*
		* */
		toggleDrawer() {
			const { appSidebar } = this.$refs;

			switch (this.$vuetify.breakpoint.name) {
				case "xs":
					return (appSidebar.drawerSettings.drawer = !appSidebar.drawerSettings.drawer);
				case "sm":
					return (appSidebar.drawerSettings.drawer = !appSidebar.drawerSettings.drawer);
				case "md":
					return (appSidebar.drawerSettings.drawer = !appSidebar.drawerSettings.drawer);
				case "lg":
					return (appSidebar.drawerSettings.mini = !appSidebar.drawerSettings.mini);
				case "xl":
					return (appSidebar.drawerSettings.mini = !appSidebar.drawerSettings.mini);
			}
		}
	}
};
</script>

<style>
.admin-main-layout {
	background: var(--theme-bg);
	min-height: 100vh;
}

.admin-main {
	min-height: 100vh;
}

.admin-main .v-main__wrap {
	display: flex;
	flex-direction: column;
}

.admin-router-view {
	height: calc(var(--vh, 1vh) * 100 - 123px);
	overflow-y: auto;
	overflow-x: hidden;
}
</style>
