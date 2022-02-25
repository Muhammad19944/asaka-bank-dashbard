<template>
	<div class="app-input">
		<template v-if="label">
			<p class="font-700 dark-text mb-2">{{ label }}</p>
		</template>

		<v-select
			v-on="$listeners"
			v-bind="$attrs"
			outlined
			clearable
			:placeholder="placeholder"
		>
			<template #append>
				<chevron-down-icon size="22" color="#565360" />
			</template>
		</v-select>
	</div>
</template>

<script>
import AppTextField from "@/common/components/base/AppTextField"
import extendComponents from "@/common/mixins/extendComponent"

import { ChevronDownIcon } from "vue-feather-icons"

export default extendComponents(AppTextField).extend({
	name: "AppSelect",
	components: {
		ChevronDownIcon
	}
})
</script>
