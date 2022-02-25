<template>
	<div class="app-input">
		<template v-if="label">
			<p class="font-700 dark-text mb-2">{{ label }}</p>
		</template>

		<v-text-field
			v-on="$listeners"
			v-bind="$attrs"
			outlined
			clearable
			:placeholder="placeholder"
		>
		</v-text-field>
	</div>
</template>

<script>
export default {
	name: "AppTextField",
	props: {
		value: {
			type: [Number, String],
			default: () => ""
		},
		label: {
			type: String,
			default: ""
		},
		placeholder: {
			type: String,
			default: ""
		},
	},
	computed: {
		content: {
			get() {
				return this.value;
			},
			set(value) {
				this.$emit("input", value);
			}
		}
	}
}
</script>
