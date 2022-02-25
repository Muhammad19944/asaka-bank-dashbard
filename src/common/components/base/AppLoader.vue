<template>
	<div class="d-flex align-center justify-center h-100">
		<v-progress-circular
			indeterminate
			:color="color"
			:size="size"
		></v-progress-circular>
	</div>
</template>

<script>
export default {
	name: "AppLoader",
	props: {
		size: {
			type: [Number, String],
			default: 32
		},
		color: {
			type: String,
			default: "primary"
		}
	}
}
</script>
