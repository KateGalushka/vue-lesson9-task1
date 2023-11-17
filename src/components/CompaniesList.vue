<template>
	<div class="list">
		<h2 v-if="isListEmpty">No company suits your filters</h2>
		<h1 v-else>Companies List</h1>
		<company-item 
			v-for="company in getFilteredList"
			:key="company.id"
			:company-obj="company"
		/>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex';
	import CompanyItem from './CompanyItem.vue';

	export default {
    name: "CompaniesList",
    components: { CompanyItem },

	 computed: {
		...mapGetters(['getFilteredList']),

		isListEmpty(){
			return !this.getFilteredList.length;
		}
	 },
	 
}
</script>

<style lang="scss" scoped>
.list{
	display: flex;
	flex-direction: column;
	margin-bottom: 30px;
}
</style>