<template>
	<div class="text-center p-5">
		<ul>
			<li>
				<span
					class="my-5 inline-block rounded-full text-white bg-gray-400 px-2 py-1 text-sm font-bold mr-3"
					>In backlog : <span class="mx-3"> {{ backLogs }}</span></span
				>
			</li>
			<li>
				<span
					class="my-5 inline-block rounded-full text-white bg-amber px-2 py-1 text-sm font-bold mr-3"
					>In Todo list : <span class="mx-3"> {{ todos }}</span></span
				>
			</li>
			<li>
				<span
					class="my-5 inline-block rounded-full text-white bg-cyan px-2 py-1 text-sm font-bold mr-3"
					>Work in progress : <span class="mx-3"> {{ inProgress }}</span></span
				>
			</li>
			<li>
				<span
					class="my-5 inline-block rounded-full text-white bg-lime px-2 py-1 text-sm font-bold mr-3"
					>And you actually finished : <span class="mx-3"> {{ Dones }}</span></span
				>
			</li>
		</ul>
	</div>
</template>
<script>
	export default {
		name: "TaskStats",
		data() {
			return {
				tasks: this.$store.state.tasks ?? [],
			};
		},
		computed: {
			backLogs() {
				return this.tasks.filter((task) => task.parent == "Backlog").length;
			},
			todos() {
				return this.tasks.filter((task) => task.parent == "Todo").length;
			},
			inProgress() {
				return this.tasks.filter((task) => task.parent == "In progress").length;
			},
			Dones() {
				return this.tasks.filter((task) => task.parent == "Done").length;
			},
		},
	};
</script>
