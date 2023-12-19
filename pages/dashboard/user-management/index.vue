<template>
	<main>
		<div class="my-4 flex justify-between">
			<h1 class="text-3xl">Application Users</h1>
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
		<!-- start of search users modal -->
		<SearchUsersModal />
		<!-- end of search users modal -->
		<div class="flex flex-col">
			<div class="-m-1.5 overflow-x-auto">
				<div class="p-1.5 min-w-full inline-block align-middle">
					<div
						class="border rounded-lg shadow overflow-hidden dark:border-gray-700 dark:shadow-gray-900">
						<table
							class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
							<thead class="bg-gray-50 dark:bg-gray-700">
								<tr>
									<th
										scope="col"
										class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-gray-400">
										User
									</th>
									<th
										scope="col"
										class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-gray-400">
										Image
									</th>
									<th
										scope="col"
										class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-gray-400">
										Department
									</th>
									<th
										scope="col"
										class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-gray-400">
										Role
									</th>
									<th
										scope="col"
										class="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-gray-400">
										Action
									</th>
								</tr>
							</thead>
							<tbody
								class="divide-y divide-gray-200 dark:divide-gray-700">
								<tr
									v-for="(a, index) in 5"
									:key="index">
									<td
										class="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
										<span class="inline-flex flex-col">
											<span>John Doe</span>
											<span
												class="text-xs bg-gray-500 p-1 rounded-md"
												>johndoe@gmail.com</span
											>
										</span>
									</td>
									<td
										class="px-6 py-2 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
										<UserAvatar />
									</td>
									<td
										class="px-6 py-2 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
										Field Technician Agent
									</td>
									<td
										class="px-6 py-2 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
										ADMIN
									</td>
									<td
										class="px-6 py-2 whitespace-nowrap text-end text-sm font-medium">
										<button
											type="button"
											class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
											Modify
										</button>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
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
	</main>
</template>

<script setup lang="ts">
	definePageMeta({
		name: 'user-manager',
		layout: 'dashboard-layout',
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
