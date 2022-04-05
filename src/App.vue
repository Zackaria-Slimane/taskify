<template>
	<main>
		<app-header class="mb-5" />
		<main-board></main-board>
	</main>
</template>

<script>
	import AppHeader from "./components/AppHeader.vue";
	import MainBoard from "./components/MainBoard.vue";

	export default {
		name: "App",
		components: {
			AppHeader,
			MainBoard,
		},
	};
</script>
