import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginVue.vue";

const routes = [
	{
		path: "/",
		name: "home",
		component: HomeView,
	},
	{
		path: "/login",
		name: "Login",
		component: LoginView,
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
