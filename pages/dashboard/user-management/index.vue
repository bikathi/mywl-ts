<template>
	<client-only>
		<main>
			<div class="my-4 flex justify-between items-center">
				<h1 class="text-xl md:text-3xl">Application Users</h1>
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
							<!-- start of user's table -->
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
											Miscellaneous
										</th>
										<th
											scope="col"
											class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-gray-400">
											Account Status
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
									<UsersTableLoader v-if="showTableLoader" />
									<UsersTable
										v-else-if="!showTableLoader"
										v-for="(user, index) in responseData"
										:key="index"
										:first-name="user.firstName"
										:other-name="user.otherName"
										:email="user.email"
										:profile-image="user.profileImage"
										:department="user.department"
										:username="user.username"
										:user-id="user.userId"
										:status="user.accountEnabled" />
								</tbody>
							</table>
							<!-- end of user's table -->
						</div>
					</div>
				</div>
			</div>
			<div class="py-2">
				<button
					v-if="showLoadMoreButton"
					@click="
						async () => {
							page++;
							await loadExistingUsers();
						}
					"
					type="button"
					class="py-2 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
					<span
						v-if="loadingUsers"
						class="animate-spin inline-block w-4 h-4 border-[3px] border-current border-t-transparent text-white rounded-full"
						role="status"
						aria-label="loading"></span>
					<span v-if="loadingUsers">Loading</span>
					<span v-else>Load More</span>
				</button>
			</div>

			<!-- start of user management form -->
			<h1 class="text-3xl mt-4">User Management Form</h1>
			<span
				class="mb-4 text-sm font-extralight tracking-wider inline-flex items-center"
				><Icon
					name="ri:information-line"
					color="currentColor"
					size="16"
					class="mr-1" />To add a new user,
				<button
					class="mx-1 text-blue-500 underline font-medium underline-offset-2">
					clear</button
				>this form</span
			>
			<UserManagementForm />
			<!-- end of user management form -->
			<DashboardFooter />
		</main>
	</client-only>
</template>

<script setup lang="ts">
	definePageMeta({
		name: 'user-manager',
		layout: 'dashboard-layout',
	});

	const loadingUsers: Ref<boolean> = ref(false);
	const page: Ref<number> = ref(0);
	const size: Ref<number> = ref(10);
	const { openToast } = useToast();
	const responseData: Ref<object[]> = ref([]);
	const showTableLoader: Ref<boolean> = ref(false);
	const showLoadMoreButton: Ref<boolean> = ref(false);

	async function loadExistingUsers() {
		loadingUsers.value = true;
		await useFetch(
			`/api/v1/accounts/get-list?page=${page.value}&size=${size.value}`,
			{
				method: 'GET',
				headers: {
					Accept: 'application/json',
				},
				async onRequestError() {
					loadingUsers.value = false;
					openToast(
						'Something went wrong. Please try again.',
						'danger',
					);
				},
				async onResponse({ response }) {
					loadingUsers.value = false;
					if (!(response._data.data.length < size.value)) {
						showLoadMoreButton.value = true;
					}

					for (let user in response._data.data) {
						responseData.value.push(response._data.data[user]);
					}
				},
			},
		);
	}

	onMounted(async () => {
		showTableLoader.value = true;
		await useFetch(`/api/v1/accounts/get-list?page=0&size=10`, {
			method: 'GET',
			headers: {
				Accept: 'application/json',
			},
			async onRequestError() {
				showTableLoader.value = false;
				openToast('Something went wrong. Please try again.', 'danger');
			},
			async onResponse({ response }) {
				showTableLoader.value = false;
				responseData.value = response._data.data;
				if (!(response._data.data.length < size.value)) {
					showLoadMoreButton.value = true;
				}
			},
		});
	});
</script>
