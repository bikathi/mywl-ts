<template>
	<div class="p-2 my-2 cursor-move rounded-md bg-yellow-500 h-16">
		<h1>{{ props.title }}</h1>
	</div>
</template>

<script setup lang="ts">
	export interface Props {
		title: string;
	}

	const props = defineProps<Props>();
</script>
