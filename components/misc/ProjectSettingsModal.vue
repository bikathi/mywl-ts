<template>
	<GenericModal>
		<div
			class="flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7] h-full max-h-full">
			<div
				class="bg-gray-100 border-b rounded-t-xl p-3 dark:bg-slate-800 dark:border-gray-700 flex items-center justify-between">
				<h1 class="text-2xl opacity-80">Example Project Title</h1>
				<div class="hs-dropdown inline-flex [--placement:bottom-right]">
					<button
						id="hs-dropdown-custom-icon-trigger"
						type="button"
						class="hs-dropdown-toggle flex justify-center items-center w-9 h-9 text-sm font-semibold rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
						<Icon
							name="mdi:dots-horizontal"
							color="currentColor"
							size="20" />
					</button>
					<div
						class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-[15rem] bg-white shadow-lg rounded-lg p-2 mt-2 dark:bg-gray-800 dark:border dark:border-gray-700 space-y-1"
						aria-labelledby="hs-dropdown-custom-icon-trigger">
						<a
							class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
							href="#">
							<Icon
								name="material-symbols:disabled-visible"
								color="currentColor"
								size="20" />
							Disable Project
						</a>
						<a
							class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm focus:outline-none bg-red-600 text-white hover:bg-red-700"
							href="#">
							<Icon
								name="solar:danger-linear"
								color="currentColor"
								size="20" />
							Close Project
						</a>
					</div>
				</div>
			</div>
			<div class="py-2 overflow-y-auto">
				<div
					class="mb-2 bg-gray-200 dark:bg-slate-800 dark:text-gray-400 p-2">
					<h1 class="text-xl font-medium">Project Members</h1>
					<span
						class="text-sm font-extralight tracking-wider inline-flex items-center"
						><Icon
							name="ri:information-line"
							color="currentColor"
							size="16"
							class="mr-1" />Who is Contributing to This
						Project?</span
					>
					<div class="p-1 py-2 flex flex-wrap space-x-2">
						<UserAvatar
							v-for="(a, index) in 3"
							:key="index"
							:dimensions="['w-[3.275rem]', 'h-[3.275rem]']" />
					</div>
					<div class="flex justify-center">
						<button
							type="button"
							class="py-2 rounded-full px-2 inline-flex items-center gap-x-2 text-sm font-semibold border border-transparent bg-blue-600 text-white hover:bg-blue-700">
							Add Members
							<Icon
								name="cil:plus"
								color="currentColor"
								size="20" />
						</button>
					</div>
				</div>
			</div>
			<div class="py-2 overflow-y-auto">
				<div
					class="mb-2 bg-gray-200 dark:bg-slate-800 dark:text-gray-400 p-2">
					<h1 class="text-xl font-medium">Project Description</h1>
					<textarea
						id="hs-textarea-ex-2"
						class="p-2 pb-12 block w-full border bg-gray-100 border-gray-200 rounded-md text-sm focus:border-slate-500 focus:ring-slate-500 dark:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-slate-600"
						placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis eos ducimus similique nisi veniam nulla beatae earum accusamus sequi, facere amet possimus impedit id placeat veritatis quos voluptate nihil nostrum."></textarea>
				</div>
			</div>
			<div class="py-2 overflow-y-auto">
				<div
					class="mb-2 bg-gray-200 dark:bg-slate-800 dark:text-gray-400 p-2">
					<h1 class="text-xl font-medium">Activity</h1>
				</div>
			</div>
		</div>
	</GenericModal>
</template>

<script setup lang="ts"></script>
