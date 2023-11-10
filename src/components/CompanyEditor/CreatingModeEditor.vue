<template>
	<div class="editor">
		<label>
			Name<span class="required">*</span>
			<input v-model="compName" type="text">
		</label>
		<label>
			Rate<span class="required">*</span>
			<input v-model="compRate" type="number">
		</label>
		<label>
			Year<span class="required">*</span>
			<input v-model="compYear" type="number">
		</label> 
		<label >
			Owner<span class="required">*</span>
			<input v-model="compOwner" type="text">
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
				compName: null,
				compRate: null,
				compYear: null,
				compOwner: null,
				newCompany: {},
			}
		},
		computed: {
			isCreateBtnDisabled() {
				return !this.compName || !this.compRate || !this.compYear || !this.compOwner
			}
		},
		methods: {
			...mapActions(['onAddNewCompany']),
			
			createCompany(){
				this.newCompany = {
					id: new Date().getTime(),
					name: this.compName,
					rate: this.compRate,
					year: this.compYear,
					owner: this.compOwner
				};
				this.onAddNewCompany(this.newCompany);
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