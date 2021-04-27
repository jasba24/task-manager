<template>
	<form>
		<label>New Task</label>
		<input type="text" v-model="name" placeholder="Task Name" />
		<input type="number" v-model="name" placeholder="Worked Hours" />
		<button>Guardar</button>
		<button>Cancelar</button>
	</form>
</template>

<script>
export default {
	name: "TaskForm",
}
</script>

<style scoped lang="stylus"></style>
