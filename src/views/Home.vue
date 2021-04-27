<template>
	<Header :links="links" />
	<task-form></task-form>
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
				},
				{
					name: "about",
				},
			],
		}
	},
}
</script>
