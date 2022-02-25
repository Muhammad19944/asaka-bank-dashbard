<template>
	<v-navigation-drawer
		v-model="drawerSettings.drawer"
		:mini-variant.sync="drawerSettings.mini"
		:permanent="drawerSettings.permanent"
		app
		width="275"
		class="app-drawer"
	>
<!--		<template v-if="getUser">-->
		<template>
			<v-list-item class="logo-list-item logo py-3 px-4">
				<div class="drawer-logo d-block text-decoration-none">
					Asaka bank
				</div>
			</v-list-item>

			<v-list dense class="content-list-item py-0">
				<template v-for="item in menuPrimaryList">
					<!-- Checking if have child items -->
					<template v-if="item.children">
						<template
							v-if="
								currentUser.role_name === 'admin' ||
								item.role.includes(currentUser.role_name)
							"
						>
							<v-expansion-panels class="list-item-expand">
								<v-expansion-panel>
									<v-expansion-panel-header expand-icon="" class="pa-0">
										<v-list-item :ripple="false" class="py-2 pl-5">
											<div class="anchor-line-before" />

											<v-list-item-icon class="mr-4">
												<div class="list-icon d-flex align-center">
													<v-icon
														v-text="item.icon"
														color="#565360"
														size="22"
													></v-icon>
												</div>
											</v-list-item-icon>

											<v-list-item-content>
												<v-list-item-title>{{ item.text }}</v-list-item-title>
											</v-list-item-content>

											<v-list-item-icon class="ml-5 align-center">
												<chevron-down-icon
													style="color: #565360"
													size="1.3x"
													class="transition-ease-in-out"
												></chevron-down-icon>
											</v-list-item-icon>
										</v-list-item>
									</v-expansion-panel-header>

									<v-expansion-panel-content class="mt-1">
										<template v-for="subItem in item.children">
											<template
												v-if="
													currentUser.role_name === 'admin' ||
													subItem.role.includes(currentUser.role_name)
												"
											>
												<v-list-item
													:key="subItem.url"
													:ripple="false"
													:to="{ name: subItem.url }"
													class="py-2 pl-5"
													link
													active-class="active"
												>
													<div class="anchor-line-before" />

													<v-list-item-icon class="mr-4">
														<div class="d-flex align-center ma-auto">
															<circle-icon size="0.75x" class="primary-text"></circle-icon>
														</div>
													</v-list-item-icon>

													<v-list-item-content>
														<v-list-item-title>{{ subItem.text }}</v-list-item-title>
													</v-list-item-content>
												</v-list-item>
											</template>
										</template>
									</v-expansion-panel-content>
								</v-expansion-panel>
							</v-expansion-panels>
						</template>
					</template>

					<template v-else-if="!item.hasOwnProperty('prefixText')">
						<template
							v-if="
								currentUser.role_name === 'admin' ||
								item.role.includes(currentUser.role_name)
							"
						>
							<v-list-item
								:to="{ name: item.url }"
								link
								:key="item.url"
								:ripple="false"
								class="py-2 pl-5"
							>
								<div class="anchor-line-before" />
								<v-list-item-icon class="mr-4">
									<div class="list-icon d-flex align-center">
										<v-icon
											v-text="item.icon"
											color="#565360"
											size="22"
										></v-icon>
									</div>
								</v-list-item-icon>

								<v-list-item-content>
									<v-list-item-title>{{ item.text }}</v-list-item-title>
								</v-list-item-content>
							</v-list-item>
						</template>
					</template>

					<template v-else>
						<template
							v-if="
								currentUser.role_name === 'admin' ||
								item.role.includes(currentUser.role_name)
							"
						>
							<p class="list-item-prefix text-truncate font-600 pl-5 mt-3 mb-2">{{ item.text }}</p>
						</template>
					</template>
				</template>
			</v-list>
		</template>
	</v-navigation-drawer>
</template>

<script>
import { ChevronDownIcon, CircleIcon } from "vue-feather-icons";
import { mapGetters } from "vuex";

