<template>
	<main>
		<div class="mb-4">
			<h1 class="text-2xl font-bold mt-4 mb-2">Closed Issues</h1>
			<!-- table to show the open issues -->
			<IssueTable
				assignee="John Doe"
				client-name="Solomon Kane"
				status="closed"
				title="Example Title"
				id="xfdgvb4thsmd"
				date="28-11-2023"
				opened-by="John Doe" />
			<span
				class="mb-4 text-sm font-extralight tracking-wider inline-flex items-center lg:hidden"
				><Icon
					name="ri:information-line"
					color="currentColor"
					size="16"
					class="mr-1" />Scroll left-right on the table to see
				more</span
			>
			<div class="py-2">
				<button
					@click="loadMoreIssues"
					type="button"
					class="py-2 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
					<span
						v-if="loadingMoreIssues"
						class="animate-spin inline-block w-4 h-4 border-[3px] border-current border-t-transparent text-white rounded-full"
						role="status"
						aria-label="loading"></span>
					<span v-if="loadingMoreIssues">Loading</span>
					<span v-else>Load More</span>
				</button>
			</div>
		</div>
	</main>
</template>

<script setup lang="ts">
	definePageMeta({
		name: 'closed-issues',
	});

	const loadingMoreIssues: Ref<boolean> = ref(false);
	const loadMoreIssues = (): void => {
		loadingMoreIssues.value = true;

		setTimeout(() => {
			// load more comments from the server
			loadingMoreIssues.value = false;
		}, 3000);
	};
</script>
