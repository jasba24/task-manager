<template>
	<Header :logoTask="logoTask" :links="links" />
</template>

<script>
import logoTask from "@/assets/logoTask.png"
import Header from "@/components/Header"

export default {
	name: "Home",
	components: {
		Header,
	},

	data() {
		return {
			logoTask,
			links: [
				{
					name: "tasks",
				},
				{
					name: "about"
				},
			],
		}
	},
}
</script>

<style></style>
