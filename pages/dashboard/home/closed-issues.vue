<template>
	<main>
		<div class="mb-4">
			<h1 class="text-2xl font-bold mt-4 mb-2">Closed Issues</h1>
			<!-- table to show the open issues -->
			<div class="flex flex-col">
				<div class="-m-1.5 overflow-x-auto">
					<div class="p-1.5 min-w-full inline-block align-middle">
						<div
							class="border rounded-lg overflow-hidden dark:border-gray-700">
							<table
								class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
								<thead class="bg-gray-50 dark:bg-gray-700">
									<tr>
										<th
											scope="col"
											class="issue-table-headers">
											Title
										</th>
										<th
											scope="col"
											class="issue-table-headers">
											Technicians / Handlers
										</th>
										<th
											scope="col"
											class="issue-table-headers">
											Status
										</th>
										<th
											scope="col"
											class="issue-table-headers">
											Opened By
										</th>
									</tr>
								</thead>
								<IssueTable
									v-for="(issue, index) in responseData"
									:key="index"
									:technician-a="`${issue.handlerUsers[0].firstName} ${issue.handlerUsers[0].otherName}`"
									:technician-b="`${issue.handlerUsers[1].firstName} ${issue.handlerUsers[1].otherName}`"
									:client-name="issue.clientName"
									status="active"
									:title="issue.issueTitle"
									:id="issue.issueId"
									:date="issue.dateReported"
									:opened-by="`${issue.openedByUser.firstName} ${issue.openedByUser.otherName}`"
									opened-status="false" />
							</table>
						</div>
					</div>
				</div>
			</div>
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
	const showLoadMoreButton: Ref<boolean> = ref(false);
	const showTableLoader: Ref<boolean> = ref(false);
	const responseData: Ref<object[]> = ref([]);
	const page: Ref<number> = ref(0);
	const size: Ref<number> = ref(10);

	try {
		showTableLoader.value = true;
		await useFetch(
			`/api/v1/issues/get-list-by-status?page=0&size=10&issueClosed=true`,
			{
				method: 'GET',
				server: false,
				headers: {
					Accept: 'application/json',
				},
				async onResponse({ response }) {
					showTableLoader.value = false;
					await handleResponse(response);
				},
			},
		);
	} catch (error) {}

	async function loadMoreIssues() {
		loadingMoreIssues.value = true;
		try {
			await $fetch(
				`/api/v1/accounts/get-list?page=${page.value}&size=${size.value}`,
				{
					method: 'GET',
					headers: {
						Accept: 'application/json',
					},
					async onResponse({ response }) {
						loadingMoreIssues.value = false;
						await handleResponse(response);
					},
				},
			);
		} catch (error) {}
	}

	async function handleResponse(response) {
		if (!(response._data.data.length < size.value)) {
			showLoadMoreButton.value = true;
		}

		for (let issue in response._data.data) {
			responseData.value.push(response._data.data[issue]);
		}
	}
</script>
