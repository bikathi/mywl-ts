<template>
	<div
		class="w-[18rem] flex-shrink-0 max-w-[18rem] rounded-md p-2 bg-gray-100 dark:bg-slate-800 min-h-24 h-fit">
		<div class="flex justify-between">
			<h1 class="inline-flex items-center space-x-1">
				<span class="font-semibold text-lg">{{ props.title }}</span
				><span class="opacity-80">({{ numberOfTasks }})</span>
			</h1>
			<div class="hs-dropdown inline-flex [--placement:left-top]">
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
					class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-[15rem] bg-white shadow-md rounded-lg p-2 mt-2 dark:bg-gray-800 dark:border dark:border-gray-700"
					aria-labelledby="hs-dropdown-custom-icon-trigger">
					<a
						class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
						href="#">
						Newsletter
					</a>
					<a
						class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
						href="#">
						Purchases
					</a>
					<a
						class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
						href="#">
						Downloads
					</a>
					<a
						class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
						href="#">
						Team Account
					</a>
				</div>
			</div>
		</div>
		<draggable
			tag="div"
			v-model="internalTasksHandler"
			group="stage">
			<template #item="{ element: task }">
				<ProjectTask :title="task.title" />
			</template>
		</draggable>
		<div>
			<button
				class="p-1 inline-flex items-center font-medium text-sm py-2 hover:dark:bg-slate-700 hover:bg-gray-200 rounded-md">
				<Icon
					name="material-symbols:add"
					color="currentColor"
					size="20" />
				<span>Add new task</span>
			</button>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { ref } from 'vue';
	import draggable from 'vuedraggable';

	export interface Props {
		title: string;
		tasks?: [];
	}

	const props = defineProps<Props>();
	const internalTasksHandler = ref(props.tasks);

	// watch effect to update the value of internalTasksHandler when props.tasks changes
	watchEffect(() => {
		internalTasksHandler.value = props.tasks;
	});
	// computed value for number of tasks
	const numberOfTasks = computed(() => internalTasksHandler.value?.length);
</script>
