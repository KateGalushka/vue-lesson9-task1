<template>
	<h2>Filters</h2>
	<div class="filters__container">
		<label for="name">
			Name
			<input v-model="currentNameFilter" type="text">
		</label>
		<label for="rate">
			Rate
			<input v-model="currentRateFilter" type="number">
		</label>
		<label for="year">
			Year
			<input v-model="currentYearFilter" type="number">
		</label>
		<label for="owner">
			Owner
			<input v-model="currentOwnerFilter" type="text">
		</label>
		<button @click="onClearFilters">Clear all filters</button>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

	export default {
		name: "CompaniesFilters",

		computed: {
			...mapGetters(['nameFilterVal', 'rateFilterVal', 'yearFilterVal', 'ownerFilterVal']),

			currentNameFilter: {
				get(){
					return this.nameFilterVal
				},
				set(val){
					this.updateNameFilter(val);
				}
			},
			currentRateFilter:{
				get(){
					return this.rateFilterVal;
				},
				set(val){
					this.updateRateFilter(val);
				}
			},
			currentYearFilter:{
				get(){
					return this.yearFilterVal;
				},
				set(val){
					this.updateYearFilter(val);
				}
			},
			currentOwnerFilter:{
				get(){
					return this.ownerFilterVal;
				},
				set(val){
					this.updateOwnerFilter(val);
				}
			}
		},
		methods: {
			...mapActions(['updateNameFilter', 'updateRateFilter', 'updateYearFilter', 'updateOwnerFilter', 'onClearFilters'])
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