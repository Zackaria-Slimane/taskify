import { createStore } from "vuex";

export default createStore({
	state: {
		tasks: [
			{
				id: 0,
				categoty: "todo",
				title: "Learning Vuejs",
				description:
					"Almost done with it, just authentification part left and composition api",
			},
			{
				id: 1,
				categoty: "todo",
				title: "Practicing Vue JS",
				description: "Building trello clone",
			},
			{
				id: 2,
				categoty: "backlog",
				title: "Practicing Vue JS",
				description: "Connecting to a database and using transitions and animations",
			},
		],
	},
	getters: {},
	mutations: {
		pushTask(state, payload) {
			state.tasks.push(payload);
		},
	},
	actions: {},
	modules: {},
});
