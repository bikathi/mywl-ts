<template>
	<table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
		<thead class="bg-gray-50 dark:bg-gray-700">
			<tr>
				<th
					scope="col"
					class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-gray-400">
					User
				</th>
				<th
					scope="col"
					class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-gray-400">
					Image
				</th>
				<th
					scope="col"
					class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-gray-400">
					Department
				</th>
				<th
					scope="col"
					class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-gray-400">
					Role
				</th>
				<th
					scope="col"
					class="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-gray-400">
					Action
				</th>
			</tr>
		</thead>
		<tbody class="divide-y divide-gray-200 dark:divide-gray-700">
			<tr
				v-for="(a, index) in 5"
				:key="index">
				<td
					class="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
					<span class="inline-flex flex-col">
						<span>John Doe</span>
						<span
							class="text-xs bg-gray-100 dark:bg-slate-800 dark:text-gray-400 text-opacity-80 p-1 rounded-md"
							>johndoe@gmail.com</span
						>
					</span>
				</td>
				<td
					class="px-6 py-2 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
					<UserAvatar />
				</td>
				<td
					class="px-6 py-2 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
					Field Technician Agent
				</td>
				<td
					class="px-6 py-2 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
					ADMIN
				</td>
				<td
					class="px-6 py-2 whitespace-nowrap text-end text-sm font-medium">
					<button
						type="button"
						class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
						Modify
					</button>
				</td>
			</tr>
		</tbody>
	</table>
</template>
