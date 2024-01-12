<template>
	<div class="flex flex-col space-y-4 items-center justify-center">
		<h1 class="text-5xl font-medium">404</h1>
		<!-- TODO: code up a page to leave a message for the admin -->
		<p
			class="w-[90%] sm:w-[70%] md:w-[50%] text-2xl text-center font-medium">
			Oops! It seems like the page you were looking for does not exist. If
			you think this is an issue please leave a message for the
			administrator.
		</p>
		<p
			class="w-[90%] sm:w-[70%] md:w-[50%] text-2xl text-center font-medium">
			If you are lost, click the button below to visit the login page.
		</p>
		<NuxtLink
			:to="{ name: 'application-home' }"
			class="py-2 px-4 inline-flex items-center text-lg font-semibold rounded-full bg-blue-700 hover:bg-blue-800 disabled:opacity-50 text-white"
			>Login</NuxtLink
		>
	</div>
</template>

<script setup lang="ts">
	definePageMeta({
		name: '404-error',
		layout: 'flat-design-layout',
	});
</script>
