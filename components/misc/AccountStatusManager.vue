<template>
	<div class="text-center mt-2 w-full">
		<button
			class="py-2 w-[45%] px-3 inline-flex items-center justify-center gap-x-2 text-sm font-semibold rounded-full border border-transparent bg-red-600 text-white hover:bg-red-700"
			v-if="props.accountEnabled">
			Deactivate Account
		</button>
		<button
			class="py-2 w-[45%] px-3 inline-flex items-center justify-center gap-x-2 text-sm font-semibold rounded-full border border-transparent bg-green-600 text-white hover:bg-green-700"
			v-else-if="!props.accountEnabled">
			Activate Account
		</button>
	</div>
</template>

<script setup lang="ts">
	export interface Props {
		accountEnabled: boolean;
		userId: string
	}

	const props = defineProps<Props>();
</script>
