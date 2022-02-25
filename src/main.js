import Vue from "vue"
import App from "./App.vue"
import "./registerServiceWorker"
import router from "./router"
import store from "./store"
import vuetify from "./plugins/vuetify"
import "@/plugins/vuePlugins"
import { i18n } from "./plugins/i18n"
import "@/plugins/vuelidate"
import "@/plugins/vueToast"
import "@/plugins/ui"

import "@/common/filters"

import "@/assets/css/main.css"

Vue.config.productionTip = false

new Vue({
	router,
	store,
	vuetify,
	i18n,
	render: h => h(App)
}).$mount('#app')
