<template>
	<div class="editor">
		<label for="name">
			Name
			<input v-model="currentCompany.name" type="text">
		</label>
		<label for="rate">
			Rate
			<input v-model="currentCompany.rate" type="number">
		</label>
		<label for="year">
			Year
			<input v-model="currentCompany.year" type="number">
		</label> 
		<label for="owner">
			Owner
			<input v-model="currentCompany.owner" type="text">
		</label>

		<button @click="updateCompany(currentCompany)">Save</button>
	</div>

</template>

<script>
import {mapGetters, mapActions } from 'vuex';

	export default {
		name: 'EditingModeEditor',
		props: {
			companyId: {
				type: String,
				default: ''
			},
		},
		computed: {
			...mapGetters(['getCompanyById']),

			currentCompany() {
				return this.getCompanyById(this.companyId)
			},
		},

		methods: {
			...mapActions(['onUpdateCompany']),

			updateCompany(companyData) {
				this.onUpdateCompany(companyData);
				this.$router.push({
					name: 'home'
				})
			}
		},
						
	}
</script>

<style lang="scss" scoped>

</style>