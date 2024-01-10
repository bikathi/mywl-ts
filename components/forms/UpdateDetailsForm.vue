<template>
	<form @submit.prevent="updateUserDetails">
		<div class="mb-2">
			<h1 class="text-2xl font-bold">Account Information</h1>
			<span
				class="mb-4 text-sm font-extralight tracking-wider inline-flex items-center"
				><Icon
					name="ri:information-line"
					color="currentColor"
					size="16"
					class="mr-1" />Effects take place next time you log in</span
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
				v-model="email" />
		</div>
		<div class="my-4">
			<label
				for="first-name"
				class="block font-medium mb-2 dark:text-white"
				>First Name</label
			>
			<input
				type="text"
				id="first-name"
				class="form-inputs"
				placeholder="John"
				v-model="firstName" />
		</div>
		<div class="my-4">
			<label
				for="other-name"
				class="block font-medium mb-2 dark:text-white"
				>Other Name</label
			>
			<input
				type="text"
				id="other-name"
				class="form-inputs"
				placeholder="Doe"
				v-model="otherName" />
		</div>
		<div class="my-4">
			<label
				for="username"
				class="block font-medium mb-2 dark:text-white"
				>Username</label
			>
			<input
				type="text"
				id="username"
				class="form-inputs"
				placeholder="Doe"
				v-model="username" />
		</div>
		<div>
			<button
				type="submit"
				class="py-3 px-4 text-sm inline-flex items-center font-semibold rounded-md bg-blue-600 text-white hover:bg-blue-700">
				<span
					v-if="loadingUpdateDetails"
					class="animate-spin inline-block w-4 h-4 border-[3px] border-current border-t-transparent text-white rounded-full"
					role="status"
					aria-label="loading"></span>
				<span v-if="loadingUpdateDetails">Loading</span>
				<span v-else>Update Changes</span>
			</button>
		</div>
	</form>
</template>

<script setup lang="ts">
	import { usePrincipal } from '~/stores/usePrincipal';
	const { getDetails } = usePrincipal();
	const email: Ref<string> = ref('');
	const firstName = ref('');
	const otherName = ref('');
	const username = ref('');
	const loadingUpdateDetails: Ref<boolean> = ref(false);
	const { openToast } = useToast();

	async function updateUserDetails() {
		loadingUpdateDetails.value = true;
		await useFetch('/api/v1/accounts/update-account', {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
			body: JSON.stringify({
				userId: getDetails.userId,
				firstName: firstName.value,
				otherName: otherName.value,
				username: username.value,
				email: getDetails.email,
				dateOfBirth: getDetails.dateOfBirth,
				roles: getDetails.roles,
				department: getDetails.department,
			}),
			async onRequestError() {
				// TODO: Fixup issues with alert box
				loadingUpdateDetails.value = false;
				openToast('Something went wrong. Please try again.', 'danger');
			},
			}
			},async onResponse({ response }) {
				loadingUpdateDetails.value = false;
				const responseData = response._data;
				if (response.status === 200) {
					openToast(responseData.message, 'info');
				
		});
	}

	onBeforeMount(() => {
		email.value = getDetails.email;
		firstName.value = getDetails.firstName;
		otherName.value = getDetails.otherName;
		username.value = getDetails.username;
	});
</script>
