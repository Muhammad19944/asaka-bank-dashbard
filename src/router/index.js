import Vue from "vue"
import VueRouter from "vue-router"
import UserCabinet from "@/router/modules/UserCabinet";
import HR from "@/router/modules/HR"
import Tenders from "@/router/modules/Tenders";
import PrivateClients from "@/router/modules/PrivateClients";
import SmallBusiness from "@/router/modules/SmallBusiness";
import CorporateClients from "@/router/modules/CorporateClients";
import AboutBank from "@/router/modules/AboutBank";
import PressCenter from "@/router/modules/PressCenter";
import Feedback from "@/router/modules/Feedback";
import OtherSections from "@/router/modules/OtherSections";

Vue.use(VueRouter)

const routes = [
	{
		path: "/",
		name: "MainLayout",
		component: () => import("@/layouts/MainLayout"),
		redirect: { name: "MainHome" },
		children: [
			{
				path: "home",
				name: "MainHome",
				component: () => import("@/views/Home")
			},
			...UserCabinet,
			...HR,
			...Tenders,
			...PrivateClients,
			...SmallBusiness,
			...CorporateClients,
			...AboutBank,
			...PressCenter,
			...Feedback,
			...OtherSections
		]
	},

	// ===========================================
	{
		path: "/auth",
		name: "AuthLayout",
		component: () => import(/* webpackChunkName: "AuthLayout" */ "@/layouts/AuthLayout"),
		redirect: { name: "AuthLogin" },
		children: [
			{
				path: "login",
				name: "AuthLogin",
				component: () => import(/* webpackChunkName: "AuthLogin" */ "@/views/Auth/Login")
			}
		]
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
	scrollBehavior: () => ({ y: 0 })
})

export default router
