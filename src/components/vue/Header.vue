<template>
	<header class="relative flex items-center h-12 font-semibold">
		<a href="/" class="text-lg mr-auto">Home</a>

		<div
			id="astro-header-drawer"
			class="shadow rounded-l-lg md:bg-transparent dark:md:bg-transparent bg-white dark:bg-[#0a0910] md:shadow-none md:rounded-none md:border-none md:h-auto md:static absolute transition-transform duration-300 ease-in translate-x-96 md:translate-x-0 top-12 -right-5 pl-4 pt-6 pb-4 md:p-0 h-[200px] w-[200px] z-50"
		>
			<nav
				class="flex h-full flex-col justify-between gap-12 text-left md:flex-row md:w-full md:gap-5"
			>
				<div
					class="flex flex-col gap-4 md:flex-row md:border-r-2 border-black pr-4 dark:border-white"
				>
					<HeaderLink />
				</div>
			</nav>
		</div>
	</header>
</template>

<script setup>
import HeaderLink from './HeaderLink.vue'
</script>
