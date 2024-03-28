<template>
    <div class="tarefas">
		<template>
			<Tarefa v-for="(tarefa, i) in tarefas" :key="tarefa.nome" 
				@tarefaExcluida="$emit('tarefaExcluida', i)"
				@novoEstado="$emit('novoEstado',i)"	
				:tarefa="tarefa">
			</Tarefa>
		</template>
    </div>
</template>

<script>
import Tarefa from './Tarefa.vue'

export default {
	components:{Tarefa},
   	props:{
		tarefas:{type: Array, required: true}
   	}
}
</script>
<style>
	.tarefas {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
	}
    
</style>