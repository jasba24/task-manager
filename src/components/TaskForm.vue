<template>
	<form>
		<label class="form__title">New Task</label>
		<div class="input__container">
			<input
				class="form__input"
				type="text"
				v-model="name"
				placeholder="Task Name"
			/>
			<input
				type="text"
				class="form__input"
				v-model="text"
				placeholder="Task Description"
			/>
			<input
				class="form__input"
				type="number"
				v-model="time"
				placeholder="Worked Hours"
			/>
		</div>
		<div class="btn__container">
			<button class="form__btn">Guardar</button>
			<button class="form__btn">Cancelar</button>
		</div>
	</form>
</template>

<script>
export default {
	name: "TaskForm",
}
</script>

<style scoped lang="stylus">
@import "../stylus/input.styl"
</style>
