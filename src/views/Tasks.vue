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
					text:
						"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum ratione incidunt ipsum eius voluptatibus perferendis explicabo itaque iste nemo amet repellat temporibus, totam doloremque mollitia maxime cum debitis aut autem.",
					title: "1 Tasks",
					time: 1,
				},
				{
					text:
						"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum ratione incidunt ipsum eius voluptatibus perferendis explicabo itaque iste nemo amet repellat temporibus, totam doloremque mollitia maxime cum debitis aut autem.",
					title: "1 Tasks",
					time: 1,
				},
				{
					text:
						"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum ratione incidunt ipsum eius voluptatibus perferendis explicabo itaque iste nemo amet repellat temporibus, totam doloremque mollitia maxime cum debitis aut autem.",
					title: "1 Tasks",
					time: 1,
				},
								{
					text:
						"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum ratione incidunt ipsum eius voluptatibus perferendis explicabo itaque iste nemo amet repellat temporibus, totam doloremque mollitia maxime cum debitis aut autem.",
					title: "1 Tasks",
					time: 1,
				},
			],
		}
	},
}
</script>
