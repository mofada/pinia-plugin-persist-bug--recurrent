<template>
	<div class="page">
		<div class="logo">Vite.</div>
		<div class="header">
			<div class="name">welcome {{ userStore.name }}</div>
			<div class="action" @click="loginOut">Login Out</div>
		</div>
		<aside class="aside">

		</aside>
		<div class="container">
			<div class="card">1.click right top 'login out' button</div>
			<div class="card">2.in login page, input 'email' and 'name'.</div>
			<div class="card">3.click 'login' button, go here (main page)</div>
			<div class="card">4.refresh page(F5)</div>
			<div class="card">5.look right top, 'welcome ${name}', name will dispose</div>
			<div class="card"></div>
			<div class="card"></div>
			<div class="card"></div>
			<div class="card"></div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import {useUserStore} from "../store/user";
import {useRouter} from "vue-router";

let userStore = useUserStore();

let router = useRouter();

function loginOut() {
	userStore.$reset();
	router.replace('/login');
}
</script>
<script lang="ts">
export default {
	name: "Index"
}
</script>

<style scoped>
.page {
	height: 100vh;
	width: 100vw;
	display: grid;
	grid-template-columns: 250px 1fr;
	grid-template-rows: 80px 1fr 80px;
	grid-template-areas:
		"logo header"
		"aside content"
		"aside content";
}

/**
 * header
 */
.header {
	padding: 20px;
	grid-area: header;
	display: flex;
	align-items: center;
	justify-content: flex-end;
}

.header .name {
	font-size: 20px;
	color: #666666;
	margin-right: 20px;
}

.header .action {
	color: #fff;
	background: #ff5a5f;
	padding: 5px 10px;
	border-radius: 5px;
	cursor: pointer;
}

/**
 * aside
 */
.aside {
	grid-area: aside;
	background: #ffffff;
}

.logo {
	grid-area: logo;
	background: #ffffff;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 50px;
	font-weight: bold;
}


/**
 * content
 */
.container {
	grid-area: content;
	margin: 16px;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(300px, auto));
	grid-template-rows: max-content;
}

.card {
	background: #ffffff;
	border-radius: 10px;
	padding: 20px;
	margin: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	aspect-ratio: 16/9;
}
</style>
