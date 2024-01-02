<template>
	<main>
		<NuxtLayout>
			<NuxtPage @display-alert="() => console.log('alert invoked')" />
		</NuxtLayout>

		<div
			class="bg-gray-800 text-sm text-white rounded-lg p-4 dark:bg-white dark:text-gray-800 fixed bottom-5 left-3"
			role="alert"
			v-if="showAlert">
			<span class="font-bold">Dark</span> alert! You should check in on
			some of those fields below.
		</div>
	</main>
</template>

<script setup lang="ts">
	const csrfCookie = useCookie('CSRF-TOKEN', {
		watch: false,
		httpOnly: true,
	});
	const route = useRoute();
	const router = useRouter();
	const showAlert = ref(true);
	// if (!csrfCookie.value) {
	// 	console.log('CSRF-COOKIE does not exist');
	// 	if (route.name != 'application-home') {
	// 		router.push({ name: 'application-home', force: true });
	// 		// window.location.reload();

	// 		console.log('Pushed user to application home');
	// 	}

	// 	const cookie = generateCSRFToken();
	// 	csrfCookie.value = cookie;
	// }

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

	onBeforeMount(() => {
		const htmlTag = document.documentElement;
		// TODO: here, we will assign the correct class based on the user's settings
		const prefferedThemeClass = 'dark'; // light or dark
		htmlTag.classList.add(prefferedThemeClass);
	});

	onMounted(() => {
		if (csrfCookie.value) {
			console.log('on mounted => cookie exists');
			console.log('on mounted => cookie value: ', csrfCookie.value);
		}
	});
</script>
