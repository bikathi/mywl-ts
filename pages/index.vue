<template>
	<div
		class="flex items-center flex-col h-screen dark:bg-slate-900 dark:text-white justify-center px-2">
		<h1 class="text-3xl mb-2">Poa Internet</h1>
		<div
			class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7] w-full sm:w-2/3 md:w-1/2 lg:w-1/4">
			<div class="p-4 md:p-5 space-y-3">
				<h3 class="text-2xl font-bold text-gray-800 dark:text-white">
					Login
				</h3>
				<div>
					<label
						for="input-label"
						class="block text-sm font-medium mb-2 dark:text-white"
						>Email</label
					>
					<input
						type="email"
						id="input-label"
						class="py-3 px-4 block w-full border rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
						placeholder="you@site.com" />
				</div>
				<div>
					<label
						for="input-label"
						class="block text-sm font-medium mb-2 dark:text-white"
						>Password</label
					>
					<input
						type="password"
						id="input-label"
						class="py-3 px-4 block w-full border rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
						placeholder="super secret password" />
				</div>
				<div class="flex justify-end">
					<button
						type="button"
						class="py-3 px-4 inline-flex items-center text-sm font-semibold rounded-md bg-blue-100 text-blue-800 hover:bg-blue-200 disabled:opacity-50 dark:hover:bg-blue-900 dark:text-blue-400">
						Login
					</button>
				</div>
			</div>
			<div
				class="bg-gray-100 border-t rounded-b-xl py-4 px-3 dark:bg-slate-800 dark:border-gray-700">
				<p class="mt-1 text-sm text-gray-500 dark:text-gray-500">
					If you have no account, kindly contact your administrator.
				</p>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	definePageMeta({
		name: "application-home",
	});
</script>
