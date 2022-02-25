
const OtherSections = [
	{
		path: "other-sections",
		name: "OtherSections",
		component: () => import(/* webpackChunkName: "OtherSections" */ "@/modules/OtherSections/views"),
		children: [
			// Country list
			{
				path: "country-list",
				name: "OtherSectionsCountryList",
				component: () => import(/* webpackChunkName: "OtherSectionsCountryList" */ "@/modules/OtherSections/views/CountryList")
			},
			// Region list
			{
				path: "region-list",
				name: "OtherSectionsRegionList",
				component: () => import(/* webpackChunkName: "OtherSectionsRegionList" */ "@/modules/OtherSections/views/RegionsList")
			},
			// Branches list
			{
				path: "branches-list",
				name: "OtherSectionsBranchesList",
				component: () => import(/* webpackChunkName: "OtherSectionsBranchesList" */ "@/modules/OtherSections/views/BranchesList")
			},
			// Users list
			{
				path: "users-list",
				name: "OtherSectionsUsersList",
				component: () => import(/* webpackChunkName: "OtherSectionsUsersList" */ "@/modules/OtherSections/views/UsersList")
			},
			// Roles list
			{
				path: "roles-list",
				name: "OtherSectionsRolesList",
				component: () => import(/* webpackChunkName: "OtherSectionsRolesList" */ "@/modules/OtherSections/views/RolesList")
			},
			// Documents
			{
				path: "documents",
				name: "OtherSectionsDocuments",
				component: () => import(/* webpackChunkName: "OtherSectionsDocuments" */ "@/modules/OtherSections/views/Documents")
			},
			// Annual documents
			{
				path: "annual-documents",
				name: "OtherSectionsAnnualDocuments",
				component: () => import(/* webpackChunkName: "OtherSectionsAnnualDocuments" */ "@/modules/OtherSections/views/AnnualDocuments")
			},
			// Important Facts
			{
				path: "important-facts",
				name: "OtherSectionsImportantFacts",
				component: () => import(/* webpackChunkName: "OtherSectionsImportantFacts" */ "@/modules/OtherSections/views/ImportantFacts")
			},
			// Open date
			{
				path: "open-data",
				name: "OtherSectionsOpenData",
				component: () => import(/* webpackChunkName: "OtherSectionsOpenData" */ "@/modules/OtherSections/views/OpenData")
			},
			// Category
			{
				path: "category",
				name: "OtherSectionsCategory",
				component: () => import(/* webpackChunkName: "OtherSectionsCategory" */ "@/modules/OtherSections/views/Category")
			},
			// Online pools
			{
				path: "online-pools",
				name: "OtherSectionsOnlinePools",
				component: () => import(/* webpackChunkName: "OtherSectionsOnlinePools" */ "@/modules/OtherSections/views/OnlinePolls")
			},
			// Slide section
			{
				path: "slide-section",
				name: "OtherSectionsSlideSection",
				component: () => import(/* webpackChunkName: "OtherSectionsSlideSection" */ "@/modules/OtherSections/views/SliderSection")
			}
		]
	}
]

export default OtherSections
