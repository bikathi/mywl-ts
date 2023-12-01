<template>
	<div class="overflow-x-hidden">
		<div class="border-b pb-4 my-4 flex justify-between">
			<h1 class="text-3xl">Project Management</h1>
			<button
				type="button"
				class="py-2 rounded-full px-4 inline-flex items-center gap-x-2 text-sm font-semibold border border-transparent bg-blue-600 text-white hover:bg-blue-700"
				data-hs-overlay="#hs-basic-modal">
				Search
				<Icon
					name="cil:search"
					color="currentColor"
					size="17" />
			</button>
		</div>
		<!-- start of search project modal -->
		<SearchProjectModal />
		<!-- end of search project modal -->
		<div class="flex flex-col lg:flex-row mt-3">
			<div class="space-y-5 w-full lg:w-1/4 h-full">
				<div class="w-full flex flex-col space-y-4 pl-0 lg:pl-3">
					<NuxtLink :to="{ name: 'projects-home' }">General</NuxtLink>
					<NuxtLink :to="{ name: 'open-projects' }"
						>Open Projects</NuxtLink
					>
					<NuxtLink :to="{ name: 'closed-projects' }"
						>Closed Projects</NuxtLink
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

<script setup lang="ts">
	definePageMeta({
		layout: 'dashboard-layout',
	});
</script>
