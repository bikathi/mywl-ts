<template>
	<tbody class="divide-y divide-gray-200 dark:divide-gray-700">
		<tr class="group">
			<td
				class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200 inline-flex items-center space-x-2">
				<span
					v-html="svg"
					class="w-8 h-8 rounded-full"></span>
				<span class="inline-flex flex-col">
					<NuxtLink
						class="hover:underline underline-offset-2 group-hover:underline"
						:to="{
							name: 'issue-viewer',
							params: {
								id: id,
							},
						}"
						>{{ title }}</NuxtLink
					>
					<span class="text-xs font-bold text-gray-500 uppercase"
						>by {{ clientName }}</span
					>
				</span>
			</td>
			<td
				class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
				{{ technicianA }}, {{ technicianB }}
			</td>
			<td
				class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200 inline-flex items-center space-x-2">
				<span
					class="w-3 h-3 block rounded-full bg-orange-400"
					v-if="issueStatus === 'Inactive'"></span>
				<span
					class="w-3 h-3 block rounded-full bg-green-400"
					v-else-if="issueStatus === 'Active'"></span>
				<span
					class="w-3 h-3 block rounded-full bg-purple-400"
					v-else></span>
				<span>{{ issueStatus }}</span>
			</td>
			<td
				class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
				<span class="inline-flex flex-col">
					<span>{{ openedBy }}</span>
					<span class="text-xs font-medium lowercase text-gray-500"
						>on {{ date }}</span
					>
				</span>
			</td>
		</tr>
	</tbody>
</template>

<script setup lang="ts">
	import { createAvatar, type Result } from '@dicebear/core';
	import { thumbs } from '@dicebear/collection';
	export interface Props {
		title: string;
		clientName: string;
		technicianA: string;
		technicianB: string;
		status: string; // active, inactive, closed
		id: string;
		date: string;
		openedBy: string;
	}

	// Avatar seed Strings
	const seeds: readonly string[] = [
		'Johnston',
		'Anderson',
		'Cleopatra',
		'Georgina',
		'Getrude',
	];

	const avatar: Result = createAvatar(thumbs, {
		seed: selectRandomString(),
		radius: 80,
	});
	const svg: string = avatar.toString();
	const props = defineProps<Props>();
	const issueStatus: string = await assignStatus();

	async function assignStatus(): Promise<string> {
		if (props.status === 'active') {
			return 'Active';
		} else if (props.status === 'inactive') {
			return 'Inactive';
		} else {
			return 'Closed';
		}
	}

	function selectRandomString(): string {
		return seeds[Math.floor(Math.random() * seeds.length)];
	}
</script>
