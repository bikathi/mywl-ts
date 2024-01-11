<template>
	<tr>
		<td
			class="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
			<span class="inline-flex flex-col">
				<span>{{ `${props.firstName} ${props.otherName}` }}</span>
				<span
					class="text-xs bg-gray-200 dark:bg-slate-800 dark:text-gray-400 text-opacity-80 p-1 rounded-md"
					>{{ props.email }}</span
				>
			</span>
		</td>
		<td
			class="px-6 py-2 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
			<UserAvatar :link="props.profileImage" />
		</td>
		<td
			class="px-6 py-2 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
			{{ props.department }}
		</td>
		<td
			class="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
			<span class="inline-flex flex-col">
				<span
					class="text-xs bg-gray-200 dark:bg-slate-800 dark:text-gray-400 text-opacity-80 p-1 rounded-md w-fit"
					>{{ props.username }}</span
				>
				<span>{{ props.userId }}</span>
			</span>
		</td>
		<td
			class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200 inline-flex items-center space-x-2">
			<span
				class="w-3 h-3 block rounded-full bg-red-400"
				v-if="props.status === false"></span>
			<span
				class="w-3 h-3 block rounded-full bg-green-400"
				v-else-if="props.status === true"></span>
			<span>{{ props.status === true ? 'Enabled' : 'Disabled' }}</span>
		</td>
		<td class="px-6 py-2 whitespace-nowrap text-end text-sm font-medium">
			<button
				type="button"
				class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
				Modify
			</button>
		</td>
	</tr>
</template>

<script setup lang="ts">
	export interface Props {
		firstName: string;
		otherName: string;
		email: string;
		profileImage?: string;
		department: string;
		username: string;
		userId: string;
		status: boolean;
	}
	const props = withDefaults(defineProps<Props>(), {
		firstName: 'John',
		otherName: 'Doe',
		email: 'johndoe@gmail.com',
		profileImage:
			'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80',
		department: 'Placeholder',
		username: '@johndoe',
		userId: '12345abc',
		status: false,
	});
</script>
