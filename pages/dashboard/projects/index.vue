<template>
	<div class="h-full w-full min-h-full py-2 overflow-x-auto">
		<h1 class="text-xl md:text-3xl my-4">Organization Projects</h1>
		<div class="flex flex-col">
			<div class="overflow-x-auto">
				<div class="p-1.5 min-w-full inline-block align-middle">
					<div
						class="border rounded-lg shadow overflow-hidden dark:border-gray-700 dark:shadow-gray-900">
						<!-- start of projects table -->
						<table
							class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
							<tbody
								class="divide-y divide-gray-200 dark:divide-gray-700">
								<ProjectListItem
									v-for="(item, index) in 4"
									status="Active" />
							</tbody>
						</table>
						<!-- end of projects table -->
					</div>
				</div>
			</div>
		</div>
		<div class="py-2">
			<button
				@click="loadMoreProjects"
				type="button"
				class="py-2 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
				<span
					v-if="loadingMoreProjects"
					class="animate-spin inline-block w-4 h-4 border-[3px] border-current border-t-transparent text-white rounded-full"
					role="status"
					aria-label="loading"></span>
				<span v-if="loadingMoreProjects">Loading</span>
				<span v-else>Load More</span>
			</button>
		</div>
	</div>
</template>

<script setup lang="ts">
	definePageMeta({
		name: 'projects-home',
		layout: 'dashboard-layout',
	});

	const loadingMoreProjects: Ref<boolean> = ref(false);
	const loadMoreProjects = (): void => {
		loadingMoreProjects.value = true;

		setTimeout(() => {
			// load more comments from the server
			loadingMoreProjects.value = false;
		}, 3000);
	};
</script>
