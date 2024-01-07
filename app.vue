<template>
	<main>
		<NuxtLayout>
			<NuxtPage @display-alert="() => console.log('alert invoked')" />
		</NuxtLayout>

		<div
			class="bg-blue-800 text-sm text-white rounded-lg p-4 fixed bottom-5 left-3"
			role="alert"
			v-if="displayAlert">
			<span class="font-semibold">{{ alertMessage }}</span>
		</div>
	</main>
</template>

<script setup lang="ts">
	function generateCSRFToken(a: string = ''): string {
		return a
			? ((Number(a) ^ (Math.random() * 16)) >> (Number(a) / 4)).toString(
					16,
			  )
			: `${1e7}-${1e3}-${4e3}-${8e3}-${1e11}`.replace(
					/[018]/g,
					generateCSRFToken,
			  );
	}
</script>
