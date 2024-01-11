<template>
	<div
		class="min-h-screen flex flex-col overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-thumb-rounded-full dark:scrollbar-track-slate-900">
		<div
			class="border-b border-gray-200 dark:bg-slate-900 dark:border-gray-700 dark:text-white h-[11%]">
			<nav
				class="flex items-center justify-between px-2 lg:px-56 h-full py-2">
				<h1 class="text-2xl lg:text-3xl font-bold">Poa Internet</h1>
				<div class="hs-dropdown inline-flex items-center space-x-2">
					<button
						type="button"
						class="p-1 dark:text-white"
						data-hs-overlay="#hs-overlay-example">
						<Icon
							name="ri:notification-2-fill"
							color="currentColor"
							size="23"
							class="" />
					</button>
					<button
						id="hs-dropdown-with-icons"
						type="button"
						class="hs-dropdown-toggle py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800">
						<Icon
							name="mdi:menu-down"
							color="currentColor"
							size="23"
							class="hs-dropdown-open:rotate-180" />
						<img
							src="/images/random-person-image.webp"
							alt="user-image"
							class="object-cover h-6 lg:h-7 w-6 lg:w-7 rounded-full" />
					</button>
					<div
						class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-[15rem] bg-white shadow-md rounded-lg p-2 mt-2 divide-y divide-gray-200 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700"
						aria-labelledby="hs-dropdown-with-icons">
						<div class="py-2 first:pt-0 last:pb-0">
							<div
								class="text-sm dark:bg-gray-700 my-2 tracking-wide dark:border dark:border-gray-700 flex flex-col p-2 rounded-lg">
								<span>{{ username }}</span>
								<span>{{ email }}</span>
							</div>
							<button
								class="flex items-center gap-x-3.5 w-full py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
								@click.prevent="
									async () => await toggleThemeChange()
								">
								<Icon
									name="ri:lightbulb-flash-line"
									color="currentColor"
									size="20" />
								Theme Change
							</button>
							<NuxtLink
								:to="{ name: 'general-settings' }"
								class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700">
								<Icon
									name="ri:settings-4-fill"
									color="currentColor"
									size="20" />
								Settings
							</NuxtLink>
							<a
								class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
								href="#">
								<Icon
									name="ri:logout-box-r-line"
									color="currentColor"
									size="20" />
								Logout
							</a>
						</div>
					</div>
				</div>
			</nav>
			<nav class="flex space-x-2 px-2 lg:px-56 overflow-x-auto">
				<NuxtLink
					:to="{ name: 'issues-home' }"
					type="button"
					class="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500">
					Issue Monitor
				</NuxtLink>
				<NuxtLink
					:to="{ name: 'user-manager' }"
					type="button"
					class="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500">
					User Management
				</NuxtLink>

				<NuxtLink
					:to="{ name: 'projects-home' }"
					type="button"
					class="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500">
					Projects Tracker
				</NuxtLink>
				<NuxtLink
					:to="{ name: 'user-calendar' }"
					type="button"
					class="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500">
					Assignments & Calendar
				</NuxtLink>
			</nav>
		</div>
		<div
			class="dark:bg-slate-900 dark:border-gray-700 dark:text-white grow px-2 lg:px-56">
			<slot />
		</div>
		<!-- for the notification sidebar component -->
		<NotificationSidebar />
	</div>
</template>

<script setup lang="ts">
	import { usePrincipal } from '~/stores/usePrincipal';
	const { getDetails } = usePrincipal();
	const username = ref('John Doe');
	const email = ref('johndoe@mymail.com');

	async function toggleThemeChange(): Promise<void> {
		const htmlTag = document.documentElement;
		// change the theme based on some logic - were looking at the current value of `class=`
		if (htmlTag.classList.contains('dark')) {
			htmlTag.classList.remove('dark');
			htmlTag.classList.add('light');
		} else if (htmlTag.classList.contains('light')) {
			htmlTag.classList.remove('light');
			htmlTag.classList.add('dark');
		}

		// also save the user's prefference to their settings file
	}

	onBeforeMount(() => {
		username.value = `${getDetails.firstName} ${getDetails.otherName}`;
		email.value = getDetails.email;
	});
</script>

<style>
	::-webkit-scrollbar-thumb {
		border-radius: 10px;
	}

	/* Hide scrollbar for Chrome, Safari and Opera */
	::-webkit-scrollbar {
		display: none;
	}

	/* Hide scrollbar for IE, Edge and Firefox */
	.no-scrollbar {
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
	}
</style>

<style scoped>
	.router-link-active {
		color: rgb(37 99 235);
		text-decoration: underline;
		text-decoration-thickness: 2px;
		text-underline-offset: 4px;
	}
</style>
