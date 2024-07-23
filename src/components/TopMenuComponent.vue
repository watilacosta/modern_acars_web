<template>
	<el-menu
		:default-active="$route.path"
		:ellipsis="false"
		:router="true"
		class="el-menu"
		mode="horizontal"
		@select="handleSelect"
	>
		<el-menu-item index="">
			<el-text class="mx-1" size="large">Modern Acars</el-text>
		</el-menu-item>
		<el-menu-item index="/">Home</el-menu-item>
		<el-sub-menu index="2">
			<template #title>About Us</template>
			<el-menu-item index="/crews">Crews</el-menu-item>
			<el-menu-item index="/fleets">Fleets</el-menu-item>
			<el-menu-item index="/about">About</el-menu-item>
		</el-sub-menu>
		<div class="flex-grow" />
		<el-menu-item index="/register">Register</el-menu-item>
		<el-menu-item index="/member-area">Member Área</el-menu-item>
	</el-menu>
</template>

<script lang="ts" setup>
const handleSelect = (path: string, keyPath: string[]) => {
	console.log(path, keyPath)
}
</script>

<style>
.flex-grow {
	flex-grow: 1;
}
</style>