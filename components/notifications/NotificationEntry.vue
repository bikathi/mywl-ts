import type { ServerPlaceholder } from '#build/components';
<template>
	<div
		class="dark:text-white p-2 border-l-4 dark:bg-gray-800 dark:border-gray-700 transition-transform duration-200 hover:scale-105">
		<div class="flex text-xs font-semibold space-x-1 text-gray-500">
			<span>04-12-2023</span>
			<span>&middot;</span>
			<span>06:20PM</span>
			<span>&middot;</span>
			<span>John Doe</span>
		</div>
		<span class="text-sm line-clamp-3">
			this is a sample notification message that has been put here as a
			placeholder. Notification messages will not be too long. If it
			is, it will be ellipsed
		</span>
	</div>
</template>

<script setup lang="ts"></script>
