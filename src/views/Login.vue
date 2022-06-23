<template>
	<div class="page">
		<div class="banner"></div>
		<div class="form-info">
				<div class="title">WELCOME</div>
				<input v-model="email" name="email" placeholder="please input email" type="email">
				<input v-model="name" name="name" placeholder="please input name">
				<button @click.stop="login">login</button>
		</div>
	</div>
</template>

<script lang="ts" setup>
import {ref} from "vue";
import {useUserStore, IUserInfo} from "../store/user";
import {useRouter} from "vue-router";

let userStore = useUserStore();

// form params
const email = ref(userStore.email)
const name = ref(userStore.name)

let router = useRouter();

/**
 * login
 */
function login() {
	const userInfo: IUserInfo = {
		email: email.value,
		name: name.value,
		password: '',
	}
	userStore.setUserInfo(userInfo);
	router.push('/index');
}
</script>
<script lang="ts">
export default {
	name: "Login"
}
</script>

<style scoped>
.page {
	height: 100vh;
	width: 100vw;
	display: flex;
}

.banner {
	flex: 3 1 auto;
}

/**
* form container
 */
.form-info {
	flex: 1 1 auto;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	background: #ffffff;
}

.form-info .title {
	font-size: 30px;
	font-weight: 700;
	margin-bottom: 30px;
}

.form-info input {
	width: 300px;
	margin-top: 16px;
	border: 1px solid #d1d1d1;
	border-radius: 5px;
	padding: 5px 10px;
	height: 40px;
	box-sizing: border-box;
}

.form-info button {
	width: 300px;
	height: 40px;
	border: none;
	border-radius: 5px;
	background: #ff5a5f;
	color: #fff;
	font-size: 14px;
	font-weight: 700;
	cursor: pointer;
	margin-top: 30px;
}
</style>
