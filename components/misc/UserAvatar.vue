<template>
	<img
		class="inline-block h-[2.375rem] w-[2.375rem] rounded-full"
		:src="props.link"
		alt="Image Description" />
</template>

<script setup lang="ts">
	export interface Props {
		link?: string;
	}

	const props = withDefaults(defineProps<Props>(), {
		link: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80',
	});
</script>
