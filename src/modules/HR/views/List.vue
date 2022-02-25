<template>
	<div class="hr-view h-100">
		<app-page-scope-renderless api-url="job_app/action">
			<template slot-scope="{ filters, paginate, list, count, loading }">
				<app-page-layout :scoped-props="{ filters, paginate, list, count, loading }">
					<template #layout-filter>
						<v-col md="3">
							<app-select
								v-model="filters.status"
								:items="statusList"
								item-text="name_uz"
								item-value="id"
								hide-details
								:placeholder="$t('sortByStatus')"
							/>
						</v-col>
					</template>

					<template #layout-content>
						<v-simple-table class="admin-table">
							<tbody>
								<tr
									class="transition-fast-out-slow-in"
									v-for="item in list"
									:key="item.id"
								>
									<td class="admin-table-td" width="300">
										<h4 class="font-500">
											{{ item.full_name }}
										</h4>

										<span class="text-small font-600 text-secondary-dark d-block">
											{{ $t("fullName") }}
										</span>
									</td>
									<td class="admin-table-td" width="300">
										<template v-if="item.vacancy_title">
											<h4 class="font-500">
												{{ item.vacancy_title }}
											</h4>
										</template>

										<template v-else>
											<h4 class="font-500">{{ $t('notSelected') }}</h4>
										</template>

										<span class="text-small font-600 text-secondary-dark d-block">{{ $t("vacancyTitle") }}</span>
									</td>
									<td class="admin-table-td" width="350">
										<template v-if="item.district">
											<h4 class="font-500">
												<app-i18n-vue
													:uz="item.district.name_uz"
													:ru="item.district.name_ru"
													:en="item.district.name_en"
												/>
											</h4>
										</template>

										<template v-else>
											<h4 class="font-500">{{ $t('notSelected') }}</h4>
										</template>

										<span class="text-small font-600 text-secondary-dark d-block">{{ $t("region") }}</span>
									</td>
									<td class="admin-table-td" width="200">
										<template v-if="item.status">
											<v-chip
												color="primary"
												text-color="white"
												small
												class="mb-1 text-capitalize mr-2"
											>
												<app-i18n-vue
													:uz="item.status.name_uz"
													:ru="item.status.name_ru"
													:en="item.status.name_en"
												/>
											</v-chip>
										</template>

										<span class="text-small font-600 text-secondary-dark d-block">{{ $t("status") }}</span>
									</td>
									<td class="admin-table-td" width="250">
										<h4 class="font-500">{{ item.created_date | filterDateAndTimeHour }}</h4>

										<span class="text-small font-600 text-secondary-dark d-block">
											{{ $t("date") }}
										</span>
									</td>
									<td class="admin-table-td" width="100">
<!--										:to="{name: 'AdminHRApplicationsRead', params: { id: item.id }}"-->
										<v-btn
											depressed
											icon
											color="info"
										>
											<v-icon size="22">{{ "$vuetify.icons.EyeIcon" }}</v-icon>
										</v-btn>
									</td>
								</tr>
							</tbody>
						</v-simple-table>
					</template>
				</app-page-layout>
			</template>
		</app-page-scope-renderless>
	</div>
</template>

<script>
import { mapGetters } from "vuex"

export default {
	name: "List",
	computed: {
		...mapGetters({
			moduleLoaded: "getIsModuleLoaded",
			statusList: "getStatusList"
		})
	},
	// data() {
	// 	return {
	// 		unsubscribe: null
	// 	}
	// },
	// mounted() {
	// 	this.subscribe = this.$store.watch(
	// 		(state, getters) => {
	// 			return [state, getters];
	// 		},
	// 		watched => {
	// 			console.log("Count is:", watched[0]);
	// 			console.log("Count plus one is:", watched[1]["hr/getTest"]);
	// 		},
	// 		{}
	// 	);
	// },
	// beforeDestroy() {
	// 	this.subscribe()
	// }
}
</script>
