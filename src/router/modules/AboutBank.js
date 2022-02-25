

const AboutBank = [
	{
		path: "about-bank",
		name: "AboutBank",
		component: () => import(/* webpackChunkName: "AboutBank" */ "@/modules/AboutBank/views"),
		children: [
			// Shareholders
			{
				path: "shareholders",
				name: "AboutBankShareholders",
				component: () => import(/* webpackChunkName: "AboutBankShareholders" */ "@/modules/AboutBank/views/Shareholders")
			},
			// Achievement
			{
				path: "achievement",
				name: "AboutBankAchievement",
				component: () => import(/* webpackChunkName: "AboutBankAchievement" */ "@/modules/AboutBank/views/Achievement")
			},
			// Career
			{
				path: "career",
				name: "AboutBankCareer",
				component: () => import(/* webpackChunkName: "AboutBankCareer" */ "@/modules/AboutBank/views/Career")
			},
			// Bank structure
			{
				path: "bank-structure",
				name: "AboutBankBankStructure",
				component: () => import(/* webpackChunkName: "AboutBankBankStructure" */ "@/modules/AboutBank/views/BankStructure")
			},
			// Structural division
			{
				path: "structural-division",
				name: "AboutBankStructuralDivision",
				component: () => import(/* webpackChunkName: "AboutBankStructuralDivision" */ "@/modules/AboutBank/views/StructuralDivision")
			},
			// Public offer
			{
				path: "public-offer",
				name: "AboutBankPublicOffer",
				component: () => import(/* webpackChunkName: "AboutBankPublicOffer" */ "@/modules/AboutBank/views/PublicOffer")
			},
		]
	}
]

export default AboutBank
