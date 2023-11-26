<script setup></script>

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
									Participants
								</th>
								<th
									scope="col"
									class="issue-table-headers">
									Client/ Affected
								</th>
								<th
									scope="col"
									class="issue-table-headers">
									Asignee
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
									class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
									Example Title
								</td>
								<td
									class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
									<div class="flex -space-x-2">
										<img
											class="inline-block h-8 w-8 rounded-full ring-2 ring-white"
											src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
											alt="Image Description" />
										<img
											class="inline-block h-8 w-8 rounded-full ring-2 ring-white"
											src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
											alt="Image Description" />
										<img
											class="inline-block h-8 w-8 rounded-full ring-2 ring-white"
											src="https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80"
											alt="Image Description" />
										<img
											class="inline-block h-8 w-8 rounded-full ring-2 ring-white"
											src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
											alt="Image Description" />
										<div class="relative inline-flex">
											<button
												class="comment-counter-button">
												<span
													class="font-medium leading-none"
													>9+</span
												>
											</button>
										</div>
									</div>
								</td>
								<td
									class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
									Solomon Xander
								</td>
								<td
									class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
									Alex Joe
								</td>
								<td
									class="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
									<button
										type="button"
										class="table-action-buttons">
										Delete
									</button>
									<span
										enter-class="text-gray-800 dark:text-gray-200">
										|
									</span>
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
									<span
										enter-class="text-gray-800 dark:text-gray-200">
										|
									</span>
									<button
										type="button"
										class="table-action-buttons">
										Close
									</button>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
</template>
