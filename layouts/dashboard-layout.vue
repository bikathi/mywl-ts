<template>
	<div
		class="h-screen flex flex-col overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-thumb-rounded-full dark:scrollbar-track-slate-900">
		<div
			class="border-b border-gray-200 dark:bg-slate-900 dark:border-gray-700 dark:text-white">
			<nav class="flex items-center justify-between px-2 lg:px-48">
				<h1 class="text-xl sm:text-2xl lg:text-3xl font-bold">
					Poa Internet
				</h1>
				<div
					class="hs-dropdown relative inline-flex items-center space-x-2 mt-2">
					<Icon
						name="ri:notification-2-fill"
						color="currentColor"
						size="23" />
					<button
						id="hs-dropdown-with-icons"
						type="button"
						class="hs-dropdown-toggle py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800">
						<img
							src="/images/random-person-image.webp"
							alt="user-image"
							class="object-cover h-6 lg:h-8 w-6 lg:w-8 rounded-full" />
						Bikathi Martin
						<svg
							class="hs-dropdown-open:rotate-180 w-4 h-4"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round">
							<path d="m6 9 6 6 6-6" />
						</svg>
					</button>
					<div
						class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-[15rem] bg-white shadow-md rounded-lg p-2 mt-2 divide-y divide-gray-200 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700"
						aria-labelledby="hs-dropdown-with-icons">
						<div class="py-2 first:pt-0 last:pb-0">
							<div
								class="text-sm dark:bg-gray-700 my-2 tracking-wide dark:border dark:border-gray-700 flex flex-col p-2 rounded-lg">
								<span>Bikathi Martin</span>
								<span>martbikathi@gmail.com</span>
							</div>
							<button
								class="flex items-center gap-x-3.5 w-full py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700">
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
			<nav class="flex space-x-2 px-2 md:px-48 overflow-x-auto">
				<NuxtLink
					:to="{ name: 'user-manager' }"
					type="button"
					class="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500">
					User Management
				</NuxtLink>
				<NuxtLink
					:to="{ name: 'issues-home' }"
					type="button"
					class="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500">
					Tasks & Issues
				</NuxtLink>
				<NuxtLink
					:to="{ name: 'projects-home' }"
					type="button"
					class="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500">
					Project Tracker
				</NuxtLink>
				<NuxtLink
					:to="{ name: 'user-calendar' }"
					type="button"
					class="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500">
					Events & Calendar
				</NuxtLink>
			</nav>
		</div>

		<div
			class="dark:bg-slate-900 dark:border-gray-700 dark:text-white flex-grow px-2 md:px-48">
			<slot />
		</div>
	</div>
</template>

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
