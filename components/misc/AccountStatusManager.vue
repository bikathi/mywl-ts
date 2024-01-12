<template>
	<div class="text-center mt-2 w-full">
		<button
			class="py-2 w-[45%] px-3 inline-flex items-center justify-center gap-x-2 text-sm font-semibold rounded-full border border-transparent bg-red-600 text-white hover:bg-red-700"
			v-if="props.accountEnabled"
			@click="deactivateAccount">
			Deactivate Account
		</button>
		<button
			class="py-2 w-[45%] px-3 inline-flex items-center justify-center gap-x-2 text-sm font-semibold rounded-full border border-transparent bg-green-600 text-white hover:bg-green-700"
			v-else-if="!props.accountEnabled"
			@click="activateAccount">
			Activate Account
		</button>
	</div>
</template>

<script setup lang="ts">
	export interface Props {
		accountEnabled: boolean;
		userId: string;
	}

	const props = defineProps<Props>();
	const { openToast } = useToast();

	async function deactivateAccount() {
		await useFetch('/api/v1/accounts/deactivate', {
			method: 'PATCH',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				userId: props.userId,
			}),

			async onResponse({ response }) {
				if (response.status === 200) {
					openToast('User account has been deactivated.', 'info');
					location.reload();
				}
			},
		});
	}

	async function activateAccount() {
		await useFetch('/api/v1/accounts/activate', {
			method: 'PATCH',
			headers: {
				Accept: 'application/json',
			},
			body: JSON.stringify({
				userId: props.userId,
			}),

			async onResponse({ response }) {
				if (response.status === 200) {
					openToast('User account has been activated.', 'info');
					location.reload();
				}
			},
		});
	}
</script>
