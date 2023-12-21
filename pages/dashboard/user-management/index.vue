<template>
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
						<UsersTable />
						<!-- end of user's table -->
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
				clear
			</button>this form</span
		>
		<UserManagementForm />
		<!-- end of user management form -->
		<DashboardFooter />
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
