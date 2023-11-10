<template>
	<div class="item__container">
		<div> {{ companyObj.name }}</div>
		<div> {{ companyObj.rate }}</div>
		<div> {{ companyObj.year }}</div>
		<div> {{ companyObj.owner }}</div>
		<div>
			<button @click="onDeleteCompany(companyObj.id)">Delete</button>
			<button @click="onEditCompany(companyObj.id)">Edit</button>
		</div>

	</div>
</template>

<script>
import { mapActions } from 'vuex';

	export default {
		name: "CompanyItem",
		props: {
			companyObj: {
				type: Object,
				default: ()=>({})
			},
		},
		
		methods: {
			...mapActions(['onDeleteCompany']),
			
			onEditCompany(compId){
				this.$router.push({
					name: 'CompanyEditor',
					params: {
						id: compId
					}
				})
			}
		},
	}
</script>

<style lang="scss" scoped>
.item__container{
	display: grid;
	grid-template-columns: 1.5fr repeat(2, 0.5fr) repeat(2, 1fr);
	max-width: 70vw;
	column-gap: 10px;
	&:hover{
		background-color: lightblue;
	}
	div{
		margin: 0;
		padding: 5px 0;
		
	}
	button{
		width: 60px;
		cursor: pointer;
		margin-left: 10px;
	}
	
}

</style>