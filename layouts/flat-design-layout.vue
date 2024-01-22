<template>
	<main class="h-screen max-w-full">
		<nav class="shadow-md px-2 lg:px-56 py-2 h-20 flex items-center">
			<h1 class="text-2xl lg:text-3xl font-bold">Poa Internet</h1>
		</nav>
		<div
			class="flex items-center justify-center dark:bg-slate-900 dark:text-white h-full">
			<slot />
		</div>
	</main>
</template>
