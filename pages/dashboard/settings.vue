<template>
	<div class="overflow-x-hidden">
		<h1 class="text-3xl font-bold my-4 border-b pb-4">Settings</h1>
		<div class="flex flex-col lg:flex-row mt-3">
			<div class="space-y-5 w-full lg:w-1/4 h-full">
				<div class="flex flex-col space-y-6 pl-0 lg:pl-3">
					<NuxtLink :to="{ name: 'general-settings' }"
						>General</NuxtLink
					>
					<NuxtLink :to="{ name: 'preferences-settings' }"
						>Preferences</NuxtLink
					>
				</div>
			</div>
			<hr
				class="border-gray-800 dark:border-white my-4 opacity-50 lg:hidden" />
			<div class="w-full">
				<NuxtPage />
			</div>
		</div>
		<DashboardFooter />
	</div>
</template>

<script setup>
	definePageMeta({
		layout: 'dashboard-layout',
	});
</script>
