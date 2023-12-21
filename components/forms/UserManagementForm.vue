<template>
	<form
		action=""
		method="post">
		<div class="flex flex-col lg:flex-row">
			<div
				class="w-full lg:w-1/3 flex-grow flex flex-col items-center p-2">
				<ProfilePictureManager />
				<label
					for="profile-picture"
					class="cursor-pointer text-blue-500 hover:underline text-sm mt-2 font-medium">
					Change Profile Picture
				</label>
				<input
					id="profile-picture"
					type="file"
					class="hidden" />
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
							placeholder="e.g. John" />
					</div>
					<div class="w-full lg:w-1/2">
						<label
							for="client-name"
							class="block text-sm font-medium mb-1 dark:text-white"
							>Other Name</label
						>
						<input
							type="text"
							maxlength="50"
							id="client-name"
							class="py-3 px-4 block w-full border rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
							placeholder="e.g Doe" />
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
							placeholder="will be auto-managed" />
					</div>
					<div class="w-full lg:w-1/2">
						<label
							for="user-email"
							class="block text-sm font-medium mb-1 dark:text-white"
							>Email Address</label
						>
						<input
							type="email"
							maxlength="50"
							id="user-email"
							class="py-3 px-4 block w-full border rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
							placeholder="Doe" />
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
							pattern="[0-9]" />
						<input
							type="text"
							maxlength="2"
							id="client-name"
							class="py-3 px-4 block w-1/3 border rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
							placeholder="month e.g. 11"
							pattern="[0-9]" />
						<input
							type="text"
							maxlength="4"
							id="client-name"
							class="py-3 px-4 block w-1/3 border rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
							placeholder="year e.g. 2023"
							pattern="[0-9]" />
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
							v-for="(a, index) in 4"
							:key="index"
							text="sample_role"
							:show-close-icon="true" />
					</div>
					<select
						id="user-roles"
						class="mt-2 px-4 py-3 block w-full bg-gray-100 border-transparent rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-700 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600">
						<option selected>Select from Available Roles</option>
						<option>ROLE_USER</option>
						<option>ROLE_ADMIN</option>
						<option>ROLE_MANAGER</option>
					</select>
				</div>
				<div class="w-full mt-4">
					<label
						for="user-department"
						class="block text-sm font-medium dark:text-white"
						>Department</label
					>
					<select
						id="user-department"
						class="mt-2 px-4 py-3 block w-full bg-gray-100 border-transparent rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-700 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600">
						<option selected>
							Select User's Department
						</option>
						<option>DEPARTMENT_A</option>
						<option>DEPARTMENT_B</option>
						<option>DEPARTMENT_C</option>
					</select>
				</div>
			</div>
		</div>
		<div class="py-4 mt-2 flex justify-end">
			<button
				type="button"
				class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700">
				Submit User Details
			</button>
		</div>
	</form>
</template>
