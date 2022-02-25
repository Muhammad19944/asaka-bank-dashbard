

const Feedback = [
	{
		path: "feedback",
		name: "Feedback",
		component: () => import(/* webpackChunkName: "Feedback" */ "@/modules/Feedback/views"),
		children: [
			// Appeals
			{
				path: "appeals",
				name: "FeedbackAppeals",
				component: () => import(/* webpackChunkName: "PressCenterCategory" */ "@/modules/Feedback/views/Appeals")
			},
			// Complains manager
			{
				path: "complains-manager",
				name: "FeedbackComplainsManager",
				component: () => import(/* webpackChunkName: "FeedbackComplainsManager" */ "@/modules/Feedback/views/ComplainsManager")
			}
		]
	}
]

export default Feedback
