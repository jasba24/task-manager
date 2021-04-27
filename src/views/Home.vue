<template>
	<Header :logoTask="logoTask" />
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
					name: "Tasks",
				},
			],
		}
	},
}
</script>

<style></style>
