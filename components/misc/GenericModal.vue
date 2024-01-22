<template>
	<div
		id="hs-basic-modal"
		class="hs-overlay hidden w-full h-full fixed top-0 start-0 z-[60] overflow-x-hidden overflow-y-auto pointer-events-none">
		<div
			class="hs-overlay-open:mt-0 py-2 h-full hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all md:max-w-2xl md:w-full mx-3 md:mx-auto">
			<slot />
		</div>
	</div>
</template>
