<template>
	<div
		class="flex items-center px-4 py-2 justify-between ring-1 rounded-md transition-transform hover:-translate-y-1 hover:scale-x-[1.02]">
		<div class="flex items-center">
			<img
				:src="props.profileImage"
				alt="missing-picture-placeholder"
				class="w-11 h-11 border rounded-full outline-none ring" />
			<div class="ml-4">
				<h1 class="font-semibold text-base">
					{{ props.firstName }} {{ props.otherName }}
				</h1>
				<h2
					class="text-xs tracking-wide bg-gray-200 dark:bg-slate-800 p-1 dark:text-gray-400 text-opacity-80 rounded-md w-fit">
					{{ props.username }}
				</h2>
			</div>
		</div>
		<div>
			<h1 class="font-medium text-sm">{{ props.email }}</h1>
			<h2 class="text-sm">{{ props.department }}</h2>
		</div>
		<span
			class="text-sm tracking-wide bg-gray-200 dark:bg-slate-800 p-1 dark:text-gray-400 text-opacity-80 rounded-md w-fit"
			>{{ props.userId }}</span
		>
		<NuxtLink
			:to="{ name: 'user-editor', query: { userId: props.userId } }"
			class="py-2 rounded-full px-3 inline-flex items-center text-sm font-semibold border border-transparent bg-blue-600 text-white hover:bg-blue-700"
			>See More</NuxtLink
		>
	</div>
</template>

<script setup lang="ts">
	export interface Props {
		firstName: string;
		otherName: string;
		username: string;
		email: string;
		department: string;
		userId: string;
		profileImage?: string;
	}
	const props = withDefaults(defineProps<Props>(), {
		firstName: 'John',
		otherName: 'Doe',
		username: '@johndoe',
		email: 'johndoe@gmail.com',
		profileImage: '/images/random-person-image.webp',
		userId: 'usr1234abc',
		department: 'IT Department',
	});
</script>
