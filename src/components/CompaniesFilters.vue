<template>
	<h2>Filters</h2>
	<div class="filters__container">
		<label for="name">
			Name
			<input v-model="filterObj.name" type="text">
		</label>
		<label for="rate">
			Rate
			<input v-model="filterObj.rate" type="number">
		</label>
		<label for="year">
			Year
			<input v-model="filterObj.year" type="number">
		</label>
		<label for="owner">
			Owner
			<input v-model="filterObj.owner" type="text">
		</label>
		<button @click="onClearFilters">Clear all filters</button>
	</div>
</template>

<script>
import { mapActions } from 'vuex';

	export default {
		name: "CompaniesFilters",
		data() {
			return {
				filterObj: {}
			}
		},

		watch: {
			filterObj: {
				handler(newFilterValue){
					this.updateFilterObj(newFilterValue)
				},
				deep:true
			}
		},
		methods: {
			...mapActions(['updateFilterObj']),

			onClearFilters(){
				this.filterObj={}
			}
		},
	}
</script>

<style lang="scss" scoped>
.filters__container{
	display: flex;
	gap: 20px;
	border-bottom: 1px solid #000;
	padding-bottom: 30px;
}

</style>