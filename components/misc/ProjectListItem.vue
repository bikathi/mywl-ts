<template>
	<tr>
		<!-- TODO: Fix issue with dicebear nor rendering on small screens -->
		<td class="px-6 py-4">
			<span
				v-html="svg"
				class="w-10 h-10 rounded-md" />
		</td>

		<!-- Details about the project including name, category and sub-category -->
		<td
			class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200 text-center">
			<span class="inline-flex flex-col text-start">
				<span class="dark:text-gray-400 text-opacity-80 antialiased font-medium">Example Project Title</span>
				<span class="text-sm">Project Category &middot; Project Sub-Category</span>
			</span>
		</td>

		<!-- Duration of project including date opened -->
		<td
			class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
			<span class="inline-flex flex-col">
				<span>25th December 2023</span>
				<span
					class="w-fit text-xs bg-gray-200 dark:bg-slate-800 dark:text-gray-400 text-opacity-80 p-1 rounded-md"
					>10 Contributors</span
				>
			</span>
		</td>
		<td
			class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
			<span class="inline-flex items-center space-x-2">
				<span
					class="w-3 h-3 block rounded-full bg-orange-400"
					v-if="props.status === 'Inactive'"></span>
				<span
					class="w-3 h-3 block rounded-full bg-green-400"
					v-else-if="props.status === 'Active'"></span>
				<span
					class="w-3 h-3 block rounded-full bg-purple-400"
					v-else></span>
				<span>{{ props.status }}</span>
			</span>
		</td>
		<td
			class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200 text-center">
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
		</td>
		<td
			class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200 text-end">
			<NuxtLink
				:to="{ name: 'project-playground', params: { id: 1 } }"
				type="button"
				class="py-2 rounded-full px-4 inline-flex items-center gap-x-2 text-sm font-semibold border border-transparent bg-blue-600 text-white hover:bg-blue-700"
				data-hs-overlay="#hs-basic-modal">
				<Icon
					name="bi:folder"
					color="currentColor"
					size="19" />
				Open
			</NuxtLink>
		</td>
	</tr>
</template>

<script setup lang="ts">
	import { createAvatar, type Result } from '@dicebear/core';
	import { identicon } from '@dicebear/collection';
	export interface Props {
		status: string;
	}

	// Avatar seed Strings
	const seeds: readonly string[] = [
		'Johnston',
		'Anderson',
		'Cleopatra',
		'Georgina',
		'Getrude',
	];
	const avatar: Result = createAvatar(identicon, {
		seed: selectRandomString(),
		radius: 20,
		scale: 100,
	});
	const svg: string = avatar.toString();
	const props = defineProps<Props>();
	function selectRandomString(): string {
		return seeds[Math.floor(Math.random() * seeds.length)];
	}
</script>
