
const Tenders = [
	{
		path: "tenders",
		name: "Tenders",
		component: () => import(/* webpackChunkName: "Tenders" */ "@/modules/Tenders/views"),
		redirect: { name: "TendersList" },
		children: [
			{
				path: "applications-list",
				name: "TendersList",
				component: () => import(/* webpackChunkName: "TendersList" */ "@/modules/Tenders/views/List")
			}
		]
	}
]

export default Tenders
