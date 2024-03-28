<template>
    <div class="form-tarefa">
        <input class="form-elemento" type="text" v-model="nome" @keydown.enter="adicionar">
        <button class="form-elemento" @click="adicionar">+</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            nome: '',
        }
    },
    methods:{
        adicionar(){
            this.$emit('tarefaAdicionada', {nome: this.nome, estado: false})
            this.nome = ''
        }
    }
}
</script>
<style>
    .form-tarefa {
        margin: 35px;
    }

    .form-elemento {
        outline: none;
        font-size: 1.5rem;
        border: 1px solid #fff;
        padding: 5px 10px 8px;
        color: #fff;
    }

    input.form-elemento {
        width: 500px;
        background-color: #fff2;
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
    }

    button.form-elemento {
        background-color: #2196f3;
        border-left: none;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
    }

</style>