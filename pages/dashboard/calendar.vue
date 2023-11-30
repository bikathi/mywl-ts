<template>
	<main>
		<div class="flex space-x-6">
			<div class="w-1/2 p-4">
				<h1 class="text-2xl font-bold mt-4 mb-2">
					Calendar At a Glance
				</h1>
				<client-only>
					<VDatePicker
						v-model="date"
						:attributes="attrs"
						expanded
						:is-dark="true" />
				</client-only>
			</div>
			<div class="w-1/2 p-4">
				<h1 class="text-2xl font-bold mt-4 mb-2">Upcoming Events</h1>
			</div>
		</div>
		<div></div>
	</main>
</template>

<script setup lang="ts">
	definePageMeta({
		name: 'user-calendar',
		layout: 'dashboard-layout',
	});

	const date: Ref<Date> = ref(new Date());
	const attrs = ref([
		{
			key: 'today',
			highlight: {
				color: 'rgb(30 64 175)',
				fillMode: 'solid',
			},
			dates: new Date(),
		},
	]);
</script>
