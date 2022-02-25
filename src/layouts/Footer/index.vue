<template>
	<footer
		class="
            admin-app-footer
            d-sm-flex
            align-center
            justify-space-between
            p-fixed
            mt-auto
            pb-sm-5
            pt-sm-4
            pa-3
            px-sm-7
            text-secondary-dark-2 text-center
        "
	>
		<p class="text-small mb-sm-0 mb-1 font-600 w-100">
			©
			<a target="_blank" rel="noopener noreferrer" href="/" class="text-dark text-decoration-none"> Asakabank
				Dasturchilari </a>
			tomonidan
			2021 yilda ishlab chiqarildi - Hammasi qonuniy.
		</p>
	</footer>
</template>

<script>
export default {
	name: 'Footer',
}
</script>

<style>
.admin-app-footer {
	background: var(--theme-layout);
	bottom: 0;
	right: 0;
	transition: width 200ms;
	width: calc(100% - 275px);
}
</style>
