<template>
	<tr class="animate-pulse duration-150">
		<td class="px-6 py-2 text-sm font-medium">
			<span class="inline-flex flex-col space-y-1">
				<span
					class="bg-gray-200 dark:bg-gray-700 rounded-md text-gray-200 dark:text-gray-700"
					>Jane Doe</span
				>
				<span
					class="text-xs p-1 bg-gray-200 dark:bg-gray-700 rounded-md text-gray-200 dark:text-gray-700"
					>johndoe@gmail.com</span
				>
			</span>
		</td>
		<td class="px-6 py-2 text-sm">
			<div
				class="h-[2.375rem] w-[2.375rem] rounded-full bg-gray-200 dark:bg-gray-700 text-gray-200 dark:text-gray-700"></div>
		</td>
		<td class="px-6 py-2 text-sm text-gray-800 dark:text-gray-200">
			<span
				class="bg-gray-200 dark:bg-gray-700 rounded-md text-gray-200 dark:text-gray-700"
				>test department</span
			>
		</td>
		<td class="px-6 py-2 text-sm">
			<span class="inline-flex flex-col space-y-1">
				<span
					class="text-xs p-1 w-fit bg-gray-200 dark:bg-gray-700 rounded-md text-gray-200 dark:text-gray-700"
					>@testusername</span
				>
				<span
					class="bg-gray-200 dark:bg-gray-700 rounded-md text-gray-200 dark:text-gray-700"
					>test-userid</span
				>
			</span>
		</td>
		<td class="px-6 py-4 text-sm inline-flex items-center space-x-2">
			<span
				class="w-3 h-3 block bg-gray-200 dark:bg-gray-700 rounded-md text-gray-200 dark:text-gray-700"></span>
			<span
				class="bg-gray-200 dark:bg-gray-700 rounded-md text-gray-200 dark:text-gray-700"
				>{{ 'placeholder here' }}</span
			>
		</td>
		<td class="px-6 py-2 text-end text-sm font-medium">
			<button
				type="button"
				class="items-center text-sm border border-transparent bg-gray-200 dark:bg-gray-700 rounded-md text-gray-200 dark:text-gray-700">
				Modify
			</button>
		</td>
	</tr>
</template>
