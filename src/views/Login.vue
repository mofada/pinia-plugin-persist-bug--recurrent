<template>
	<form @submit="login">
		<input name="name" v-model="name">
		<input name="account" v-model="name">
		<button type="submit">login</button>
	</form>
</template>

<script lang="ts" setup>
import {ref} from "vue";

// form params
const name = ref()
const account = ref()

function login(){
	console.log(name.value, account.value)
}
</script>
<script lang="ts">
export default {
	name: "Login"
}
</script>

<style scoped>

</style>
