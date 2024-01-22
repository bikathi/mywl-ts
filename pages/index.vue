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
				<form @submit.prevent="loginUser">
					<div>
						<label
							for="username"
							class="block text-sm font-medium mb-2 dark:text-white"
							>Username</label
						>
						<input
							type="text"
							id="username"
							class="py-3 px-4 block w-full border rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
							placeholder="@yourusername"
							v-model="signInRequest.username"
							required />
					</div>
					<div class="py-2">
						<label
							for="password"
							class="block text-sm font-medium mb-2 dark:text-white"
							>Password</label
						>
						<input
							type="password"
							id="password"
							class="py-3 px-4 block w-full border rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
							placeholder="super secret password"
							v-model="signInRequest.password"
							required />
					</div>
					<div class="flex justify-end">
						<button
							type="submit"
							class="py-3 px-4 inline-flex items-center text-sm font-semibold rounded-md bg-blue-100 text-blue-800 hover:bg-blue-200 disabled:opacity-50 dark:hover:bg-blue-900 dark:text-blue-400">
							Login
						</button>
					</div>
				</form>
			</div>
			<div
				class="bg-gray-100 border-t rounded-b-xl py-2 px-3 dark:bg-slate-800 dark:border-gray-700">
				<p class="mt-1 text-sm text-gray-500 dark:text-gray-500">
					If you have no account, kindly contact your administrator.
					By loging in, you agree to use of cookies by the site.
					<a
						href="#"
						class="text-blue-600 hover:text-blue-700"
						>Learn More</a
					>
				</p>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { usePrincipal } from '~/stores/usePrincipal';
	definePageMeta({
		name: 'application-home',
	});
	const signInRequest = reactive({
		username: '',
		password: '',
	});
	const { openToast } = useToast();
	const authToken = useCookie('AUTH-TOKEN', {
		watch: true,
		httpOnly: false,
		domain: 'localhost',
		path: '/',
	});
	const csrfToken = useCookie('CSRF-TOKEN', {
		watch: true,
		httpOnly: false,
		domain: 'localhost',
		path: '/',
	});
	const { setDetails } = usePrincipal();
	const router = useRouter();

	async function loginUser() {
		try {
			await $fetch('/api/v1/auth/signin', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
				},
				body: JSON.stringify(signInRequest),
				async onResponse({ response }) {
					if (response.status === 200) {
						const responseData = response._data;
						authToken.value = responseData.data.authToken;
						csrfToken.value = responseData.data.csrfToken;

						// once credentials are set in the cookies, null them out and save the rest in the store
						responseData.data.authToken = null;
						responseData.data.csrfToken = null;

						openToast('Login successful', 'success');
						await setDetails(responseData.data).then(() =>
							router.push({ name: 'open-issues' }),
						);
					}
				},
			});
		} catch (error) {}
	}
</script>
