<template>
	<div v-if="$store.state.pageOptions.page_length > 0" class="app-pagination">
		<v-pagination
			v-on="$listeners"
			v-bind="$attrs"
			@input="$emit('emit:up', $store.state.pageOptions.page)"
			v-model="$store.state.pageOptions.page"
			:length="$store.state.pageOptions.page_length"
			:total-visible="7"
		></v-pagination>
	</div>
</template>

<script>
export default {
	name: "AppPagination"
}
</script>

<style>
.app-pagination .v-pagination {
	justify-content: flex-start;
}

.app-pagination .v-pagination__item,
.app-pagination .v-pagination__navigation {
	height: 40px;
	min-width: 40px;
	box-shadow: none !important;
	outline: transparent !important;
	border: 1px solid rgba(var(--border-color), 1);
}
</style>
