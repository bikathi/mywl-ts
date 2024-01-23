<template>
	<div
		class="flex items-center px-4 py-2 justify-between ring-1 rounded-md transition-transform hover:-translate-y-1 hover:scale-x-[1.02]">
		<div class="flex items-center">
			<img
				src="/images/random-person-image.webp"
				alt="missing-picture-placeholder"
				class="w-11 h-11 border rounded-full outline-none ring" />
			<div class="mx-4">
				<h1 class="font-semibold text-base">John Doe</h1>
				<h2
					class="text-xs tracking-wide bg-gray-200 dark:bg-slate-800 dark:text-gray-400 text-opacity-80 p-1 rounded-md w-fit">
					@johndoe
				</h2>
			</div>
		</div>
		<div>
			<h1 class="font-medium">johndoe@gmail.com</h1>
			<h2 class="text-sm font-sm">Field Support Technician</h2>
		</div>
		<NuxtLink
			class="py-2 rounded-full px-3 inline-flex items-center text-sm font-semibold border border-transparent bg-blue-600 text-white hover:bg-blue-700"
			>See More</NuxtLink
		>
	</div>
</template>

<script setup lang="ts"></script>
