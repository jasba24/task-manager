<template>
	<header>
		<div>
			<router-link to="/"><img src="../assets/logoTask.png" alt=""/></router-link>
			<h1>Task Manager</h1>
		</div>
		<nav>
			<ul>
				<li v-for="l in links">
					<router-link :to="l.name">{{ l.name }}</router-link>
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
