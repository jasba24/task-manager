<template>
	<footer>
		<p>
			Task Manager make using <img :src="logo" /> by
			<a href="https://twitter.com/jasba24">@jasba24</a>
		</p>
	</footer>
</template>

<script>
export default {
	name: "Footer",

	props: {
		logo: String,
	},
}
</script>

<style scoped lang="stylus">
@import "../stylus/footer.styl"
</style>
