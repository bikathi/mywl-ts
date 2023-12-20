<template>
	<div
		class="w-64 flex-shrink-0 min-w-64 rounded-md p-2 bg-gray-100 dark:bg-slate-800 min-h-24 h-fit">
		<div class="flex justify-between">
			<h1 class="inline-flex items-center space-x-1">
				<span class="font-semibold">{{ props.title }}</span
				><span class="opacity-80">({{ numberOfTasks }})</span>
			</h1>
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
