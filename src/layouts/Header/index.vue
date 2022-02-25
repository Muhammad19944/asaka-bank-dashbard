<template>
    <v-app-bar class="app-toolbar" app>
        <v-app-bar-nav-icon @click.stop="$emit('emit:up')">
            <align-left-icon color="#E41D32" size="1.5x" class="custom-class" />
        </v-app-bar-nav-icon>

        <v-toolbar-title class="ml-0 pl-2">
            <div class="text-capitalize" v-if="$vuetify.breakpoint.smAndUp">
            </div>
        </v-toolbar-title>

        <v-spacer></v-spacer>

		<app-language />

	    <v-menu
		    offset-y
		    min-width="150"
		    auto
	    >
		    <template v-slot:activator="{ on, attrs }">
			    <v-btn
				    :ripple="false"
				    depressed
				    v-bind="attrs"
				    v-on="on"
				    text
				    large
				    class="reset-size text-transform-reset px-0"
			    >
				    <div class="app-toolbar__user d-flex align-center ml-4 text-decoration-none color-inherit">
					    <div class="user-avatar d-flex align-center rounded-circle overflow-hidden">
						    <v-img width="32" height="32" class="rounded-circle" src="/img/avatar.png"></v-img>
					    </div>
					    <p v-if="currentUser" class="text-small font-600 mb-0 ml-3 mr-6">
						    {{ currentUser.username }}
					    </p>
				    </div>
			    </v-btn>
		    </template>

		    <v-list>
			    <v-list-item @click="logout" class="py-1">
				    <v-list-item-title class="d-flex align-center px-1">
					    <div class="mr-4 p-relative">
						    <log-out-icon size="1.25x" class="d-block"></log-out-icon>
					    </div>
					    <div class="p-relative">
						    <h4 class="font-700">{{ $t("logOut") }}</h4>
					    </div>
				    </v-list-item-title>
			    </v-list-item>
		    </v-list>
	    </v-menu>
    </v-app-bar>
</template>

<script>
import AppLanguage from "@/common/components/Language";
import { AlignLeftIcon, LogOutIcon } from "vue-feather-icons";
import { mapGetters } from "vuex";
import { removeToken } from "@/service/jwt.service";

export default {
	name: "Header",
	components: {
		AppLanguage,
		AlignLeftIcon,
		LogOutIcon
	},
	data() {
		return {
			isDark: false
		}
	},
	computed: {
		...mapGetters({
			currentUser: "auth/getCurrentUser"
		})
	},
	methods: {
		/*
		*
		* */
		logout() {
			if (!confirm(`Tizimdan chiqishni xoxlaysizmi ?`)) {
				return void 0;
			}

			removeToken();
			this.$router.push({ name: "Login" });
			this.$toast.warning(`Chiqildi!`);
		}
	}
};
</script>

<style>
.app-toolbar {
	box-shadow: 0 0 15px 0 rgb(34 41 47 / 5%) !important;
	background: var(--theme-layout) !important;
}
</style>
