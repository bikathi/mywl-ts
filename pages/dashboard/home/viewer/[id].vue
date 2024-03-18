<template>
	<main>
		<h1 class="text-4xl">
			{{ $route.query.title }}
		</h1>
		<div
			class="flex flex-col md:flex-row space-y-2 md:space-y-0 my-1 md:items-center space-x-2 overflow-x-auto">
			<!-- start of discussion action button -->
			<div
				class="hs-dropdown relative inline-flex items-center space-x-2">
				<button
					id="hs-dropdown-with-icons"
					type="button"
					class="hs-dropdown-toggle py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-full bg-green-600 text-white">
					<Icon
						name="fad:open"
						color="currentColor"
						size="22" />
					{{
						$route.query.issueOpened === 'false' ? 'Closed' : 'Open'
					}}
					<svg
						class="hs-dropdown-open:rotate-180 w-4 h-4"
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
					class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-[15rem] bg-white shadow-md rounded-lg p-2 mt-2 divide-y divide-gray-200 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700 absolute z-20"
					aria-labelledby="hs-dropdown-with-icons">
					<div class="py-2 first:pt-0 last:pb-0">
						<button
							v-if="$route.query.issueOpened === 'true'"
							class="flex items-center gap-x-3.5 w-full py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700">
							Close Issue
						</button>
						<button
							v-else
							class="flex items-center gap-x-3.5 w-full py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700">
							Re-Open Issue
						</button>
						<button
							class="flex items-center gap-x-3.5 w-full py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700">
							Mark as Innactive
						</button>
						<button
							class="flex items-center gap-x-3.5 w-full py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700">
							Tag Someone
						</button>
					</div>
				</div>
			</div>
			<!-- end of discussion action button -->
			<div>
				<span class="issue-metadata">{{ $route.query.openedBy }}</span>
				<span class="issue-metadata"> &middot; </span>
				<span class="issue-metadata">
					opened {{ $route.query.openedDate }}
				</span>
				<span class="issue-metadata"> &middot; </span>
				<span class="issue-metadata">
					{{ totalComments }}
					<Icon
						name="mingcute:comment-fill"
						color="currentColor"
						size="20" />
				</span>
			</div>
		</div>
		<!-- Timeline -->
		<div class="mt-2">
			<HeadedComment
				date="1 Aug, 2023"
				heading="Has anyone had a client complain about this issue?"
				content=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non voluptas, deleniti neque delectus autem, reiciendis quae quisquam debitis vitae, magnam illo esse nostrum odit itaque blanditiis assumenda rerum harum nihil! Blanditiis consequuntur architecto enim eveniet quam. Officia nesciunt quasi iste? Dicta, eius qui suscipit minus repellat aspernatur alias repellendus maiores laborum accusantium eligendi totam id soluta voluptate quod reiciendis amet."
				actor="Bikathi Martin" />
			<HeadlessComment
				content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non voluptas, deleniti neque delectus autem, reiciendis quae quisquam debitis vitae, magnam illo esse nostrum odit itaque blanditiis assumenda rerum harum nihil!"
				actor="John Doe" />
			<ActionComment
				date="1 Aug, 2023"
				title="Sample Action Comment"
				actor="Poa Internet Bot" />
			<HeadedComment
				heading="Here's my two cents on that issue"
				content=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non voluptas, deleniti neque delectus autem, reiciendis quae quisquam debitis vitae, magnam illo esse nostrum odit itaque blanditiis assumenda."
				actor="Bikathi Martin" />
			<HeadedComment
				heading="Is it supposed to work like that"
				content=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non voluptas, deleniti neque delectus autem, reiciendis quae quisquam debitis vitae, magnam illo esse nostrum odit itaque blanditiis assumenda."
				actor="Bikathi Martin" />
		</div>
		<!-- End Timeline -->

		<!-- optional button to load more comments -->
		<div class="py-2 flex justify-center">
			<button
				@click="loadMoreComments"
				type="button"
				class="py-2 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
				<span
					v-if="loadingMoreComments"
					class="animate-spin inline-block w-4 h-4 border-[3px] border-current border-t-transparent text-white rounded-full"
					role="status"
					aria-label="loading"></span>
				<span v-if="loadingMoreComments">Loading</span>
				<span v-else>Load More</span>
			</button>
		</div>

		<CommentForm />
	</main>
</template>

<script setup lang="ts">
	import { usePrincipal } from '~/stores/usePrincipal';

	definePageMeta({
		layout: 'dashboard-layout',
		name: 'issue-viewer',
	});

	const loadingMoreComments: Ref<boolean> = ref(false);
	const totalComments: Ref<number> = ref(0);
	const { openToast } = useToast();
	const route = useRoute();
	const { getDetails } = usePrincipal();

	const loadMoreComments = async (): Promise<void> => {
		loadingMoreComments.value = true;

		setTimeout(() => {
			// load more comments from the server
			loadingMoreComments.value = false;
		}, 3000);
	};

	const reOpenIssue = async (): Promise<void> => {
		try {
			await useFetch(`/api/v1/issues/re-open`, {
				method: 'PATCH',
				server: false,
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
				body: {
					issueId: route.query.id,
					openedByUserId: getDetails.userId,
				},
				async onResponse({ response }) {
					if (response.status === 200) {
						openToast('Issue re-opened successfully!', 'success');
					} else throw new Error('Issue my not have been re-opened.');
				},
			});
		} catch (error) {
			console.log('Error occured when trying to re-open issue: ', error);
			openToast('Issue re-opened successfully!', 'success');
		}
	};

	const closeIssue = async (): Promise<void> => {};
</script>
