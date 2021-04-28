<template>
	<section class="card">
		<card class="card__container" v-for="task in tasks">
			<h1 class="card__title">{{task.title}}</h1>
			<article class="card__content">{{task.text}}</article>
			<p class="card__time">{{task.time}} Hours</p>
			</card>
	</section>
</template>

<script>
export default {
	name: "TaskStack",

	props: {
		tasks: Array,
	},
}
</script>

<style scoped lang="stylus">
@import "../stylus/tasks.styl"
</style>
