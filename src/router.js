import { createRouter, createWebHashHistory } from "vue-router"
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
		path: "/",
		name: "About",
		component: About,
	},
	{
		path: "/",
		name: "Tasks",
		component: Tasks,
	},
	{
		path: "/",
		name: "NotFound",
		component: NotFound,
	},
]

const router = createRouter({
	history: createWebHashHistory(),
	routes,
})

export default router
