<template>
	<span v-if="t" v-bind="$attrs">{{ $t(t) }}</span>
	<span v-else v-bind="$attrs">
	    {{ $i18n.locale === "en" ? en : $i18n.locale === "ru" ? ru : uz }}
	    <slot name="prefix" />
    </span>
</template>

<script>
export default {
	name: "AppI18nVue",
	props: ["uz", "ru", "en", "t"],
}
</script>
