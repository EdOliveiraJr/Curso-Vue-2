<template>
	<div id="app">
		<h1>Tarefas</h1>
		<FormTarefa @tarefaAdicionada="adicionarTarefa($event)"/>
		<Tarefas :tarefas="tarefas"
			@tarefaExcluida="excluirTarefa"
			@novoEstado="alteraEstado"> 
		</Tarefas>
	</div>
</template>

<script>
import Tarefas from './components/Tarefas.vue';
import FormTarefa from './components/FormTarefa.vue';

export default {
	components:{Tarefas, FormTarefa},
	data() {
		return {
			tarefas: [
				{nome:'lavar', estado: false },
				{nome:'passar', estado: true },
			]
		}
	},
	methods:{
		adicionarTarefa(task){
			this.tarefas.push(task)
		},
		excluirTarefa(index) {
			this.tarefas.splice(index, 1)
		},
		alteraEstado(index){
			this.tarefas[index].estado = !this.tarefas[index].estado
		}
	}
}
</script>

<style>
	body {
		font-family: 'Lato', sans-serif;
		background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
		color: #FFF;
	}

	#app {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	#app h1 {
		margin-bottom: 5px;
		font-weight: 300;
		font-size: 3rem;
	}
</style>
