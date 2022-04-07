<template>
	<div class="bg-grayblue rounded-lg min-h-screen overflow-y-scroll">
		<h3
			:id="title"
			class="flex justify-between font-poppins font-bold text-indigo-300 p-5 hover:text-indigo-900 border-b-4 border-indigo-300"
		>
			{{ title }}
			<div class="text-mainblue">
				<button @click="openModal">
					<i class="fa-light fa-pen-field"> </i>
				</button>
			</div>
		</h3>
		<slot></slot>
		<app-modal class="p-5 container" @close="hideDialog" :openDialog="dialogIsVisible">
			<div class="p-1">
				<label
					for="title"
					class="block mb-2 text-sm font-medium text-mainblue dark:text-gray-300"
					>New Card
				</label>
				<input
					type="text"
					name="title"
					ref="title"
					class="mt-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
					placeholder="New Card title"
					required
				/>
				<textarea
					type="textarea"
					name="description"
					rows="5"
					ref="descirption"
					class="mt-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
					placeholder="New Card description"
					required="true"
				/>
				<button
					@click="addTask"
					class="place-self-end text-center mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700"
				>
					Save
				</button>
			</div></app-modal
		>
	</div>
</template>

<script>
	import AppModal from "./AppModal.vue";
	export default {
		name: "TaskColumn",
		components: {
			AppModal,
		},
		data() {
			return {
				dialogIsVisible: false,
				titleHeader: "",
				tasks: [],
			};
		},
		methods: {
			openModal() {
				console.log("modal clicked", this.dialogIsVisible);
				this.dialogIsVisible = true;
			},
			showDialog() {
				this.dialogIsVisible = true;
			},
			hideDialog() {
				this.dialogIsVisible = false;
			},

			addTask() {
				console.log("addTask", this.$refs.title.value, this.$refs.descirption.value);
				let newTask = {
					title: this.$refs.title.value,
					description: this.$refs.descirption.value,
					id: this.$store.state.tasks.length + 2,
				};

				this.$store.commit("pushTask", newTask);

				this.hideDialog();
			},
		},
		props: {
			title: {
				type: String,
				default: "New category",
			},
		},
	};
</script>
