<template>
	<div class="page">
		<div class="header"></div>
		<aside class="aside">
			<ul>
				<li v-for="i in 10" :key="i"></li>
			</ul>
		</aside>
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
		"aside header"
		"aside content"
		"aside footer";
	background-color: #f0f2f5;
}

.page > * {
	background: #FFFFFF;
	padding: 20px;
}

.header {
	grid-area: header;
}

.aside {
	grid-area: aside;
}

.container {
	grid-area: content;
	margin: 16px;
	border-radius: 10px;
	box-shadow: 2px 2px 2px 2px rgba(4, 32, 24, 0.15), -2px -2px 2px 2px rgba(4, 32, 24, 0.15);
}

.footer {
	grid-area: footer;
}
</style>
