<template>
	<Header :links="links" />
	<task-stack />
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
				},
				{
					name: "about",
				},
			],
		}
	},
}
</script>
