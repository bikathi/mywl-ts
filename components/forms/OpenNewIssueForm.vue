<template>
	<div class="mt-5">
		<form>
			<div
				class="bg-gray-100 border-t rounded-t-xl py-4 px-3 dark:bg-slate-800 dark:border-gray-700">
				<p class="mt-1 text-sm text-gray-500 dark:text-gray-500">
					Kindly provide as much information as possible about this
					issue.
				</p>
			</div>
			<h3 class="my-2 text-2xl font-bold text-gray-800 dark:text-white">
				Basic Information
			</h3>
			<div class="flex space-x-4">
				<div class="w-1/2">
					<label
						for="issue-title"
						class="block text-sm font-medium mb-1 dark:text-white"
						>Issue Title</label
					>
					<input
						type="text"
						id="issue-title"
						class="py-3 px-4 block w-full border rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
						placeholder="e.g. Increased buffering after heavy rains" />
				</div>
				<div class="w-1/2">
					<label
						for="client-name"
						class="block text-sm font-medium mb-1 dark:text-white"
						>Affected Client's Name</label
					>
					<input
						type="text"
						maxlength="50"
						id="client-name"
						class="py-3 px-4 block w-full border rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
						placeholder="John Doe" />
				</div>
			</div>
			<div class="flex space-x-4 mt-4">
				<div class="w-1/2">
					<label
						for="client-location"
						class="block text-sm font-medium mb-1 dark:text-white"
						>Client's Location</label
					>
					<input
						type="text"
						id="client-location"
						class="py-3 px-4 block w-full border rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
						placeholder="e.g. Mathare North, Area 4" />
				</div>
				<div class="w-1/2">
					<label
						for="client-name"
						class="block text-sm font-medium mb-1 dark:text-white"
						>When Is the Incident Being Reported?
						(dd/MM/yyyy)</label
					>
					<div class="w-full flex space-x-2">
						<input
							type="text"
							maxlength="2"
							id="client-name"
							class="py-3 px-4 block w-1/3 border rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
							placeholder="day e.g. 29" />
						<input
							type="text"
							maxlength="2"
							id="client-name"
							class="py-3 px-4 block w-1/3 border rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
							placeholder="month e.g. 11" />
						<input
							type="text"
							maxlength="4"
							id="client-name"
							class="py-3 px-4 block w-1/3 border rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
							placeholder="year e.g. 2023" />
					</div>
				</div>
			</div>
			<h3 class="mt-4 text-2xl font-bold text-gray-800 dark:text-white">
				Describe the Issue
			</h3>
			<textarea
				id="issue-description"
				class="p-4 mt-2 pb-12 block w-full border bg-gray-100 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
				maxlength="3000"
				rows="6"
				placeholder="Describe the incident in as much detail as possible..."></textarea>
			<h3 class="mt-4 text-2xl font-bold text-gray-800 dark:text-white">
				Which Technician Will Handle this Issue?
			</h3>
			<div>
				<span
					class="mb-4 text-sm font-extralight tracking-wider inline-flex items-center"
					><Icon
						name="ri:information-line"
						color="currentColor"
						size="16"
						class="mr-1" />Assign this issue to be handled by at
					least one technician</span
				>
			</div>
		</form>
	</div>
</template>
