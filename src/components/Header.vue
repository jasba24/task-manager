<template>
	<img :src="logoTask" alt="" />
	<nav>
		<ul>
			<li v-for="l in links">
				<a :href="l.name">{{ l.name }}</a>
			</li>
		</ul>
	</nav>
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
img
	width 70px
</style>
