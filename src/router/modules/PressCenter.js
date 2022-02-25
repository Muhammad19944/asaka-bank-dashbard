

const PressCenter = [
	{
		path: "press-center",
		name: "PressCenter",
		component: () => import(/* webpackChunkName: "PressCenter" */ "@/modules/PressCenter/views"),
		children: [
			// Category
			{
				path: "category",
				name: "PressCenterCategory",
				component: () => import(/* webpackChunkName: "PressCenterCategory" */ "@/modules/PressCenter/views/Category")
			},
			// News and notifications
			{
				path: "news-and-notifications",
				name: "PressCenterNewsAndNotifications",
				component: () => import(/* webpackChunkName: "PressCenterNewsAndNotifications" */ "@/modules/PressCenter/views/NewsNotifications")
			},
			// Youth policy
			{
				path: "youth-policy",
				name: "PressCenterCareerYouthPolicy",
				component: () => import(/* webpackChunkName: "PressCenterCareerYouthPolicy" */ "@/modules/PressCenter/views/YouthPolicy")
			},
			// Financial literacy
			{
				path: "financial-literacy",
				name: "PressCenterFinancialLiteracy",
				component: () => import(/* webpackChunkName: "PressCenterFinancialLiteracy" */ "@/modules/PressCenter/views/FinancialLiteracy")
			},
			// Useful links
			{
				path: "useful-links",
				name: "PressCenterUsefulLinks",
				component: () => import(/* webpackChunkName: "PressCenterUsefulLinks" */ "@/modules/PressCenter/views/UsefulLinks")
			},
			// Video materials
			{
				path: "video-materials",
				name: "PressCenterVideoMaterials",
				component: () => import(/* webpackChunkName: "PressCenterVideoMaterials" */ "@/modules/PressCenter/views/VideoMaterials")
			},
			// Photo materials
			{
				path: "photo-materials",
				name: "PressCenterPhotoMaterials",
				component: () => import(/* webpackChunkName: "PressCenterPhotoMaterials" */ "@/modules/PressCenter/views/PhotoMaterials")
			},
			// Stock
			{
				path: "stock",
				name: "PressCenterStock",
				component: () => import(/* webpackChunkName: "PressCenterStock" */ "@/modules/PressCenter/views/Stock")
			},
			// Ads
			{
				path: "ads",
				name: "PressCenterAds",
				component: () => import(/* webpackChunkName: "PressCenterAds" */ "@/modules/PressCenter/views/Ads")
			},
			// Partners
			{
				path: "partners",
				name: "PressCenterPartners",
				component: () => import(/* webpackChunkName: "PressCenterPartners" */ "@/modules/PressCenter/views/Partners")
			},
		]
	}
]

export default PressCenter
