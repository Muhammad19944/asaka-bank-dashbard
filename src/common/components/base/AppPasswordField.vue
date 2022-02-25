<template>
	<div class="app-input">
		<template v-if="label">
			<p class="font-700 dark-text mb-2">{{ label }}</p>
		</template>

		<v-text-field
			@click:append="passwordShow = !passwordShow"
			:append-icon="passwordShow ? '$vuetify.icons.EyeOfIcon' : '$vuetify.icons.EyeIcon'"
			v-on="$listeners"
			v-bind="$attrs"
			outlined
			:type="passwordShow ? 'text' : 'password'"
			:placeholder="placeholder"
		>
		</v-text-field>
	</div>
</template>

<script>
import AppTextField from "@/common/components/base/AppTextField";
import extendComponents from "@/common/mixins/extendComponent"

export default extendComponents(AppTextField).extend({
	name: "AppPasswordField",
	data() {
		return {
			passwordShow: false
		}
	}
})
</script>
