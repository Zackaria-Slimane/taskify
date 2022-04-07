<template>
	<div
		class="grid auto-rows-auto md:grid-flow-col md:auto-cols-fr mx-5 p-4 py-5 gap-4 overflow-x-auto"
	>
		<task-column title="Backlog">
			<task-card class="p-3 my-3">
				<template #header> Learning VueJS</template>
				<template #paragraph> I am currently learning vue js </template>
			</task-card>
			<task-card class="p-3 my-3">
				<template #header> Learning NuxtJS</template>
				<template #description>Nuxt JS is the go to for SSR </template>
			</task-card>
			<task-card class="p-3 my-3">
				<template #header> Learning VueJS</template>
				<template #paragraph> I am currently learning vue js </template>
			</task-card>
			<task-card class="p-3 my-3">
				<template #header> Learning VueJS</template>
				<template #paragraph> I am currently learning vue js </template>
			</task-card>
		</task-column>

		<task-column title="To do">
			<task-card class="p-3 my-3" v-for="task in TaskCards" :key="task.id">
				<template #header> {{ task.title }}</template>
				<template #description> {{ task.description }}</template>
			</task-card>
		</task-column>

		<task-column title="In progress">
			<task-card class="p-3 my-3">
				<template #header> Learning Nuxt JS</template>
				<template #paragraph> I am currently learning vue js </template>
			</task-card>
		</task-column>

		<task-column title="Done">
			<task-card class="p-3 my-3">
				<template #header> Learning PHP </template>
				<template #paragraph> I am currently learning PHP </template>
			</task-card>
		</task-column>
		<task-column title="Stats"></task-column>
	</div>
</template>

<script>
	import TaskColumn from "./TaskColumn.vue";
	import TaskCard from "./TaskCard.vue";

	export default {
		name: "MainBoard",
		components: {
			TaskColumn,
			TaskCard,
		},
		data() {
			return {
				TaskCards: this.$store.state.tasks,
			};
		},
	};
</script>
