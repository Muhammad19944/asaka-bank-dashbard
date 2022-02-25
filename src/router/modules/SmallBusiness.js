

const SmallBusiness = [
	{
		path: "small-business",
		name: "SmallBusiness",
		component: () => import(/* webpackChunkName: "SmallBusiness" */ "@/modules/SmallBusiness/views"),
		children: [
			// Cards
			{
				path: "cards",
				name: "SmallBusinessCards",
				component: () => import(/* webpackChunkName: "SmallBusinessCards" */ "@/modules/SmallBusiness/views/Card/List")
			},
			{
				path: "card-applications-list",
				name: "SmallBusinessCardsApplicationsList",
				component: () => import(/* webpackChunkName: "SmallBusinessCardsApplicationsList" */ "@/modules/SmallBusiness/views/Card/ApplicationsList")
			},
			// Credit
			{
				path: "credit",
				name: "SmallBusinessCredit",
				component: () => import(/* webpackChunkName: "SmallBusinessCredit" */ "@/modules/SmallBusiness/views/Credit/List")
			},
			{
				path: "credit-applications-list",
				name: "SmallBusinessCreditApplicationsList",
				component: () => import(/* webpackChunkName: "SmallBusinessCreditApplicationsList" */ "@/modules/SmallBusiness/views/Credit/ApplicationsList")
			},
			// Financing
			{
				path: "financing",
				name: "SmallBusinessFinancing",
				component: () => import(/* webpackChunkName: "SmallBusinessFinancing" */ "@/modules/SmallBusiness/views/Financing/List")
			},
			{
				path: "financing-applications-list",
				name: "SmallBusinessFinancingApplicationsList",
				component: () => import(/* webpackChunkName: "SmallBusinessFinancingApplicationsList" */ "@/modules/SmallBusiness/views/Financing/ApplicationsList")
			},
		]
	}
]

export default SmallBusiness
