<template>
    <div class="tarefa" 
        :class="estadoClasse" 
        @click="$emit('novoEstado', tarefa)">
        <span @click.stop="$emit('tarefaExcluida', tarefa )" class="close"> x </span>
        <p>{{tarefa.nome}}</p>
    </div>
</template>

<script>
export default {
    props:{
        tarefa:{type: Object, required: true}
    },
    computed:{
        estadoClasse(){
            return {
                pendente: !this.tarefa.estado,
                feita: this.tarefa.estado,
            }
        }
    },
}
</script>

<style>
    .tarefa {
        position: relative;
        box-sizing:  border-box;
        width: 200px;
        height: 100px;
        padding: 10px;
        margin: 20px;
        border-radius: 8px;
        font-size: 1.5rem;
        font-weight: 200;
        cursor: pointer;
        user-select: none;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .feita {
        color: #ddd;
        background-color: green;
        text-decoration: line-through;
    }

    .pendente {
        /* border-left: 12px solid #B73229; */
        background-color: red;
    }

    .close {
        position: absolute;
        right: 10px;
        top: 5px;
        color: #dddddd9e;
        font-size: 1rem;
        font-weight: 600;
        height: 20px;
        width: 20px;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: cente;
    }
    
</style>