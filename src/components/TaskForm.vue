<template>
	<form>
		<label class="form__title">New Task</label>
		<div class="input__container">
			<input class="form__input" type="text" placeholder="Task Name" />
			<input class="form__input" type="number" placeholder="Worked Hours" />
		</div>
		<div class="btn__container">
			<button @click.prevent="getData" class="form__btn">
				Guardar
			</button>
			<button class="form__btn">Cancelar</button>
		</div>
	</form>
</template>

<script>
export default {
	name: "TaskForm",

	data() {
		return {
			data: {},
		}
	},

	methods: {
		getData() {
			const inputText = document.querySelector("input[type=text]")
			const inputTime = document.querySelector("input[type=number]")
			this.data.name = inputText.value
			this.data.time = inputTime.value

			this.$emit("taskData", this.data)
		},
	},
}
</script>

<style scoped lang="stylus">
@import "../stylus/input.styl"
</style>
