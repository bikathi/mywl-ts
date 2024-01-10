<template>
	<form @submit.prevent="updateUserPassword">
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
				placeholder="your current password"
				v-model="currentPassword"
				required />
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
				placeholder="enter new password"
				v-model="newPassword"
				required />
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
				placeholder="re-enter password"
				v-model="newPasswordConfirm"
				required />
		</div>
		<div>
			<button
				type="submit"
				class="py-3 px-4 text-sm inline-flex items-center font-semibold rounded-md bg-blue-600 text-white hover:bg-blue-700">
				<span
					v-if="loadingUpdatePassword"
					class="animate-spin inline-block w-4 h-4 border-[3px] border-current border-t-transparent text-white rounded-full"
					role="status"
					aria-label="loading"></span>
				<span v-if="loadingUpdatePassword">Loading</span>
				<span v-else>Update Password</span>
			</button>
		</div>
	</form>
</template>

<script setup lang="ts">
	import { usePrincipal } from '~/stores/usePrincipal';

	const { getDetails } = usePrincipal();
	const currentPassword: Ref<string> = ref('');
	const newPassword: Ref<string> = ref('');
	const newPasswordConfirm: Ref<string> = ref('');
	const loadingUpdatePassword: Ref<boolean> = ref(false);
	const { openToast } = useToast();

	async function updateUserPassword(): Promise<void> {
		loadingUpdatePassword.value = true;

		await useFetch('/api/v1/accounts/update-password', {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
			body: JSON.stringify({
				userId: getDetails.userId,
				oldPassword: currentPassword.value,
				newPassword: newPassword.value,
				passwordConfirmation: newPasswordConfirm.value,
			}),
			async onRequestError() {
				// TODO: Fixup issues with alert box
				loadingUpdatePassword.value = false;
				openToast('Something went wrong. Please try again.', 'danger');
			},
			async onResponse({ response }) {
				loadingUpdatePassword.value = false;
				const responseData = response._data;
				console.log('response data: ', responseData);
				if (response.status === 500) {
					openToast(responseData.message, 'warning');
				} else if (response.status === 200) {
					openToast(responseData.message, 'info');
				}

				currentPassword.value = '';
				newPassword.value = '';
				newPasswordConfirm.value = '';
			},
		});
	}
</script>
