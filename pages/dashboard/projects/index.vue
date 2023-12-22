<template>
	<div class="h-full w-full bg-green-700 min-h-full py-2 overflow-x-auto">
		<h1 class="text-xl md:text-3xl">Organization Projects</h1>
		<ProjectListItem
			v-for="(item, index) in 4"
			status="Active" />
	</div>
</template>

<script setup lang="ts">
	definePageMeta({
		name: 'projects-home',
		layout: 'dashboard-layout',
	});
</script>