export default {
	name: "Sidebar",
	components: {
		ChevronDownIcon,
		CircleIcon
	},
	data() {
		return {
			drawerSettings: {
				drawer: true,
				mini: false,
				permanent: true,
				temporary: false
			},
			menuPrimaryList: []
		};
	},
	computed: {
		...mapGetters({
			currentUser: "auth/getCurrentUser"
		})
	},
	mounted() {
		if (this.$vuetify.breakpoint.thresholds.sm < 965) {
			this.drawerSettings.drawer = false;
			this.drawerSettings.permanent = false;
		}

		this.updateSidebarMenuTranslate();
	},
	beforeUpdate() {
		this.updateSidebarMenuTranslate();
	},
	methods: {
		/*
		*
		* */
		updateSidebarMenuTranslate() {
			this.menuPrimaryList = [
				// ============= User cabinet ==================== //
				{
					text: this.$t("userCabinet"),
					prefixText: true,
					role: ["client"]
				},
				{
					text: this.$t("myApplications"),
					url: "UserCabinet",
					icon: "$vuetify.icons.MailIcon",
					role: ["client"]
				},

				// ============= HR ==================== //
				{
					text: "HR",
					prefixText: true,
					role: ["hr_manager"]
				},
				// Incoming resumes
				{
					text: this.$t("incomingResumes"),
					url: "HR",
					icon: "$vuetify.icons.FileTextIcon",
					role: ["hr_manager"]
				},

				// ============= Tenders ==================== //
				{
					text: this.$t("tenders"),
					prefixText: true,
					role: ["tender_manager"]
				},
				// Applies list
				{
					text: this.$t("appliesList"),
					url: "Tenders",
					icon: "$vuetify.icons.FileTextIcon",
					role: ["tender_manager"]
				},

				// ============= Private clients ==================== //
				{
					text: this.$t("privateClients"),
					prefixText: true,
					role: ["plastic_card_officer", "card_deposit_credit_manager", "head_office_deposit_officer", "head_office_credit_officer", "head_office_plastic_card_officer"]
				},
				// Cards
				{
					text: this.$t("cardSection"),
					icon: "$vuetify.icons.CreditCardIcon",
					role: ["plastic_card_officer", "card_deposit_credit_manager", "head_office_plastic_card_officer"],
					children: [
						{
							text: this.$t("cardsList"),
							url: "PrivateClientsCards",
							role: []
						},
						{
							text: this.$t("appliesList"),
							url: "PrivateClientsCardsApplicationsList",
							role: ["plastic_card_officer", "card_deposit_credit_manager", "head_office_plastic_card_officer"]
						}
					]
				},
				// Credits
				{
					text: this.$t("creditSection"),
					icon: "$vuetify.icons.DollarSignIcon",
					role: ["credit_officer", "card_deposit_credit_manager", "head_office_credit_officer"],
					children: [
						{
							text: this.$t("creditList"),
							url: "PrivateClientsCredit",
							role: []
						},
						{
							text: this.$t("appliesList"),
							url: "PrivateClientsCreditApplicationsList",
							role: ["credit_officer", "card_deposit_credit_manager", "head_office_credit_officer"]
						}
					]
				},
				// Deposit
				{
					text: this.$t("depositSection"),
					icon: "$vuetify.icons.PercentIcon",
					role: ["deposit_officer", "card_deposit_credit_manager", "head_office_deposit_officer"],
					children: [
						{
							text: this.$t("depositsList"),
							url: "PrivateClientsDeposit",
							role: []
						},
						{
							text: this.$t("appliesList"),
							url: "PrivateClientsDepositApplicationsList",
							role: ["deposit_officer", "card_deposit_credit_manager", "head_office_deposit_officer"]
						}
					]
				},
				// Deposit boxes
				{
					text: this.$t("depositBoxSection"),
					icon: "$vuetify.icons.BoxIcon",
					role: [],
					children: [
						{
							text: this.$t("depositBoxView"),
							url: "PrivateClientsDepositSavingBoxPage",
							role: []
						},
						{
							text: this.$t("savingBoxesList"),
							url: "PrivateClientsDepositSavingBoxesList",
							role: []
						}
					]
				},
				// Money transfers
				{
					text: this.$t("moneyTransfers"),
					icon: "$vuetify.icons.RefreshCwIcon",
					role: [],
					children: [
						{
							text: this.$t("transfersList"),
							url: "PrivateClientsMoneyTransfers",
							role: []
						}
					]
				},

				// ============= Small business ==================== //
				{
					text: this.$t("smallBusiness"),
					prefixText: true,
					role: []
				},
				// Cards
				{
					text: this.$t("cardSection"),
					icon: "$vuetify.icons.CreditCardIcon",
					role: [],
					children: [
						{
							text: this.$t("cardsList"),
							url: "SmallBusinessCards",
							role: []
						},
						{
							text: this.$t("appliesList"),
							url: "SmallBusinessCardsApplicationsList",
							role: []
						}
					]
				},
				// Credit
				{
					text: this.$t("creditSection"),
					icon: "$vuetify.icons.DollarSignIcon",
					role: [],
					children: [
						{
							text: this.$t("depositsList"),
							url: "SmallBusinessCredit",
							role: []
						},
						{
							text: this.$t("appliesList"),
							url: "SmallBusinessCreditApplicationsList",
							role: []
						}
					]
				},
				// Financing
				{
					text: this.$t("financing"),
					icon: "$vuetify.icons.StarIcon",
					role: [],
					children: [
						{
							text: this.$t("financing"),
							url: "SmallBusinessFinancing",
							role: []
						},
						{
							text: this.$t("appliesList"),
							url: "SmallBusinessFinancingApplicationsList",
							role: []
						}
					]
				},

				// ============= Corporate clients ==================== //
				{
					text: this.$t("corporateClients"),
					prefixText: true,
					role: []
				},
				// Cards
				{
					text: this.$t("cardSection"),
					icon: "$vuetify.icons.CreditCardIcon",
					role: [],
					children: [
						{
							text: this.$t("cardsList"),
							url: "CorporateClientsCards",
							role: []
						},
						// {
						// 	text: this.$t("appliesList"),
						// 	url: "CorporateClientsCardsApplicationsList",
						// 	role: []
						// }
					]
				},
				// Credit
				{
					text: this.$t("creditSection"),
					icon: "$vuetify.icons.DollarSignIcon",
					role: [],
					children: [
						{
							text: this.$t("depositsList"),
							url: "CorporateClientsCredit",
							role: []
						},
						// {
						// 	text: this.$t("appliesList"),
						// 	url: "CorporateClientsCreditApplicationsList",
						// 	role: []
						// }
					]
				},

				// ============= About bank ==================== //
				{
					text: this.$t("aboutBank"),
					prefixText: true,
					role: []
				},
				// About bank
				{
					text: this.$t("aboutBank"),
					icon: "$vuetify.icons.StarIcon",
					role: [],
					children: [
						{
							text: this.$t("shareholders"),
							url: "AboutBankShareholders",
							role: []
						},
						{
							text: this.$t("achievement"),
							url: "AboutBankAchievement",
							role: []
						},
						{
							text: this.$t("career"),
							url: "AboutBankCareer",
							role: []
						},
						{
							text: this.$t("bankStructure"),
							url: "AboutBankBankStructure",
							role: []
						},
						{
							text: this.$t("structuralDivision"),
							url: "AboutBankStructuralDivision",
							role: []
						},
						{
							text: this.$t("publicOffer"),
							url: "AboutBankPublicOffer",
							role: []
						}
					]
				},

				// ============= Press center ==================== //
				{
					text: this.$t("pressCenter"),
					prefixText: true,
					role: []
				},
				// Press center
				{
					text: this.$t("pressCenter"),
					icon: "$vuetify.icons.BookmarkIcon",
					children: [
						{
							text: this.$t("category"),
							url: "PressCenterCategory",
							role: []
						},
						{
							text: this.$t("newsNotifications"),
							url: "PressCenterNewsAndNotifications",
							role: []
						},
						{
							text: this.$t("youthPolicy"),
							url: "PressCenterCareerYouthPolicy",
							role: []
						},
						{
							text: this.$t("financialLiteracy"),
							url: "PressCenterFinancialLiteracy",
							role: []
						},
						{
							text: this.$t("usefulLinks"),
							url: "PressCenterUsefulLinks",
							role: []
						},
						{
							text: this.$t("videoMaterials"),
							url: "PressCenterVideoMaterials",
							role: []
						},
						{
							text: this.$t("photoMaterials"),
							url: "PressCenterPhotoMaterials",
							role: []
						},
						{
							text: this.$t("stock"),
							url: "PressCenterStock",
							role: []
						},
						{
							text: this.$t("ads"),
							url: "PressCenterAds",
							role: []
						},
						{
							text: this.$t("partners"),
							url: "PressCenterPartners",
							role: []
						}
					],
					role: []
				},

				// ============= Feedback ==================== //
				{
					text: this.$t("feedback"),
					prefixText: true,
					role: ["compliance_manager", "appeal_officer", "head_office_appeal_officer"]
				},
				// Appeals
				{
					text: this.$t("appeals"),
					url: "FeedbackAppeals",
					icon: "$vuetify.icons.MailIcon",
					role: ["appeal_officer", "head_office_appeal_officer"]
				},
				// Complains manager
				{
					text: this.$t("complainsManager"),
					url: "FeedbackComplainsManager",
					icon: "$vuetify.icons.PhoneIcon",
					role: ["compliance_manager"]
				},

				// ============= Other sections ==================== //
				{
					text: this.$t("otherSections"),
					prefixText: true,
					role: []
				},
				// Country and Regions
				{
					text: `${this.$t("country")} & ${this.$t("region")}`,
					icon: "$vuetify.icons.MapPinIcon",
					role: [],
					children: [
						{
							text: this.$t("countriesList"),
							url: "OtherSectionsCountryList",
							role: []
						},
						{
							text: this.$t("regionsList"),
							url: "OtherSectionsRegionList",
							role: []
						},
						{
							text: this.$t("branchesList"),
							url: "OtherSectionsBranchesList",
							role: []
						}
					]
				},
				// Users
				{
					text: this.$t("users"),
					icon: "$vuetify.icons.UsersIcon",
					role: [],
					children: [
						{
							text: this.$t("usersList"),
							url: "OtherSectionsUsersList",
							role: []
						},
						{
							text: this.$t("rolesList"),
							url: "OtherSectionsRolesList",
							role: []
						}
					]
				},
				// Documents
				{
					text: this.$t("documentsSection"),
					icon: "$vuetify.icons.FileTextIcon",
					role: [],
					children: [
						{
							text: this.$t("documents"),
							url: "OtherSectionsDocuments",
							role: []
						},
						{
							text: this.$t("annualDocuments"),
							url: "OtherSectionsAnnualDocuments",
							role: []
						},
						{
							text: this.$t("importantFacts"),
							url: "OtherSectionsImportantFacts",
							role: []
						},
						{
							text: this.$t("openData"),
							url: "OtherSectionsOpenData",
							role: []
						}
					]
				},
				// Category
				{
					text: this.$t("category"),
					icon: "$vuetify.icons.LayoutIcon",
					url: "OtherSectionsCategory",
					role: []
				},
				// Online pools
				{
					text: this.$t("onlinePolls"),
					icon: "$vuetify.icons.MessageSquareIcon",
					url: "OtherSectionsOnlinePools",
					role: []
				},
				// Slide section
				{
					text: this.$t("sliderSection"),
					icon: "$vuetify.icons.CopyIcon",
					url: "OtherSectionsSlideSection",
					role: []
				},
			]
		}
	}
};
</script>

