<template>
	<div class="header-language">
		<div class="app-form-group">
			<v-select
				@change="changeLang"
				v-model="language"
				:items="listLang"
				solo
				flat
				hide-details
				class="text-capitalize"
			>
				<template v-slot:append>
					<chevron-down-icon size="1.2x" class="primary-text" />
				</template>
			</v-select>
		</div>
	</div>
</template>

<script>
import { loadLanguageAsync, languagesAvailable, navigatorCloseLanguage } from "@/plugins/i18n"
import { ChevronDownIcon } from "vue-feather-icons"

export default {
	name: 'Language',
	components: {
		ChevronDownIcon,
	},
	data() {
		return {
			language: "ru",
			listLang: languagesAvailable
		}
	},
	created() {
		navigatorCloseLanguage()
	},
	methods: {
		changeLang(lang) {
			loadLanguageAsync(lang)
		}
	}
}
</script>

<style>
.header-language .v-select__selections {
	max-width: 27px;
	font-size: 14px;
	line-height: 25px;
}

.header-language .v-select__selection {
	font-family: var(--font-semiBold);
}
</style>
