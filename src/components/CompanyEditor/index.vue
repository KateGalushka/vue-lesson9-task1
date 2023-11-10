<template>
	<div v-if="creatingMode">
		<creating-mode-editor/>
	</div>
	<div v-else>
		<editing-mode-editor :companyId="compId"/>
	</div>
</template>

<script>
	import CreatingModeEditor from './CreatingModeEditor.vue';
	import EditingModeEditor from './EditingModeEditor.vue';
	

	export default {
		name: "CompanyEditor",

		components: {
    		CreatingModeEditor, EditingModeEditor
		},
		
		computed: {
			compId(){
				return this.$route.params.id;
			},
			creatingMode() {
				return (this.$route.params.id)? false: true
			},
			
		},
	}
</script>

<style lang="scss">
	.editor{
		width: 380px;
		label{
			display: flex;
			justify-content: space-between;
			align-items: center;
			gap: 10px;
			padding: 5px;
		}
		input{
			width: 300px;
			padding: 5px 0;
		}
		button{
			background-color: rgb(117, 154, 197);
			color: #fff;
			padding: 5px 20px;
			margin: 10px 0 0 170px;
			cursor: pointer;
			&[disabled]{
				opacity: 0.4;
			}
		}
	}

</style>