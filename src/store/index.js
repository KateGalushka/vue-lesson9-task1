import { createStore } from 'vuex';
import { companies } from '@/store/data';

export default createStore({
    state: {
		companiesList: companies,
		filterObj:{}
	 },
    getters: {
		 getCompaniesList: ({ companiesList }) => companiesList,
		 getCompanyById: (state) => (compId) => {
			return {...state.companiesList.find(company=>company.id == compId)}
		 	},
		 getFilterObj: ({filterObj}) => filterObj,
		 getFilteredList: ({ companiesList, filterObj }) => {
			let {name, rate, year, owner} = filterObj;
			if (name || rate || year || owner){
				return companiesList.filter(company =>{
					const nameMatch = !name || (company.name).toLowerCase().includes(name.toLowerCase());
					const rateMatch = !rate || parseFloat(company.rate) == rate;
					const yearMatch = !year || company.year == year;
					const ownerMatch = !owner || (company.owner).toLowerCase().includes(owner.toLowerCase());
					return nameMatch && rateMatch && yearMatch && ownerMatch;
				})
			 } else return companiesList;
		 }
	 },
    mutations: {
		deleteCompany(state, compId){
			state.companiesList = state.companiesList.filter(company=>company.id !== compId);
			console.log('list after deleting: ', state.companiesList );
		},
		addNewCompany(state, company){
			state.companiesList.push(company);
			console.log('list after adding: ', state.companiesList);
		 },
		updateCompany(state, compData){
			state.companiesList = state.companiesList.map(company => (company.id === compData.id) ? compData : company );
			console.log('list after updating: ', state.companiesList);
		},
		updateFilterObj(state, filterDataObj){
			state.filterObj = filterDataObj;
		 },
		
	},
    actions: {
		onDeleteCompany({ commit }, compId){
			commit('deleteCompany', compId)
		 },
		 onAddNewCompany({ commit }, company){
			commit('addNewCompany', company)
		 },
		 onUpdateCompany({ commit }, compData){
			commit('updateCompany', compData)
		 },
		 updateFilterObj({ commit }, filterData){
			 commit('updateFilterObj', filterData)
		 },
		
	 },
    modules: {},
})
