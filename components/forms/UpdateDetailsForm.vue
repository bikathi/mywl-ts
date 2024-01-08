<template>
	<form>
		<div class="mb-2">
			<h1 class="text-2xl font-bold">Account Information</h1>
			<span
				class="mb-4 text-sm font-extralight tracking-wider inline-flex items-center"
				><Icon
					name="ri:information-line"
					color="currentColor"
					size="16"
					class="mr-1" />Information is limited to in-app use
				only</span
			>
		</div>
		<div class="mb-4">
			<label
				for="user-email"
				class="block font-medium mb-2 dark:text-white"
				>Account Email</label
			>
			<input
				type="email"
				id="user-email"
				class="form-inputs"
				placeholder="you@site.com"
				value="martbikathi@gmail.com" />
		</div>
		<div class="my-4">
			<label
				for="user-name"
				class="block font-medium mb-2 dark:text-white"
				>Username</label
			>
			<input
				type="text"
				id="user-name"
				class="form-inputs"
				placeholder="you@site.com"
				value="Bikathi Martin" />
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
