<template>
	<div class="overflow-x-hidden">
		<!-- <div class="border-b pb-4 my-4 flex justify-between items-center">
			<h1 class="text-3xl">Issue Tracking</h1>
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
		</div> -->
		<!-- start of search modal -->
		<!-- <SearchIssueModal /> -->
		<!-- End of search modal -->
		<div class="flex flex-col lg:flex-row mt-3">
			<div class="space-y-5 w-full lg:w-1/4 h-full">
				<div class="w-full flex flex-col space-y-4 pl-0 lg:pl-3">
					<!-- <NuxtLink :to="{ name: 'issues-home' }">General</NuxtLink> -->
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
		<DashboardFooter />
	</div>
</template>

<script setup lang="ts">
	definePageMeta({
		layout: 'dashboard-layout',
	});
</script>
