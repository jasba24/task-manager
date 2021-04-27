<template>
	<Footer :logo="logo" />
</template>

<script>
import logo from "./assets/logo.png"
import Footer from "@/components/Footer"
import Header from "@/components/Header"

export default {
	name: "App",
	components: {
		Footer,
		Header,
	},

	data() {
		return {
			logo,
		}
	},
}
</script>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
