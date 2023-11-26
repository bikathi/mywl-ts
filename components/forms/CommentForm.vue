<template>
	<!-- Optional comment title -->
	<div class="mb-2">
		<input
			type="text"
			maxlength="40"
			id="input-label"
			class="p-4 block text-sm w-full border rounded-md focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
			placeholder="optional comment title(30 characters)" />
		<span
			class="font-extralight tracking-wider inline-flex items-center text-xs sm:text-sm text-gray-400"
			><Icon
				name="ri:information-line"
				color="currentColor"
				size="14"
				class="mr-1 md:text-sm" />Titles help add context to your
			comment</span
		>
	</div>
	<!-- end of optional comment titlw -->
	<!-- Begin of textarea input -->
	<!-- Textarea -->
	<div class="relative">
		<textarea
			id="hs-textarea-ex-2"
			class="p-4 pb-12 block w-full border bg-gray-100 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
			placeholder="Say something..."></textarea>

		<!-- Toolbar -->
		<div
			class="absolute bottom-px inset-x-px p-2 rounded-b-md bg-gray-100 dark:bg-slate-800">
			<div class="flex justify-between items-center">
				<!-- Button Group -->
				<div class="flex items-center">
					<!-- Attach Button -->
					<button
						type="button"
						class="inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-lg text-gray-500 hover:text-blue-600 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:hover:text-blue-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
						<Icon
							name="fluent:attach-20-regular"
							color="currentColor"
							size="22" />
					</button>
					<!-- End Attach Button -->
				</div>
				<!-- End Button Group -->

				<!-- Button Group -->
				<div class="flex items-center gap-x-1">
					<!-- Send Button -->
					<button
						type="button"
						class="inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
						<Icon
							name="teenyicons:send-solid"
							color="currentColor"
							size="18" />
					</button>
					<!-- End Send Button -->
				</div>
				<!-- End Button Group -->
			</div>
		</div>
		<!-- End Toolbar -->
	</div>
	<!-- End Textarea -->
</template>

<script setup lang="ts"></script>
