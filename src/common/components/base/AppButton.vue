<template>
	<v-btn
		v-on="$listeners"
		v-bind="$attrs"
		depressed
		:color="color"
		:height="height"
		:loading="isButtonLoading"
	>
		<div v-if="$slots.prepend" class="slot-icons mr-2">
			<slot name="prepend" />
		</div>

		<span class="text--h5">
			<slot />
		</span>

		<div v-if="$slots.append" class="slot-icons ml-2">
			<slot name="append" />
		</div>
	</v-btn>
</template>

<script>
import { mapGetters } from "vuex"

export default {
	name: "AppButton",
	props: {
		color: {
			type: String,
			default: "primary"
		},
		height: {
			type: [Number, String],
			default: 50
		}
	},
	computed: {
		...mapGetters({
			isButtonLoading: "getIsButtonLoading"
		})
	}
}
</script>

<style>
.slot-icons > svg {
	display: block;
}
</style>
