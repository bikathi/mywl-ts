<script setup>
	const componentProps = defineProps({
		date: {
			required: false,
		},
		heading: {
			required: true,
			type: String,
		},
		content: {
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

		<!-- item -->
		<div class="flex gap-x-3">
			<!-- Icon -->
			<div
				class="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700">
				<div
					class="relative z-10 w-7 h-7 flex justify-center items-center">
					<img
						class="flex-shrink-0 w-7 h-7 rounded-full"
						src="https://images.unsplash.com/photo-1659482633369-9fe69af50bfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80"
						alt="Image Description" />
				</div>
			</div>
			<!-- End Icon -->

			<!-- Right Content -->
			<div class="grow pt-0.5 pb-8">
				<h3
					class="flex gap-x-1.5 font-semibold text-lg text-gray-800 dark:text-white">
					{{ heading }}
				</h3>
				<p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
					{{ content }}
				</p>
				<button
					type="button"
					class="mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
					<img
						class="flex-shrink-0 w-4 h-4 rounded-full"
						src="https://images.unsplash.com/photo-1659482633369-9fe69af50bfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8auto=format&fit=facearea&facepad=3&w=320&h=320&q=80"
						alt="Image Description" />
					{{ actor }}
				</button>
			</div>
			<!-- End Right Content -->
		</div>
		<!-- End Item -->
</template>
