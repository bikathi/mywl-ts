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
					class="hs-dropdown-toggle py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-full text-white"
					:class="
						$route.query.issueOpened === 'true'
							? 'bg-green-600'
							: 'bg-red-600'
					">
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
							@click="closeIssue"
							class="flex items-center justify-between gap-x-3.5 w-full py-2 px-3 rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700">
							Close Issue
							<div
								v-if="closeIssueLoading"
								class="animate-spin inline-block size-6 border-[2px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500"
								role="status"
								aria-label="loading"></div>
						</button>
						<button
							v-else
							@click="reOpenIssue"
							class="flex items-center gap-x-3.5 w-full py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700">
							Re-Open Issue
							<div
								v-if="reOpenIssueLoading"
								class="animate-spin inline-block size-6 border-[2px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500"
								role="status"
								aria-label="loading"></div>
						</button>
						<!-- <button
							class="flex items-center gap-x-3.5 w-full py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700">
							Mark as Innactive
						</button> -->
						<!-- <button
							class="flex items-center gap-x-3.5 w-full py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700">
							Tag Someone
						</button> -->
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
					{{ existingComments.length }}
					<Icon
						name="mingcute:comment-fill"
						color="currentColor"
						size="20" />
				</span>
			</div>
		</div>
		<!-- Timeline -->
		<div class="mt-2">
			<div
				class="h-fit w-full"
				v-for="(comment, i) in existingComments"
				:key="i">
				<HeadedComment
					v-if="comment.commentType === 'headed'"
					:date="formatDateHumanReadable(comment.commentTime)"
					:heading="comment.commentTitle"
					:content="comment.commentString"
					:actor="`${comment.commenter.firstName} ${comment.commenter.otherName}`" />
				<HeadlessComment
					v-else-if="comment.commentType === 'headless'"
					:content="comment.commentString"
					:actor="`${comment.commenter.firstName} ${comment.commenter.otherName}`" />
				<ActionComment
					v-else-if="comment.commentType === 'action'"
					:date="formatDateHumanReadable(comment.commentTime)"
					:title="comment.commentTitle"
					:actor="`${comment.commenter.firstName} ${comment.commenter.otherName}`" />
			</div>
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

		<CommentForm
			@post-comment="
				async (optionalTitle: string | null, comment: string) => {
					if (optionalTitle !== null) {
						optionalCommentTitle = optionalTitle;
					} else {
						optionalCommentTitle = null;
					}

					commentString = comment;
					await saveNewComment();
				}
			" />
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
	const router = useRouter();
	const { getDetails } = usePrincipal();
	const closeIssueLoading: Ref<boolean> = ref(false);
	const reOpenIssueLoading: Ref<boolean> = ref(false);
	const optionalCommentTitle: Ref<string | null> = ref(null);
	const commentString: Ref<string | null> = ref(null);
	const existingComments: Ref<object[]> = ref([]);
	const page: Ref<number> = ref(0);

	const loadMoreComments = async (): Promise<void> => {
		loadingMoreComments.value = true;

		setTimeout(() => {
			// load more comments from the server
			loadingMoreComments.value = false;
		}, 3000);
	};

	try {
		loadingMoreComments.value = true;
		await useFetch(`/api/v1/comments/get-list`, {
			method: 'GET',
			query: {
				issueId: route.query.id,
				page: page.value,
			},
			server: false,
			headers: {
				Accept: 'application/json',
			},
			async onResponse({ response }) {
				console.log('onMounted response status: ', response.status);
				console.log('onMounted response body: ', response._data.data);
				if (response.status === 200 && response._data.data.length > 0) {
					if (response._data.data.length >= 1) {
						existingComments.value = response._data.data;
						openToast(
							'Loaded existing comments successfully!',
							'info',
						);
					} else {
						openToast('Currently no comments to show!', 'info');
					}
				} else throw new Error('Issue my not have been re-opened.');
			},
		});
	} catch (error) {
		console.log('Error occured when trying to re-open issue: ', error);
		openToast('Issue re-opened successfully!', 'success');
	} finally {
		loadingMoreComments.value = false;
	}

	const reOpenIssue = async (): Promise<void> => {
		reOpenIssueLoading.value = true;
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
						router.back();
						openToast('Issue re-opened successfully!', 'success');
					} else throw new Error('Issue my not have been re-opened.');
				},
			});
		} catch (error) {
			console.log('Error occured when trying to re-open issue: ', error);
			openToast('Issue re-opened successfully!', 'success');
		} finally {
			reOpenIssueLoading.value = false;
		}
	};

	const closeIssue = async (): Promise<void> => {
		closeIssueLoading.value = true;
		try {
			await useFetch(`/api/v1/issues/close`, {
				method: 'PATCH',
				server: false,
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					issueId: route.query.id,
					closedByUserId: getDetails.userId,
				}),
				async onResponse({ response }) {
					if (response.status === 200) {
						openToast('Issue closed successfully!', 'success');
						router.back();
					} else
						throw new Error('Issue my not have properly closed.');
				},
			});
		} catch (error) {
			console.log('Error occured when trying to re-open issue: ', error);
			openToast('Failed to close issue. Try again!', 'error');
		} finally {
			closeIssueLoading.value = false;
		}
	};

	const saveNewComment = async (): Promise<void> => {
		openToast('Adding your comment. Please wait!', 'info');
		try {
			await useFetch(`/api/v1/comments/new-comment`, {
				method: 'POST',
				server: false,
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					issueId: route.query.id,
					commentType: !optionalCommentTitle.value
						? 'headless'
						: 'headed',
					commenterId: getDetails.userId,
					commentTime: getCurrentDateTime(),
					commentTitle:
						optionalCommentTitle.value !== null
							? optionalCommentTitle.value
							: null,
					comment: commentString.value,
				}),
				async onResponse({ response }) {
					if (response.status === 200) {
						openToast('Comment added successfully', 'success');
						location.reload();
					} else
						throw new Error('Issue my not have properly closed.');
				},
			});
		} catch (error) {
			console.log('Error occured when trying to re-open issue: ', error);
			openToast('Failed to add comment. Try again!', 'error');
		} finally {
			closeIssueLoading.value = false;
		}
	};

	function getCurrentDateTime() {
		// Create a new Date object for the current date and time
		const now = new Date();

		// Extract the day, month, year, hours, and minutes
		const day = String(now.getDate()).padStart(2, '0');
		const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are 0-based in JavaScript
		const year = now.getFullYear();
		const hours = String(now.getHours()).padStart(2, '0');
		const minutes = String(now.getMinutes()).padStart(2, '0');

		// Combine the parts into the desired format
		const formattedDateTime = `${day}-${month}-${year}T${hours}:${minutes}`;

		return formattedDateTime;
	}

	function formatDateHumanReadable(dateTimeString: string) {
		// Extract the date part from the input string
		const datePart = dateTimeString.split('T')[0];

		// Split the date part into day, month, and year
		const [day, month, year] = datePart.split('-');

		// Define an array of month abbreviations
		const monthAbbreviations = [
			'JAN',
			'FEB',
			'MAR',
			'APR',
			'MAY',
			'JUN',
			'JUL',
			'AUG',
			'SEP',
			'OCT',
			'NOV',
			'DEC',
		];

		// Convert the numeric month to its abbreviation
		const monthAbbreviation = monthAbbreviations[parseInt(month, 10) - 1];

		// Combine the parts into the desired human-readable format
		const formattedDate = `${day} ${monthAbbreviation} ${year}`;

		return formattedDate;
	}
</script>
