<template>
	<div class="mt-5">
		<form class="border rounded-xl dark:border-gray-700">
			<div
				class="bg-gray-100 rounded-t-xl py-4 px-3 dark:bg-slate-800 dark:border-gray-700">
				<p class="mt-1 text-sm text-gray-500 dark:text-gray-500">
					Kindly provide as much information as possible about the
					issue.
				</p>
			</div>
			<div class="m-3">
				<h3
					class="my-2 text-2xl font-bold text-gray-800 dark:text-white">
					Basic Information
				</h3>
				<div class="flex flex-col lg:flex-row space-x-0 lg:space-x-4">
					<div class="w-full lg:w-1/2">
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
					<div class="w-full lg:w-1/2">
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
				<div
					class="flex flex-col lg:flex-row space-x-0 lg:space-x-4 mt-4">
					<div class="w-full lg:w-1/2">
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
					<div class="w-full lg:w-1/2 mt-4 lg:mt-0">
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
				<h3
					class="mt-4 text-2xl font-bold text-gray-800 dark:text-white">
					Describe the Issue
				</h3>
				<textarea
					id="issue-description"
					class="p-4 mt-2 pb-12 block w-full border bg-gray-100 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
					maxlength="3000"
					rows="6"
					placeholder="Describe the incident in as much detail as possible..."></textarea>
				<h3
					class="mt-4 text-2xl font-bold text-gray-800 dark:text-white">
					Which Technician Will Handle this Issue?
				</h3>
				<div>
					<span
						class="mb-4 text-sm font-extralight tracking-wider inline-flex items-center"
						><Icon
							name="ri:information-line"
							color="currentColor"
							size="16"
							class="mr-1" />Assign each issue to be handled by at
						least one technician or a team of two</span
					>
					<div
						class="flex flex-col lg:flex-row space-x-0 lg:space-x-4 space-y-2 lg:space-y-0">
						<select
							class="py-3 px-4 pe-9 block w-full lg:w-1/2 bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-700 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600">
							<option selected>
								Select A Technician from the List
							</option>
							<option>John Doe</option>
							<option>John Doe</option>
							<option>John Doe</option>
						</select>
						<select
							class="py-3 px-4 pe-9 block w-full lg:w-1/2 bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-700 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600">
							<option selected>
								Optional: Select another Technician from the
								list
							</option>
							<option>John Doe</option>
							<option>John Doe</option>
							<option>John Doe</option>
						</select>
					</div>
				</div>
				<div class="py-4 mt-2">
					<button
						type="button"
						class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700">
						Open a New Issue
					</button>
				</div>
			</div>
			<div
				class="bg-gray-100 rounded-b-xl py-4 px-3 dark:bg-slate-800 dark:border-gray-700">
				<p class="mt-1 text-sm text-gray-500 dark:text-gray-500">
					All open issues will have a status of Active by default.
				</p>
			</div>
		</form>
	</div>
</template>
