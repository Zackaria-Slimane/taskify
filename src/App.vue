<template>
	<main>
		<app-header class="mb-5" />
		<main-board></main-board>
		<app-footer class="mt-5" />
	</main>
</template>

<script>
	import AppHeader from "./components/AppHeader.vue";
	import MainBoard from "./components/MainBoard.vue";
	import AppFooter from "./components/AppFooter.vue";

	export default {
		name: "App",
		components: {
			AppHeader,
			MainBoard,
			AppFooter,
		},
	};
</script>
