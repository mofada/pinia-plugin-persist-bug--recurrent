<template>
	<div class="page">
		<div class="header"></div>
		<aside class="aside"></aside>
		<div class="container"></div>
		<div class="footer"></div>
	</div>
</template>

<script lang="ts" setup>

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
		"header header"
		"aside content"
		"footer footer";
}

.page > div {
	background-color: #f0f2f5;
	border-radius: 10px;
	box-shadow: 0 5px 15px 3px rgba(4, 32, 24, 0.15);
	padding: 20px;
}

.header{
	grid-area: header;
}

.aside{
	grid-area: aside;
}

.container{
	grid-area: content;
}

.footer{
	grid-area: footer;
}
</style>
