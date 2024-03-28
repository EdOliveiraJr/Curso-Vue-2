<template>
	<div id="app">
		<h1>Tarefas</h1>
		<FormTarefa @tarefaAdicionada="adicionarTarefa($event)"/>
		<BarraProgresso :progresso="progresso"/>
		<template>
			<div v-if="this.tarefas.length == 0">
				<h2>Você está com a vida em dias!!! 8)</h2>
			</div>
			<Tarefas v-else :tarefas="tarefas"
				@tarefaExcluida="excluirTarefa"
				@novoEstado="alteraEstado"> 
			</Tarefas>
		</template>
	</div>
</template>

<script>
import Tarefas from './components/Tarefas.vue';
import FormTarefa from './components/FormTarefa.vue';
import BarraProgresso from './components/BarraProgresso.vue'

export default {
	components:{Tarefas, FormTarefa, BarraProgresso},
	data() {
		return {
			tarefas: [],
		}
	},
	computed:{
		progresso(){
			const totalTarefas = this.tarefas.length
			const tarefasFeitas = this.tarefas.filter( t => t.estado == true).length
			return Math.round(tarefasFeitas / totalTarefas * 100) || 0
		}
	},
	watch: {
		tarefas: {
			deep : true,
			handler(){
				localStorage.setItem('tarefas', JSON.stringify(this.tarefas))
			}
		}
	},
	created(){
		const json = localStorage.getItem('tarefas')
		const array = JSON.parse(json)
		this.tarefas = Array.isArray(array) ? array : []
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
		},
		
	},
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
