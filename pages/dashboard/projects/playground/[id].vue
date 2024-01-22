<template>
	<div class="min-h-full">
		<div
			class="py-2 flex flex-col md:flex-row items-start md:items-center space-y-1 md:space-y-0 justify-between">
			<h1 class="text-3xl">Example Project Title</h1>
			<div class="space-x-1">
				<button
					type="button"
					class="py-2 rounded-full px-2 inline-flex items-center gap-x-2 text-sm font-semibold border border-transparent bg-blue-600 text-white hover:bg-blue-700"
					@click="addNewStage">
					Add Stage
					<Icon
						name="cil:plus"
						color="currentColor"
						size="20" />
				</button>
				<button
					type="button"
					class="py-2 rounded-full px-2 inline-flex items-center gap-x-2 text-sm font-semibold border border-transparent bg-blue-600 text-white hover:bg-blue-700"
					data-hs-overlay="#hs-basic-modal">
					Settings
					<Icon
						name="material-symbols:settings"
						color="currentColor"
						size="20" />
				</button>
			</div>
		</div>
		<div
			class="py-2 rounded-md flex min-w-full overflow-x-auto space-x-4"
			ref="scrollableStagesContainer"
			id="scrollableDiv">
			<ProjectStage
				v-for="(stage, index) in testArray"
				:title="stage.title"
				:tasks="stage.nestedArray"
				:key="index" />
		</div>

		<!-- start of project settings modal -->
		<ProjectSettingsModal />
		<!-- end of project settings modal -->
	</div>
</template>

<script setup lang="ts">
	definePageMeta({
		name: 'project-playground',
		layout: 'dashboard-layout',
	});
	const scrollableStagesContainer = ref<HTMLElement | null>(null);
	const testArray: Ref<object[]> = ref([
		{
			id: 1,
			title: 'Gxqjiopg',
			nestedArray: [
				{ id: 38, title: 'Wiohdxzl' },
				{ id: 61, title: 'Sdvqefmn' },
				{ id: 77, title: 'Yqcrkpqb' },
			],
		},
		{
			id: 2,
			title: 'Rdqvqjfh',
			nestedArray: [
				{ id: 72, title: 'Hcqwvjrv' },
				{ id: 58, title: 'Vqyzxlyh' },
				{ id: 25, title: 'Vjvwzqpq' },
			],
		},
		{
			id: 3,
			title: 'Ztbgklyi',
			nestedArray: [
				{ id: 82, title: 'Hxbqywtw' },
				{ id: 19, title: 'Kfhqvqxb' },
				{ id: 52, title: 'Qklyhsqh' },
			],
		},
		{
			id: 4,
			title: 'Qfwlzuxa',
			nestedArray: [
				{ id: 44, title: 'Uqnzjmxp' },
				{ id: 95, title: 'Rpqxjqkb' },
				{ id: 8, title: 'Pqybzxly' },
			],
		},
		{
			id: 5,
			title: 'Jxfwdzqt',
			nestedArray: [
				{ id: 91, title: 'Zqhqjxqm' },
				{ id: 30, title: 'Zdvkqlqp' },
				{ id: 50, title: 'Ylxjwryw' },
			],
		},
	]);

	onMounted(() => {
		scrollableStagesContainer.value =
			document.getElementById('scrollableDiv');
	});

	function addNewStage(): void {
		testArray.value.push({
			id: 6,
			title: 'Bxdhjbnw',
			nestedArray: [
				{ id: 94, title: 'Zqhqjxqm' },
				{ id: 38, title: 'Zdvkqlqp' },
				{ id: 71, title: 'Ylxjwryw' },
			],
		});

		// TODO: autoscroll to the end of the container
		if (scrollableStagesContainer.value) {
			scrollableStagesContainer.value.scrollLeft =
				scrollableStagesContainer.value.scrollWidth;
		}
	}
</script>

<style scoped>
	/* unhide scrollbar for Chrome, Safari and Opera */
	::-webkit-scrollbar {
		display: initial;
	}

	/* uhide scrollbar for IE, Edge and Firefox */
	.no-scrollbar {
		-ms-overflow-style: initial; /* IE and Edge */
		scrollbar-width: initial; /* Firefox */
	}
</style>
