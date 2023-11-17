<template>
	<div class="editor">
		<label>
			Name<span class="required">*</span>
			<input v-model="newCompany.name" type="text">
		</label>
		<label>
			Rate<span class="required">*</span>
			<input v-model="newCompany.rate" type="number">
		</label>
		<label>
			Year<span class="required">*</span>
			<input v-model="newCompany.year" type="number">
		</label> 
		<label >
			Owner<span class="required">*</span>
			<input v-model="newCompany.owner" type="text">
		</label>
		<button :disabled="isCreateBtnDisabled" @click="createCompany" >Create</button>
		</div>
</template>

<script>
import { mapActions } from 'vuex'
	export default {
		name: 'CreatingModeEditor',

		data() {
			return {
				newCompany: {},
			}
		},
		computed: {
			isCreateBtnDisabled() {
				let {name, rate, year, owner} = this.newCompany;
				return !name || !rate || !year || !owner
			}
		},
		methods: {
			...mapActions(['onAddNewCompany']),
			
			createCompany(){
				this.onAddNewCompany({
					id: new Date().getTime(),
					...this.newCompany
				});
				this.$router.push({
					name: 'home'
				})
			},
		},
	}
</script>

<style lang="scss" scoped>
.error-message, .required{
	color:red;
}


</style>