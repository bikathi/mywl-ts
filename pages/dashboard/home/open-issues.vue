<template>
	<main>
		<div class="mb-4">
			<h1 class="text-2xl font-bold mt-4 mb-2">Open A New Issue</h1>
			<span
				class="mb-1 mt-3 text-sm font-extralight tracking-wider inline-flex items-center"
				><Icon
					name="ri:information-line"
					color="currentColor"
					size="16"
					class="mr-1" />Expand this Section to Open a New Issue</span
			>
			<button
				type="button"
				class="hs-collapse-toggle py-3 px-4 inline-flex items-center justify-between text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 w-full"
				id="hs-basic-collapse"
				data-hs-collapse="#hs-basic-collapse-heading">
				Click to Expand Section
				<svg
					class="hs-collapse-open:rotate-180 flex-shrink-0 w-4 h-4 text-white"
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round">
					<path d="m6 9 6 6 6-6" />
				</svg>
			</button>
			<div
				id="hs-basic-collapse-heading"
				class="hs-collapse hidden w-full overflow-hidden transition-[height] duration-300"
				aria-labelledby="hs-basic-collapse">
				<OpenNewIssueForm />
			</div>
		</div>
		<div class="mb-4">
			<h1 class="text-2xl font-bold mt-4 mb-2">Open Issues</h1>
			<!-- table to show the open issues -->
			<IssueTable
				assignee="John Doe"
				client-name="Solomon Kane"
				status="active"
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
		name: 'open-issues',
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