<style>
.app-drawer {
	box-shadow: 0 0 15px 0 rgba(34, 41, 47, 0.05) !important;
}

.app-drawer.v-navigation-drawer {
	background: var(--theme-layout) !important;
}

.app-drawer .v-expansion-panels .v-expansion-panel {
	background-color: var(--theme-layout) !important;
}

.app-drawer .v-navigation-drawer__border {
	background-color: var(--text-outline) !important;
}

.app-drawer .v-navigation-drawer__border,
.app-drawer .v-expansion-panel:before,
.app-drawer.v-navigation-drawer--mini-variant .list-item-prefix,
.app-drawer.v-navigation-drawer--mini-variant .v-list-item .v-list-item__icon:last-child svg {
	display: none !important;
}

.app-drawer .v-list-item {
	min-height: 40px !important;
	background: var(--theme-layout) !important;
}

.app-drawer .footer-list-item,
.app-drawer .v-expansion-panel--active > .v-expansion-panel-header {
	min-height: 56px !important;
}

.app-drawer .v-navigation-drawer__content {
	display: flex !important;
	flex-direction: column !important;
}

.app-drawer.v-navigation-drawer--mini-variant .v-list .v-list-item {
	padding-left: 16px !important;
}

.app-drawer .v-list-item--link:before,
.app-drawer .v-list-item--active:focus::before,
.app-drawer .v-list-item--active:hover::before,
.app-drawer .v-list-item:hover:before {
	opacity: 0 !important;
}

