<template>
	<div class="overflow-x-hidden">
		<h1 class="text-3xl font-bold my-4 border-b pb-4">
			Project Management
		</h1>
		<div class="flex flex-col space-y-2 pl-3">
			<NuxtLink :to="{ name: 'projects-home' }">General</NuxtLink>
			<NuxtLink :to="{ name: 'open-projects' }">Open Projects</NuxtLink>
			<NuxtLink :to="{ name: 'closed-projects' }"
				>Closed Projects</NuxtLink
			>
		</div>
	</div>
	<div>
		<NuxtPage />
	</div>
	<DashboardFooter />
</template>

<script setup>
	definePageMeta({
		layout: 'dashboard-layout',
	});
</script>
