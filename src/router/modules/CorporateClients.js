

const CorporateClients = [
	{
		path: "corporate-clients",
		name: "CorporateClients",
		component: () => import(/* webpackChunkName: "CorporateClients" */ "@/modules/CorporateClients/views"),
		children: [
			// Cards
			{
				path: "cards",
				name: "CorporateClientsCards",
				component: () => import(/* webpackChunkName: "CorporateClientsCards" */ "@/modules/CorporateClients/views/Card/List")
			},
			{
				path: "card-applications-list",
				name: "CorporateClientsCardsApplicationsList",
				component: () => import(/* webpackChunkName: "CorporateClientsCardsApplicationsList" */ "@/modules/CorporateClients/views/Card/ApplicationsList")
			},
			// Credit
			{
				path: "credit",
				name: "CorporateClientsCredit",
				component: () => import(/* webpackChunkName: "CorporateClientsCredit" */ "@/modules/CorporateClients/views/Credit/List")
			},
			{
				path: "credit-applications-list",
				name: "CorporateClientsCreditApplicationsList",
				component: () => import(/* webpackChunkName: "CorporateClientsCreditApplicationsList" */ "@/modules/CorporateClients/views/Credit/ApplicationsList")
			}
		]
	}
]

export default CorporateClients
