<template>
	<Header :links="links" />
	<section class="form__container">
		<task-form @taskData="getTaskData"></task-form>
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
			name: "",
			links: [
				{
					name: "tasks",
					href: "/tasks",
				},
				{
					name: "about",
					href: "/about",
				},
			],

			data: {},
		}
	},

	methods: {
		getTaskData(data) {
			this.data = data
		},
	},
}
</script>

<style lang="stylus" scoped>
.form__container
	display flex
	justify-content space-evenly
	align-items center
	width 100%
	height 69.5vh
</style>
