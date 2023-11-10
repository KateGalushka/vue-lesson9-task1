<template>
	<companies-filters/>
	<companies-list/>
	<button @click="callEditor">Create a company</button>
</template>

<script>
import CompaniesFilters from './CompaniesFilters.vue';
import CompaniesList from './CompaniesList.vue';

	export default {
		name: "CompaniesManager",
		components: {
			CompaniesFilters, CompaniesList
		},
		methods: {
			callEditor() {
				this.$router.push({
					name:'CompanyEditor'
				})
			}
		},
		
	}
</script>

<style lang="scss" scoped>
button{
	font-size: 16px;
	padding: 10px 15px;
	background-color: rgb(117, 154, 197);
	color: #fff;
	border-radius: 5px;
	cursor: pointer;
	&:hover{
		background-color: rgb(81, 105, 133);
		box-shadow: 5px 0px 10px darkgrey;
	}
}

</style>