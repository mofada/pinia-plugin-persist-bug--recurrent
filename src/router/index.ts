import {createRouter, createWebHistory} from "vue-router";

const routes = [
	{path: '/', component: () => import('../views/Index.vue')},
	{path: '/login', component: () => import('../views/Login.vue')},
]

export const router = createRouter({
	// todo this maybe have error
	history: createWebHistory(),
	routes,
})
