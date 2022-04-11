import { createStore } from "vuex";

export default createStore({
	state: {
		tasks: [],
	},
	getters: {
		returnTasks(state) {
			return state.tasks;
		},
	},
	mutations: {
		getTasks(state) {
			const savedTasks = localStorage.getItem("TaskBoard");
			if (savedTasks?.length > 0) {
				let saved = [...JSON.parse(savedTasks)];
				saved.forEach((item) => {
					state.tasks.push(item);
				});
			} else {
				console.log("got empty saved tasks");
				return (state.tasks = []);
			}
		},
		saveTasks(state) {
			localStorage.setItem("TaskBoard", JSON.stringify(state.tasks));
		},
		pushTask(state, payload) {
			console.log({ payload });
			state.tasks.push(payload);
			this.commit("saveTasks");
		},
	},
	actions: {},
	modules: {},
});
