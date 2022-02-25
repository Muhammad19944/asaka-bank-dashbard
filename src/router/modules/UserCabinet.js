
const UserCabinet = [
	{
		path: "user-cabinet",
		name: "UserCabinet",
		component: () => import(/* webpackChunkName: "UserCabinet" */ "@/modules/UserCabinet/views"),
		redirect: { name: "UserApplicationList" },
		children: [
			{
				path: "applications-list",
				name: "UserApplicationList",
				component: () => import(/* webpackChunkName: "UserApplicationList" */ "@/modules/UserCabinet/views/List")
			}
		]
	}
]

export default UserCabinet
