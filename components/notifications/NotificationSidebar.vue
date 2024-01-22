<template>
	<!-- offcanvas sidebar for notifications -->
	<div
		id="hs-overlay-example"
		class="hs-overlay hs-overlay-open:translate-x-0 hidden -translate-x-full fixed top-0 start-0 transition-all duration-300 transform rounded-lg h-full max-w-xs w-full z-[60] bg-white border-e dark:bg-gray-800 dark:border-gray-700 overflow-y-scroll"
		tabindex="-1">
		<div
			class="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700">
			<h3 class="font-medium text-lg text-gray-800 dark:text-white">
				Notifications
			</h3>
			<button
				type="button"
				class="flex justify-center items-center w-7 h-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
				data-hs-overlay="#hs-overlay-example">
				<span class="sr-only">Close modal</span>
				<Icon
					name="codicon:close"
					class="flex-shrink-0"
					color="currentColor"
					size="20" />
			</button>
		</div>
		<div class="p-2 space-y-4">
			<NotificationEntry v-for="a in 10" />
		</div>
		<span class="p-2 text-xs text-gray-800 dark:text-white font-medium"
			>Powered by Nuxt</span
		>
	</div>
</template>

<script setup lang="ts"></script>
