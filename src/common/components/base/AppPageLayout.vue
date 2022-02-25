<template>
	<div class="d-flex flex-column h-100">
		<div class="layout-filter bg-white pa-4 rounded-lg">
			<v-row>
				<v-col md="3">
					<app-text-field
						v-model="scopedProps.filters.search"
						placeholder="Поиск..."
						hide-details
					/>
				</v-col>

				<slot name="layout-filter" />
			</v-row>
		</div>

		<div class="d-flex flex-column flex-1 overflow-y-auto my-5">
			<p class="text-secondary-dark font-600 mb-2">{{ $t("CVList") }} ({{ scopedProps.count }})</p>

			<div class="bg-white overflow-y-auto h-100">
				<template v-if="scopedProps.loading">
					<div class="h-100">
						<app-loader />
					</div>
				</template>

				<template v-if="scopedProps.list.length">
					<slot name="layout-content" />
				</template>

				<template v-else>
					<div class="d-flex align-center justify-center h-100">
						<h1 class="font-500">{{ $t("notFound") }}</h1>
					</div>
				</template>
			</div>
		</div>

		<div>
			<app-pagination @emit:up="scopedProps.paginate" />
		</div>
	</div>
</template>

<script>
export default {
	name: "AppPageLayout",
	props: {
		scopedProps: {
			type: Object,
			default: () => {}
		}
	}
}
</script>
