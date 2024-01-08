<template>
	<form>
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
				placeholder="your current password" />
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
				placeholder="enter new password" />
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
				placeholder="re-enter password" />
		</div>
		<div>
			<button
				type="button"
				class="py-3 px-4 text-sm inline-flex items-center font-semibold rounded-md bg-blue-600 text-white hover:bg-blue-700">
				Update Changes
			</button>
		</div>
	</form>
</template>
