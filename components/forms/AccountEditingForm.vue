<template>
	<form
		@submit.prevent=""
		method="post">
		<div class="flex flex-col lg:flex-row">
			<div
				class="w-full lg:w-1/3 flex-grow flex flex-col items-center p-2">
				<ProfilePictureManager :show-status="true" />
				<label
					for="profile-picture"
					class="cursor-pointer text-blue-500 hover:underline text-sm mt-2 font-medium">
					Change Profile Picture
				</label>
				<input
					id="profile-picture"
					type="file"
					class="hidden" />

				<AccountStatusManager :account-enabled="props.accountEnabled" />
			</div>
			<div class="w-full lg:w-2/3 flex-grow">
				<h3
					class="my-2 text-2xl font-bold text-gray-800 dark:text-white">
					Basic Information
				</h3>
				<div class="flex flex-col lg:flex-row space-x-0 lg:space-x-4">
					<div class="w-full lg:w-1/2">
						<label
							for="first-name"
							class="block text-sm font-medium mb-1 dark:text-white"
							>First Name</label
						>
						<input
							type="text"
							id="first-name"
							class="py-3 px-4 block w-full border rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
							placeholder="e.g. John"
							v-model="firstName"
							required />
					</div>
					<div class="w-full lg:w-1/2">
						<label
							for="other-name"
							class="block text-sm font-medium mb-1 dark:text-white"
							>Other Name</label
						>
						<input
							type="text"
							maxlength="50"
							id="other-name"
							class="py-3 px-4 block w-full border rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
							placeholder="e.g Doe"
							v-model="otherName"
							required />
					</div>
				</div>
				<div
					class="flex flex-col lg:flex-row space-x-0 lg:space-x-4 mt-4">
					<div class="w-full">
						<label
							for="username"
							class="block text-sm font-medium mb-1 dark:text-white"
							>@Username</label
						>
						<input
							type="text"
							id="username"
							class="py-3 px-4 block w-full border rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 disabled:bg-gray-100 pointer-events-none placeholder:uppercase placeholder:text-xs placeholder:font-medium"
							placeholder="will be auto-generated"
							disabled
							v-model="username"
							required />
					</div>
				</div>
				<div
					class="flex flex-col lg:flex-row space-x-0 lg:space-x-4 mt-4">
					<div class="w-full lg:w-1/2">
						<label
							for="user-id"
							class="block text-sm font-medium mb-1 dark:text-white"
							>User ID</label
						>
						<input
							type="text"
							id="user-id"
							class="py-3 px-4 block w-full border rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-30 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 disabled:bg-gray-100 pointer-events-none placeholder:uppercase placeholder:text-xs placeholder:font-medium"
							disabled
							placeholder="will be auto-managed"
							v-model="userId" />
					</div>
					<div class="w-full lg:w-1/2">
						<label
							for="email-address"
							class="block text-sm font-medium mb-1 dark:text-white"
							>Email Address</label
						>
						<input
							type="email"
							maxlength="50"
							id="email-address"
							class="py-3 px-4 block w-full border rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
							placeholder="johndoe@mymail.com"
							v-model="email"
							required />
					</div>
				</div>
				<div class="w-full mt-4">
					<label
						for="client-name"
						class="block text-sm font-medium mb-1 dark:text-white"
						>Date of Birth(dd/MM/yyyy)</label
					>
					<div class="w-full flex space-x-2">
						<input
							type="text"
							maxlength="2"
							id="client-name"
							class="py-3 px-4 block w-1/3 border rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
							placeholder="day e.g. 29"
							pattern="\d*"
							v-model="birthInfo.day"
							required />
						<input
							type="text"
							maxlength="2"
							id="client-name"
							class="py-3 px-4 block w-1/3 border rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
							placeholder="month e.g. 11"
							pattern="\d*"
							v-model="birthInfo.date"
							required />
						<input
							type="text"
							maxlength="4"
							id="client-name"
							class="py-3 px-4 block w-1/3 border rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
							placeholder="year e.g. 2023"
							pattern="\d*"
							v-model="birthInfo.year"
							required />
					</div>
				</div>
				<h3
					class="my-2 text-2xl font-bold text-gray-800 dark:text-white">
					System Information
				</h3>
				<div class="w-full mt-4">
					<label
						for="user-roles"
						class="block text-sm font-medium dark:text-white"
						>User Roles</label
					>
					<div class="py-1 flex flex-wrap">
						<GenericBadge
							v-for="(role, index) in roles"
							:key="index"
							:text="role"
							:show-close-icon="false" />
					</div>
					<div class="grid sm:grid-cols-2 gap-2">
						<label
							class="flex p-3 w-full bg-white border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
							v-for="(item, index) in availableRoles"
							:key="index"
							:for="item.id">
							<span
								class="text-sm text-gray-500 dark:text-gray-400"
								>{{ item.text }}</span
							>
							<input
								type="checkbox"
								:value="item.role"
								v-model="roles"
								class="shrink-0 ms-auto mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
								:id="item.id" />
						</label>
					</div>
				</div>
				<div class="w-full mt-4">
					<label
						for="user-department"
						class="block text-sm font-medium dark:text-white"
						>Department</label
					>
					<select
						id="user-department"
						class="mt-2 px-4 py-3 block w-full bg-gray-100 border-transparent rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-700 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600"
						v-model="department"
						required>
						<option selected>Select User's Department</option>
						<option
							v-for="(item, index) in availableDepartments"
							:key="index">
							{{ item }}
						</option>
					</select>
				</div>
			</div>
		</div>
		<div class="py-4 mt-2 flex justify-end">
			<button
				type="submit"
				class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700">
				<span
					v-if="fetchRequestLoading"
					class="animate-spin inline-block w-4 h-4 border-[3px] border-current border-t-transparent text-white rounded-full"
					role="status"
					aria-label="loading"></span>
				<span v-if="fetchRequestLoading">Loading</span>
				<span v-else>Update Details</span>
			</button>
		</div>
	</form>
</template>

<script setup lang="ts">
	export interface Props {
		firstName: string;
		otherName: string;
		username: string;
		email: string;
		userId: string;
		profileImageUrl?: string;
		birthdate: string;
		roles: string[];
		department: string;
		accountEnabled: boolean;
	}

	const props = defineProps<Props>();
	const fetchRequestLoading: Ref<boolean> = ref(false);

	const firstName: Ref<string> = ref(props.firstName);
	const otherName: Ref<string> = ref(props.otherName);
	const username: Ref<string> = ref(props.username);
	const email: Ref<string> = ref(props.email);
	const userId: Ref<string> = ref(props.userId);
	const profileImageUrl: Ref<string | undefined> = ref(props.profileImageUrl);
	const birthInfo = reactive({
		day: props.birthdate.split('-')[0],
		date: props.birthdate.split('-')[1],
		year: props.birthdate.split('-')[2],
	});
	const roles: Ref<string[]> = ref(props.roles);
	const department: Ref<string> = ref(props.department);
	const availableDepartments: readonly string[] = [
		'IT Department',
		'Customer Care Department',
		'Field Technician',
	];
	const availableRoles: readonly Object[] = [
		{
			text: 'Is A Moderator',
			role: 'role_moderator',
			id: 'mod_role',
		},
		{
			text: 'Is An Admin',
			role: 'role_admin',
			id: 'admin_role',
		},
	];
</script>
