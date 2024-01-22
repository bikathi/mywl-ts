<template>
	<main>
		<div class="mb-4">
			<h1 class="text-2xl font-bold">Connected Services</h1>
			<div
				class="mt-4 w-full lg:w-[66.666%] min-w-[66.666%] inline-block align-middle">
				<div
					class="border rounded-lg overflow-hidden dark:border-gray-700">
					<table
						class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
						<thead class="bg-gray-50 dark:bg-gray-700">
							<tr>
								<th
									scope="col"
									class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-gray-400">
									Service
								</th>
								<th
									scope="col"
									class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-gray-400">
									Action
								</th>
							</tr>
						</thead>
						<tbody
							class="divide-y divide-gray-200 dark:divide-gray-700">
							<tr>
								<td
									class="inline-flex items-center px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
									<Icon
										name="simple-icons:googlecalendar"
										color="currentColor"
										size="18"
										class="mr-2" />
									Google Calendar
								</td>
								<td
									class="px-6 py-4 whitespace-nowrap text-sm font-medium">
									<button
										type="button"
										class="conn-services-action-buttons">
										Connect
									</button>
								</td>
							</tr>
							<tr>
								<td
									class="inline-flex items-center px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
									<Icon
										name="simple-icons:microsoftoutlook"
										color="currentColor"
										size="18"
										class="mr-2" />
									Outlook Calendar
								</td>
								<td
									class="px-6 py-4 whitespace-nowrap text-sm font-medium">
									<button
										type="button"
										class="conn-services-action-buttons">
										Connect
									</button>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
		<div class="mb-4">
			<h1 class="text-2xl font-bold">Notification Controls</h1>
			<div class="flex items-center my-2">
				<input
					type="checkbox"
					id="toggle-email-notifications"
					class="settings-toggle"
					checked />
				<label
					for="toggle-email-notifications"
					class="text-gray-500 ms-3 dark:text-gray-400"
					>Enable Email Notifications</label
				>
			</div>
			<span
				class="mb-4 text-sm font-extralight tracking-wider inline-flex items-center"
				><Icon
					name="ri:information-line"
					color="currentColor"
					size="16"
					class="mr-1" />You may still receive some emails even if
				this is toggled off</span
			>
			<div class="flex items-center my-2">
				<input
					type="checkbox"
					id="toggle-sms-notifications"
					class="settings-toggle"
					checked />
				<div></div>
				<label
					for="toggle-sms-notifications"
					class="text-gray-500 ms-3 dark:text-gray-400"
					>Enable SMS Notifications</label
				>
				<br />
			</div>
			<span
				class="mb-4 text-sm font-extralight tracking-wider inline-flex items-center"
				><Icon
					name="ri:information-line"
					color="currentColor"
					size="16"
					class="mr-1" />You won't receive any SMS from this software
				if you toggle this off</span
			>
			<div class="flex items-center my-2">
				<input
					type="checkbox"
					id="toggle-mention-notifications"
					class="settings-toggle"
					checked />
				<div></div>
				<label
					for="toggle-mention-notifications"
					class="text-gray-500 ms-3 dark:text-gray-400"
					>Notify me any time I am
					<span
						class="py-0.5 px-1.5 bg-gray-200 border border-transparent font-mono text-sm text-gray-800 rounded-lg dark:bg-gray-700 dark:text-gray-200"
						>@mentioned</span
					></label
				>
				<br />
			</div>
		</div>
		<div class="mb-4">
			<h1 class="text-2xl font-bold">User Interface Controls</h1>
			<div class="flex items-center my-2">
				<input
					type="checkbox"
					id="toggle-release-notes"
					class="settings-toggle"
					checked />
				<label
					for="toggle-release-notes"
					class="text-gray-500 ms-3 dark:text-gray-400"
					>Enable Release Notes & Tutorials</label
				>
				<br />
			</div>
			<span
				class="mb-4 text-sm font-extralight tracking-wider inline-flex items-center"
				><Icon
					name="ri:information-line"
					color="currentColor"
					size="16"
					class="mr-1" />Your menu will have a
				<span
					class="mx-1 py-0.5 px-1.5 bg-gray-200 border border-transparent font-mono text-sm text-gray-800 rounded-lg dark:bg-gray-700 dark:text-gray-200"
					>release notes</span
				>entry</span
			>
		</div>
		<div class="my-2">
			<div class="flex items-center my-2">
				<input
					type="checkbox"
					id="default-dark-theme"
					class="settings-toggle"
					checked />
				<div></div>
				<label
					for="default-dark-theme"
					class="text-gray-500 ms-3 dark:text-gray-400"
					>Default theme is dark</label
				>
				<br />
			</div>
			<span
				class="mb-4 text-sm font-extralight tracking-wider inline-flex items-center"
				><Icon
					name="ri:information-line"
					color="currentColor"
					size="16"
					class="mr-1" />App will always start in dark mode</span
			>
			<div class="flex items-center my-2">
				<input
					type="checkbox"
					id="toggle-scrollbars"
					class="settings-toggle"
					checked />
				<div></div>
				<label
					for="toggle-scrollbars"
					class="text-gray-500 ms-3 dark:text-gray-400"
					>Show scrollbars where necessary</label
				>
				<br />
			</div>
			<span
				class="mb-4 text-sm font-extralight tracking-wider inline-flex items-center"
				><Icon
					name="ri:information-line"
					color="currentColor"
					size="16"
					class="mr-1" />All scrollbars are hidden by default. Toogle
				this ON to change that</span
			>
			<div class="flex items-center my-2">
				<input
					type="checkbox"
					id="toggle-stickynavbar"
					class="settings-toggle"
					checked />
				<div></div>
				<label
					for="toggle-stickynavbar"
					class="text-gray-500 ms-3 dark:text-gray-400"
					>Sticky navigation bar</label
				>
				<br />
			</div>
			<span
				class="mb-4 text-sm font-extralight tracking-wider inline-flex items-center"
				><Icon
					name="ri:information-line"
					color="currentColor"
					size="16"
					class="mr-1" />The navbar sticks at the top even as you
				scroll down</span
			>
		</div>
	</main>
</template>

<script setup lang="ts">
	definePageMeta({
		name: 'preferences-settings',
	});
</script>
