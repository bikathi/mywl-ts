<template>
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>

<script setup lang="ts">
	onBeforeMount(() => {
		const htmlTag = document.documentElement;
		// TODO: here, we will assign the correct class based on the user's settings
		const prefferedThemeClass = 'dark'; // light or dark
		htmlTag.classList.add(prefferedThemeClass);
	});
</script>
