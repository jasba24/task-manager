<template>
	<Header :links="links" />
	<section class="form__container">
		<task-form></task-form>
	</section>
</template>

<script>
import Header from "@/components/Header"
import TaskForm from "@/components/TaskForm"

export default {
	name: "Home",
	components: {
		Header,
		TaskForm,
	},

	data() {
		return {
			links: [
				{
					name: "tasks",
					href: "/tasks"
				},
				{
					name: "about",
					href: "/about"
				},
			],
		}
	},
}
</script>

<style lang="stylus" scoped>
.form__container
	display flex
	justify-content space-evenly
	align-items center
	width 100%
	height 70vh
</style>
