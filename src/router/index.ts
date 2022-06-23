import {createRouter, createWebHistory} from "vue-router";

const routes = [
	{path: '/index', component: () => import('../views/Index.vue'), alias: '/'},
	{path: '/login', component: () => import('../views/Login.vue')},
]

export const router = createRouter({
	// todo this maybe have error
	history: createWebHistory(),
	routes,
})
