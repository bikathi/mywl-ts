<script setup lang="ts">
	const componentProps = defineProps({
		date: {
			required: false,
		},
		title: {
			required: true,
			type: String,
		},
		actor: {
			required: true,
			type: String,
		},
	});
</script>

<template>
	<!-- Heading -->
	<div
		class="ps-2 my-2 first:mt-0"
		v-if="date">
		<h3
			class="text-xs font-medium uppercase text-gray-500 dark:text-gray-400">
			{{ date }}
		</h3>
	</div>
	<!-- End Heading -->

	<div class="flex gap-x-3">
		<!-- Icon -->
		<div
			class="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700">
			<div class="relative z-10 w-7 h-7 flex justify-center items-center">
				<span
					class="flex flex-shrink-0 justify-center items-center w-7 h-7 border border-gray-200 text-sm font-semibold uppercase text-gray-800 rounded-full dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400">
					A
				</span>
			</div>
		</div>
		<!-- End Icon -->

		<!-- Right Content -->
		<div class="grow pt-0.5 pb-8">
			<h3
				class="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
				{{ title }}
			</h3>
			<button
				type="button"
				class="mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
				<span
					class="flex flex-shrink-0 justify-center items-center w-4 h-4 bg-white border border-gray-200 text-[10px] font-semibold uppercase text-gray-600 rounded-full dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400">
					A
				</span>
				{{ actor }}
			</button>
		</div>
		<!-- End Right Content -->
	</div>
</template>
