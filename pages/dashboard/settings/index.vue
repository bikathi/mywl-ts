<template>
	<main>
		<UpdateDetailsForm />
		<hr class="border-gray-800 dark:border-white my-4 opacity-50" />
		<h1 class="text-2xl font-bold mb-2">Password Management</h1>
		<ManagePasswordForm />
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
