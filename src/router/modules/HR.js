
const HR = [
	{
		path: "hr",
		name: "HR",
		component: () => import(/* webpackChunkName: "HR" */ "@/modules/HR/views"),
		redirect: { name: "HRList" },
		children: [
			{
				path: "application-list",
				name: "HRList",
				component: () => import(/* webpackChunkName: "HRList" */ "@/modules/HR/views/List")
			}
		]
	}
]

export default HR
