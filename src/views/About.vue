<template>
	<Header :links="links" />
</template>

<script>
import Header from "@/components/Header"
export default {
	name: "About",

	components: {
		Header,
	},

	data() {
		return {
			links: [
				{
					name: "Home",
					href: "/",
				},
				{
					name: "tasks",
					href: "/tasks",
				},
			],
		}
	},
}
</script>
