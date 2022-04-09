<template>
	<div
		class="grid auto-rows-auto md:grid-flow-col md:auto-cols-fr mx-5 p-4 py-5 gap-4 overflow-x-auto"
	>
		<task-column
			title="Backlog"
			@drop="onDrop($event, 'Backlog')"
			@dragover.prevent
			@dragenter.prevent
		>
			<transition-group name="tasks">
				<task-card
					class="p-3 my-3"
					v-for="task in backLogs"
					:key="task.id"
					draggable="true"
					@dragstart="startDrag($event, task)"
				>
					<template #header> {{ task.title }}</template>
					<template #description> {{ task.description }}</template>
				</task-card>
			</transition-group>
		</task-column>

		<task-column
			title="Todo"
			@drop="onDrop($event, 'Todo')"
			@dragover.prevent
			@dragenter.prevent
		>
			<task-card
				class="p-3 my-3"
				v-for="task in todos"
				:key="task.id"
				draggable="true"
				@dragstart="startDrag($event, task)"
			>
				<template #header> {{ task.title }}</template>
				<template #description> {{ task.description }}</template>
			</task-card>
		</task-column>

		<task-column
			title="In progress"
			@drop="onDrop($event, 'In progress')"
			@dragover.prevent
			@dragenter.prevent
		>
			<task-card
				class="p-3 my-3"
				v-for="task in inProgress"
				:key="task.id"
				draggable="true"
				@dragstart="startDrag($event, task)"
			>
				<template #header> {{ task.title }}</template>
				<template #description> {{ task.description }}</template>
			</task-card>
		</task-column>

		<task-column
			title="Done"
			@drop="onDrop($event, 'Done')"
			@dragover.prevent
			@dragenter.prevent
		>
			<task-card
				class="p-3 my-3"
				v-for="task in Dones"
				:key="task.id"
				draggable="true"
				@dragstart="startDrag($event, task)"
			>
				<template #header> {{ task.title }}</template>
				<template #description> {{ task.description }}</template>
			</task-card>
		</task-column>

		<task-column class="bg-white" title="Stats">
			<task-stats></task-stats>
		</task-column>
	</div>
</template>

<script>
	import TaskColumn from "./TaskColumn.vue";
	import TaskCard from "./TaskCard.vue";
	import TaskStats from "./TaskStats.vue";

	export default {
		name: "MainBoard",
		components: {
			TaskColumn,
			TaskCard,
			TaskStats,
		},

		beforeMount() {
			this.$store.commit("getTasks");
		},
		mounted() {
			let _parent = document.querySelector("#Stats");
			_parent.children[0].remove();
			_parent.classList.replace("justify-between", "justify-center");
			_parent.classList.replace("text-indigo-300", "text-indigo-500");
			_parent.parentElement.classList.remove("bg-grayblue");
		},

		data() {
			return {
				tasks: this.$store.state.tasks,
			};
		},

		computed: {
			backLogs() {
				return this.tasks.filter((task) => task.parent == "Backlog");
			},
			todos() {
				return this.tasks.filter((task) => task.parent == "Todo");
			},
			inProgress() {
				return this.tasks.filter((task) => task.parent == "In progress");
			},
			Dones() {
				return this.tasks.filter((task) => task.parent == "Done");
			},
		},
		methods: {
			startDrag(evt, task) {
				evt.dataTransfer.dropEffect = "move";
				evt.dataTransfer.effectAllowed = "move";
				evt.dataTransfer.setData("DRAGID", task.id);
			},
			onDrop(evt, parent) {
				const taskID = evt.dataTransfer.getData("DRAGID");
				const task = this.tasks.find((task) => task.id == taskID);
				console.log({ taskID, parent, task });
				task.parent = parent;
				this.$store.commit("saveTasks");
			},
		},
	};
</script>

<style>
	.tasks-enter-from {
		opacity: 0;
		transform: translateX(-30px);
	}

	.tasks-enter-active {
		transition: all 1s ease-out;
	}

	.tasks-enter-to,
	.tasks-leave-from {
		opacity: 1;
		transform: translateX(0);
	}

	.tasks-leave-active {
		transition: all 1s ease-in;
		position: absolute;
	}

	.tasks-leave-to {
		opacity: 0;
		transform: translateX(30px);
	}
</style>
