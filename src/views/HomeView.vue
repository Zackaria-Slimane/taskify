<template>
	<main>
		<main-board></main-board>
		<app-footer class="mt-5" />
	</main>
</template>

<script>
	// @ is an alias to /src
	import MainBoard from "@/components/MainBoard.vue";
	import AppFooter from "@/components/AppFooter.vue";

	export default {
		name: "HomeView",
		components: {
			MainBoard,
			AppFooter,
		},
	};
</script>
