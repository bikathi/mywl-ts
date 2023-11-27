<template>
	<div class="flex flex-col">
		<div class="-m-1.5 overflow-x-auto">
			<div class="p-1.5 min-w-full inline-block align-middle">
				<div
					class="border rounded-lg overflow-hidden dark:border-gray-700">
					<table
						class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
						<thead class="bg-gray-50 dark:bg-gray-700">
							<tr>
								<th
									scope="col"
									class="issue-table-headers">
									Title
								</th>
								<th
									scope="col"
									class="issue-table-headers">
									Assignee
								</th>
								<th
									scope="col"
									class="issue-table-headers">
									Status
								</th>
								<th
									scope="col"
									class="issue-table-headers text-center">
									Action
								</th>
							</tr>
						</thead>
						<tbody
							class="divide-y divide-gray-200 dark:divide-gray-700">
							<tr v-for="a in 5">
								<td
									class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200 inline-flex items-center space-x-2">
									<span
										v-html="svg"
										class="w-10 h-10 rounded-full"></span>
									<span class="inline-flex flex-col">
										<span>Example Title</span>
										<span
											class="text-xs font-bold text-gray-500 uppercase"
											>Solomon Xander</span
										>
									</span>
								</td>
								<td
									class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
									Solomon Xander
								</td>
								<td
									class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200 inline-flex items-center space-x-2">
									<span
										class="w-3 h-3 block rounded-full bg-orange-400"></span>
									<span>Inactive</span>
								</td>
								<td
									class="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
									<NuxtLink
										:to="{
											name: 'issue-viewer',
											params: {
												// TODO: modify this later
												id: 1,
											},
										}"
										type="button"
										class="table-action-buttons">
										View
									</NuxtLink>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { createAvatar, type Result } from '@dicebear/core';
	import { thumbs } from '@dicebear/collection';
	// Avatar seed Strings
	const seeds: Array<string> = [
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
	function selectRandomString(): string {
		return seeds[Math.floor(Math.random() * seeds.length)];
	}
</script>
