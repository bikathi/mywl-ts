<template>
	<span
		class="inline-flex items-center gap-x-1.5 py-1.5 ps-3 pe-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500">
		{{ props.text }}
		<button
			v-if="props.showCloseIcon"
			type="button"
			class="flex-shrink-0 h-4 w-4 inline-flex items-center justify-center rounded-full hover:bg-blue-200 focus:outline-none focus:bg-blue-200 focus:text-blue-500 dark:hover:bg-blue-900">
			<span class="sr-only">Remove badge</span>
			<Icon
				name="mdi:close"
				color="currentColor"
				size="14" />
		</button>
	</span>
</template>

<script setup lang="ts">
	export interface Props {
		text: string;
		showCloseIcon: boolean;
	}

	const props = defineProps<Props>();
</script>
