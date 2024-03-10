<template>
	<div class="mt-5">
		<form
			class="border rounded-xl dark:border-gray-700"
			@submit.prevent="openNewIssue">
			<div
				class="bg-gray-100 rounded-t-xl py-4 px-3 dark:bg-slate-800 dark:border-gray-700">
				<p class="mt-1 text-sm text-gray-500 dark:text-gray-500">
					Each issue you open will be tied to your username as the
					opener.
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
							placeholder="e.g. Increased buffering after heavy rains"
							v-model="issueTitle" />
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
							placeholder="John Doe"
							v-model="clientName" />
					</div>
				</div>
				<div
					class="flex flex-col lg:flex-row space-x-0 lg:space-x-4 mt-4">
					<div class="w-full flex space-x-2 lg:w-1/2">
						<div class="w-1/2">
							<!-- client's county -->
							<label
								for="client-location"
								class="block text-sm font-medium dark:text-white mb-1"
								>Client's County</label
							>
							<select
								@change=""
								class="py-3 px-4 block w-full border rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
								v-model="clientCounty">
								<option selected>Select A County</option>
								<option
									v-for="(
										county, index
									) in countiesAndSubCounties"
									:key="index">
									{{ county.name }}
								</option>
							</select>
						</div>
						<div class="w-1/2">
							<!-- client's area/ sub-county -->
							<label
								for="client-location"
								class="block text-sm font-medium dark:text-white mb-1"
								>Client's Subcounty</label
							>
							<select
								class="py-3 px-4 block w-full border rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
								v-model="clientArea">
								<option selected>Select A Sub-County</option>
								<option
									v-for="(item, index) in subCountyList"
									:key="index">
									{{ item }}
								</option>
							</select>
						</div>
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
								placeholder="day e.g. 29"
								v-model="dateIssueOpened.day" />
							<input
								type="text"
								maxlength="2"
								id="client-name"
								class="py-3 px-4 block w-1/3 border rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
								placeholder="month e.g. 11"
								v-model="dateIssueOpened.month" />
							<input
								type="text"
								maxlength="4"
								id="client-name"
								class="py-3 px-4 block w-1/3 border rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
								placeholder="year e.g. 2023"
								v-model="dateIssueOpened.year" />
						</div>
					</div>
				</div>
				<div
					class="flex flex-col lg:flex-row space-x-0 lg:space-x-4 mt-4">
					<div class="w-full lg:w-1/2">
						<label
							for="issue-title"
							class="block text-sm font-medium mb-1 dark:text-white"
							>Client Phone</label
						>
						<input
							type="text"
							id="issue-title"
							class="py-3 px-4 block w-full border rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
							placeholder="e.g. +254..."
							maxlength="13"
							v-model="clientPhone" />
					</div>
					<div class="w-full lg:w-1/2">
						<label
							for="client-name"
							class="block text-sm font-medium mb-1 dark:text-white"
							>Client Email</label
						>
						<input
							type="email"
							maxlength="50"
							id="client-name"
							class="py-3 px-4 block w-full border rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
							placeholder="johndoe@gmail.com"
							v-model="clientEmail" />
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
					placeholder="Describe the incident in as much detail as possible..."
					v-model="issueDescription"></textarea>
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
							class="py-3 px-4 pe-9 block w-full lg:w-1/2 bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-700 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600"
							v-model="primaryTechnician">
							<option selected>
								Select A Technician from the List
							</option>
							<option
								v-for="(user, index) in appUsers"
								:key="index">
								{{ user.userId }}
							</option>
						</select>
						<select
							class="py-3 px-4 pe-9 block w-full lg:w-1/2 bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-700 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600"
							v-model="otherTechnician">
							<option selected>
								Optional: Select another Technician from the
								list
							</option>
							<option
								v-for="(user, index) in appUsers"
								:key="index">
								{{ user.userId }}
							</option>
						</select>
					</div>
				</div>
				<div class="py-4 mt-2">
					<button
						type="submit"
						class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700">
						<span
							v-if="fetchRequestLoading"
							class="animate-spin inline-block w-4 h-4 border-[3px] border-current border-t-transparent text-white rounded-full"
							role="status"
							aria-label="loading"></span>
						<span v-if="fetchRequestLoading">Loading</span>
						<span v-else>Open a New Issue</span>
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

<script setup lang="ts">
	import { countiesAndSubCounties } from '~/constants/location-data';
	import { usePrincipal } from '~/stores/usePrincipal';

	const { getDetails } = usePrincipal();
	const fetchRequestLoading: Ref<boolean> = ref(false);
	const issueTitle = ref();
	const openedByUserId = ref(`${getDetails.userId}`);
	const clientName = ref();
	const clientCounty = ref();
	const clientArea = ref();
	const issueDescription = ref();
	const clientEmail = ref();
	const clientPhone = ref();
	const primaryTechnician = ref();
	const otherTechnician = ref();
	const appUsers = ref([]);
	const dateIssueOpened = reactive({
		day: '',
		month: '',
		year: '',
	});
	const { openToast } = useToast();

	const subCountyList = computed(() => {
		const county = countiesAndSubCounties.find(
			(c) => c.name === clientCounty.value,
		);
		return county ? county.sub_counties : [];
	});

	async function openNewIssue() {
		fetchRequestLoading.value = true;

		try {
			await $fetch('/api/v1/issues/open', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
				},
				body: JSON.stringify({
					issueTitle: issueTitle.value,
					openedByUserId: openedByUserId.value,
					clientName: clientName.value,
					clientLocation: {
						county: clientCounty.value,
						area: clientArea.value,
					},
					dateReported: `${dateIssueOpened.day}-${dateIssueOpened.month}-${dateIssueOpened.year}`,
					clientEmail: clientEmail.value,
					clientPhone: clientPhone.value,
					issueDescription: issueDescription.value,
					handlerUserIds: [
						primaryTechnician.value,
						otherTechnician.value,
					],
				}),
				async onResponse({ response }) {
					fetchRequestLoading.value = false;
					const responseData = response._data;
					if (response.status === 200) {
						openToast(responseData.message, 'info');
					} else if (response.status === 500) {
						openToast(responseData.message, 'warning');
					}
				},
			});
		} catch (error) {}
	}

	onMounted(async () => {
		try {
			await $fetch(`/api/v1/accounts/get-list?page=0&size=100`, {
				method: 'GET',
				headers: {
					Accept: 'application/json',
				},
				async onResponse({ response }) {
					for (let user in response._data.data) {
						appUsers.value.push(response._data.data[user]);
					}
				},
			});
		} catch (error) {}
	});
</script>
