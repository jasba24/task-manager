import { createRouter, createWebHistory } from "vue-router"
import Home from "@/views/Home"
import About from "@/views/About"
import Tasks from "@/views/Tasks"
import NotFound from "@/views/NotFound"

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/about",
		name: "About",
		component: About,
	},
	{
		path: "/tasks",
		name: "Tasks",
		component: Tasks,
	},
	{
		path: "/404",
		name: "NotFound",
		component: NotFound,
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router