.app-drawer .v-list-item--active .anchor-line-before,
.app-drawer .v-list-item:hover .anchor-line-before {
	opacity: 1 !important;
}

.app-drawer .v-list-item__title {
	font-size: 0.9rem !important;
	font-family: var(--font-semiBold) !important;
}

.app-drawer .v-list-item--active,
.app-drawer .v-list-item:hover {
	background: var(--theme-bg) !important;
}

.app-drawer.v-navigation-drawer--mini-variant .v-list-item__icon {
	clip: initial !important;
	min-height: 24px !important;
	display: flex !important;
	align-items: center !important;
}

.app-drawer .v-expansion-panel--active .v-list-item__icon > svg {
	transform: rotate(180deg) !important;
}

.app-drawer .list-item-expand,
.app-drawer .v-expansion-panel {
	border-radius: 0 !important;
}

.app-drawer .v-expansion-panels {
	z-index: 0 !important;
}

.app-drawer .v-expansion-panel-content__wrap {
	padding: 0 !important;
}

.app-drawer .content-list-item > *:not(:last-child) {
	margin-bottom: 4px !important;
}

.logo-list-item {
	flex: initial !important;
}

.content-list-item {
	flex: 1 !important;
}

.list-item-prefix {
	color: #a6a4b0;
	font-size: 0.9rem;
}

.anchor-line-before {
	position: absolute;
	left: 0;
	top: 0;
	width: 4px;
	height: 100%;
	background: rgba(var(--primary), 1);
	border-top-right-radius: 5px;
	border-bottom-right-radius: 5px;
	opacity: 0;
	transition: opacity 200ms;
}
</style>
