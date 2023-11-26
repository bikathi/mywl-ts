<template>
	<div class="overflow-x-hidden">
		<h1 class="text-3xl font-bold my-4 border-b pb-4">Issue Tracking</h1>
		<div class="flex flex-col lg:flex-row mt-3">
			<div class="space-y-5 w-full lg:w-1/4 h-full">
				<div class="w-full flex flex-col space-y-6 pl-0 lg:pl-3">
					<NuxtLink :to="{ name: 'issues-home' }">General</NuxtLink>
					<NuxtLink :to="{ name: 'open-issues' }"
						>Open Issues</NuxtLink
					>
					<NuxtLink :to="{ name: 'closed-issues' }"
						>Closed Issues</NuxtLink
					>
				</div>
			</div>
			<hr
				class="border-gray-800 dark:border-white my-4 opacity-50 lg:hidden" />
			<div class="w-full">
				<NuxtPage />
			</div>
		</div>
		<hr class="border-gray-800 dark:border-white my-4 opacity-50" />
		<div>
			<div class="space-x-5 font-medium text-sm">
				<span>Terms</span>
				<span>Privacy Notice</span>
			</div>
			<h1 class="text-3xl font-bold my-4">Poa Internet</h1>
			<span class="text-xs font-medium"
				>Copyright &copy; 2023. Property of Poa Internet.</span
			>
		</div>
	</div>
</template>

<script setup>
	definePageMeta({
		layout: 'dashboard-layout',
	});
</script>
