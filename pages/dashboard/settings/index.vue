<template>
	<main>
		<div class="mb-2">
			<h1 class="text-2xl font-bold">Account Information</h1>
			<span
				class="mb-4 text-sm font-extralight tracking-wider inline-flex items-center"
				><Icon
					name="ri:information-line"
					color="currentColor"
					size="16"
					class="mr-1" />Information is limited to in-app use
				only</span
			>
		</div>
		<div class="mb-4">
			<label
				for="user-email"
				class="block font-medium mb-2 dark:text-white"
				>Account Email</label
			>
			<input
				type="email"
				id="user-email"
				class="form-inputs"
				placeholder="you@site.com"
				value="martbikathi@gmail.com" />
		</div>
		<div class="my-4">
			<label
				for="user-name"
				class="block font-medium mb-2 dark:text-white"
				>Username</label
			>
			<input
				type="text"
				id="user-name"
				class="form-inputs"
				placeholder="you@site.com"
				value="Bikathi Martin" />
		</div>
		<div>
			<button
				type="button"
				class="py-3 px-4 text-sm inline-flex items-center font-semibold rounded-md bg-blue-600 text-white hover:bg-blue-700">
				Update Changes
			</button>
		</div>
		<hr class="border-gray-800 dark:border-white my-4 opacity-50" />
		<h1 class="text-2xl font-bold mb-2">Password Management</h1>
		<div class="mb-4">
			<label
				for="current-password"
				class="block font-medium mb-2 dark:text-white"
				>Current Password</label
			>
			<input
				type="password"
				id="current-password"
				class="form-inputs"
				placeholder="your current password" />
		</div>
		<div class="my-4">
			<label
				for="new-password"
				class="block font-medium mb-2 dark:text-white"
				>New Password</label
			>
			<input
				type="password"
				id="new-password"
				class="form-inputs"
				placeholder="enter new password" />
		</div>
		<div class="my-4">
			<label
				for="confirm-password"
				class="block font-medium mb-2 dark:text-white"
				>Confirm New Password</label
			>
			<input
				type="password"
				id="confirm-password"
				class="form-inputs"
				placeholder="re-enter password" />
		</div>
		<div>
			<button
				type="button"
				class="py-3 px-4 text-sm inline-flex items-center font-semibold rounded-md bg-blue-600 text-white hover:bg-blue-700">
				Update Changes
			</button>
		</div>
		<hr class="border-gray-800 dark:border-white my-4 opacity-50" />
		<h1 class="text-2xl font-bold mb-2">Access Management</h1>
		<p class="my-2 text-sm">
			Locking your account would mean that you can't access your account
			from any of your other devices. To unlock it, you will need to
			contact your administrator.
		</p>
		<p class="my-2 text-sm">Be sure of your actions before you proceed.</p>
		<p class="my-2 text-sm">Are you sure you want to lock your account.</p>
		<button
			type="button"
			class="py-3 px-4 text-sm inline-flex items-center font-semibold rounded-md bg-red-600 text-white hover:bg-red-700">
			Lock Account
		</button>
	</main>
</template>

<script setup lang="ts">
	definePageMeta({
		name: 'general-settings',
		layout: 'dashboard-layout',
	});
</script>
