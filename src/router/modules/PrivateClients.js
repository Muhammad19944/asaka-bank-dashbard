
const PrivateClients = [
	{
		path: "private-clients",
		name: "PrivateClients",
		component: () => import(/* webpackChunkName: "PrivateClients" */ "@/modules/PrivateClients/views"),
		children: [
			// Cards
			{
				path: "cards",
				name: "PrivateClientsCards",
				component: () => import(/* webpackChunkName: "PrivateClientsCards" */ "@/modules/PrivateClients/views/Card/List")
			},
			{
				path: "card-applications-list",
				name: "PrivateClientsCardsApplicationsList",
				component: () => import(/* webpackChunkName: "PrivateClientsCardsApplicationsList" */ "@/modules/PrivateClients/views/Card/ApplicationsList")
			},
			// Credit
			{
				path: "credit",
				name: "PrivateClientsCredit",
				component: () => import(/* webpackChunkName: "PrivateClientsCredit" */ "@/modules/PrivateClients/views/Credit/List")
			},
			{
				path: "credit-applications-list",
				name: "PrivateClientsCreditApplicationsList",
				component: () => import(/* webpackChunkName: "PrivateClientsCreditApplicationsList" */ "@/modules/PrivateClients/views/Credit/ApplicationsList")
			},
			// Deposit
			{
				path: "deposit",
				name: "PrivateClientsDeposit",
				component: () => import(/* webpackChunkName: "PrivateClientsDeposit" */ "@/modules/PrivateClients/views/Deposit/List")
			},
			{
				path: "deposit-applications-list",
				name: "PrivateClientsDepositApplicationsList",
				component: () => import(/* webpackChunkName: "PrivateClientsDepositApplicationsList" */ "@/modules/PrivateClients/views/Deposit/ApplicationsList")
			},
			// DepositBoxes
			{
				path: "deposit-saving-boxes-list",
				name: "PrivateClientsDepositSavingBoxesList",
				component: () => import(/* webpackChunkName: "PrivateClientsDepositSavingBoxesList" */ "@/modules/PrivateClients/views/DepositBoxes/SavingsBoxesList")
			},
			{
				path: "deposit-saving-box-page",
				name: "PrivateClientsDepositSavingBoxPage",
				component: () => import(/* webpackChunkName: "PrivateClientsDepositSavingBoxPage" */ "@/modules/PrivateClients/views/DepositBoxes/SavingsBoxPage")
			},
			// Money transfers
			{
				path: "money-transfers",
				name: "PrivateClientsMoneyTransfers",
				component: () => import(/* webpackChunkName: "PrivateClientsMoneyTransfers" */ "@/modules/PrivateClients/views/MoneyTransfers/List")
			},
		]
	}
]

export default PrivateClients
