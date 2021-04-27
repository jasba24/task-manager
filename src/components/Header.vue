<template>
	<header>
		<div>
			<img :src="logoTask" alt="" />
			<h1>Task Manager</h1>
		</div>
		<nav>
			<ul>
				<li v-for="l in links">
					<a :href="l.name">{{ l.name }}</a>
				</li>
			</ul>
		</nav>
	</header>
</template>

<script>
export default {
	name: "Header",

	props: {
		logoTask: String,
		links: Array,
	},
}
</script>

<style scoped lang="stylus">
@import "../stylus/header.styl"
</style>
