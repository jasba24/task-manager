<template>
	<router-view></router-view>
	<Footer :logo="logo" />
</template>

<script>
import logo from "@/assets/logo.png"
import Footer from "@/components/Footer"

export default {
	name: "App",

	components: {
		Footer,
	},

	data() {
		return { logo }
	},
}
</script>

<style lang="stylus">
*
	box-sizing border-box

html
	font-size 62.5%

#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
body
	margin 0
</style>
