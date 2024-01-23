<template>
	<GenericModal>
		<div
			class="flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7] max-h-[75%]">
			<div
				class="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700">
				<div class="relative w-full">
					<input
						type="text"
						class="peer ps-8 block w-full bg-transparent border-t-transparent border-x-transparent text-sm focus:border-t-transparent focus:border-x-transparent focus:ring-0 dark:text-gray-400 border-none"
						placeholder="Enter Search Term" />
					<div
						class="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-2">
						<Icon
							name="cil:search"
							color="rgb(107 114 128 / 0.8)"
							size="17"
							class="flex-shrink" />
					</div>
				</div>
				<span
					v-if="searchUsersLoading"
					class="animate-spin inline-block w-4 h-4 border-[1px] border-current border-t-transparent text-white rounded-full"
					role="status"
					aria-label="loading" />
			</div>
			<div class="p-4 overflow-y-auto space-y-3">
				<!-- <p
					class="mt-1 text-gray-800 dark:text-gray-400"
					v-if="searchResults.length === 0">
					Your Results will show here once there is something to show.
				</p> -->
				<SearchUserResultStrip v-for="a in 3" />
			</div>
			<div
				class="bg-gray-100 border-t rounded-b-xl py-4 px-3 dark:bg-slate-800 dark:border-gray-700">
				<p
					class="mt-1 inline-flex text-sm text-gray-500 dark:text-gray-500">
					Press
					<kbd
						class="py-0.5 mx-1 px-1.5 bg-white border border-gray-200 font-mono text-sm text-gray-800 rounded-md dark:bg-slate-900 dark:border-gray-700 dark:text-gray-200">
						esc
					</kbd>
					to close
				</p>
			</div>
		</div>
	</GenericModal>
</template>

<script setup lang="ts">
	const searchUsersLoading = ref(false);
	const searchResults: Ref<object[]> = ref([]);
</script>
