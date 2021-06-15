<template>
	<Header :links="links" />
	<task-stack :tasks="tasks" />
</template>

<script>
import Header from "@/components/Header"
import TaskStack from "@/components/TaskStack"

export default {
	components: {
		Header,
		TaskStack,
	},

	data() {
		return {
			links: [
				{
					name: "home",
					href: "/",
				},
				{
					name: "about",
					href: "/about",
				},
			],
			tasks: [
				{
					title: "1 Tasks",
					time: 1,
				},
				{
					title: "1 Tasks",
					time: 1,
				},
				{
					title: "1 Tasks",
					time: 1,
				},
				{
					title: "1 Tasks",
					time: 1,
				},
			],
		}
	},
}
</script>
