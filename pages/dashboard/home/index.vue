<template>
	<h1>Favorite Foods</h1>
	<draggable
		:onDragStart="
			() => {
				console.log('drag started');
			}
		"
		v-model="meals"
		tag="ul"
		group="meals">
		<template #item="{ element: meal }">
			<li class="bg-red-500 my-2">{{ meal }}</li>
		</template>
	</draggable>
	<h1>Other Meals</h1>
	<draggable
		v-model="otherMeals"
		tag="ul"
		group="meals"
		><template #item="{ element: meal }">
			<li class="bg-red-500 my-2">{{ meal }}</li>
		</template></draggable
	>
</template>

<script setup lang="ts">
	import draggable from 'vuedraggable';
	definePageMeta({
		name: 'issues-home',
		layout: 'dashboard-layout',
	});

	const meals = ref([
		'Hamburger',
		'Pizza',
		'Spaghetti',
		'Tacos',
		'Teriyaki Chicken',
	]);
	const otherMeals = ref(['Ugali', 'Rice', 'Meat', 'Fish', 'Masala Rice']);

	// array watchers
	watch(meals, (newMeals) => {
		console.log(newMeals);
	});
	watch(otherMeals, (newOtherMeals) => {
		console.log(newOtherMeals);
	});
</script>
