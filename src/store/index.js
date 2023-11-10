import { createStore } from 'vuex';
import { companies } from '@/store/data';

export default createStore({
    state: {
		companiesList: companies,
		nameFilter: null,
		rateFilter: null,
		yearFilter: null,
		ownerFilter: null,
	 },
    getters: {
		 getCompaniesList: ({ companiesList }) => companiesList,
		 getCompanyById: (state) => (compId) => {
			return {...state.companiesList.find(company=>company.id == compId)}
		 	},
		 nameFilterVal: ({ nameFilter }) => nameFilter,
		 rateFilterVal: ({ rateFilter }) => rateFilter,
		 yearFilterVal: ({ yearFilter }) => yearFilter,
		 ownerFilterVal: ({ ownerFilter }) => ownerFilter,
		 getFilteredList: ({ companiesList, nameFilter, rateFilter, yearFilter, ownerFilter }) => {
			 if (nameFilter || rateFilter || yearFilter || ownerFilter){
				return companiesList.filter(company =>{
					const nameMatch = !nameFilter || (company.name).toLowerCase().includes(nameFilter.toLowerCase());
					const rateMatch = !rateFilter || parseFloat(company.rate) == rateFilter;
					const yearMatch = !yearFilter || company.year == yearFilter;
					const ownerMatch = !ownerFilter || (company.owner).toLowerCase().includes(ownerFilter.toLowerCase());
					return nameMatch && rateMatch && yearMatch && ownerMatch;
				})
			 } else return companiesList;
		 }
	 },
    mutations: {
		// setCompaniesList(state, data){
		// 	state.companiesList = data;
		// 	 console.log(state.companiesList);
		// },
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
		updateNameFilter(state, val){
			state.nameFilter = val;
		 },
		updateRateFilter(state, val){
			state.rateFilter = val;
		 },
		 updateYearFilter(state, val){
			state.yearFilter = val;
		 },
		 updateOwnerFilter(state, val){
			state.ownerFilter = val;
		 },
		 clearFilters(state){
			state.nameFilter = null;
			state.rateFilter = null;
			state.yearFilter = null;
			state.ownerFilter = null;
		 }
	 },
    actions: {
		// loadCompaniesData({ commit}){
		// 	commit('setCompaniesList', companies)
		// },
		onDeleteCompany({ commit }, compId){
			commit('deleteCompany', compId)
		 },
		 onAddNewCompany({ commit }, company){
			commit('addNewCompany', company)
		 },
		 onUpdateCompany({ commit }, compData){
			commit('updateCompany', compData)
		 },
		 updateNameFilter({ commit }, val){
			 commit('updateNameFilter', val)
		 },
		 updateRateFilter({ commit }, val){
			 commit('updateRateFilter', val)
		 },
		 updateYearFilter({ commit }, val){
			 commit('updateYearFilter', val)
		 },
		 updateOwnerFilter({ commit }, val){
			 commit('updateOwnerFilter', val)
		 },
		 onClearFilters({ commit }){
			commit('clearFilters')
		 }
	 },
    modules: {},
})
