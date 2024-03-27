<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p> Nome do Usuário: {{ inverteNome() }}</p>
        <p>Idade do Usuário: {{ idade }}</p>
        <button @click="reiniciarNome" >Reiniciar Nome</button>
        <button @click="reiniciarFn()">Reiniciar Nome (CallBack)</button>
    </div>
</template>

<script>
export default {
    props: {
        nome: {
            type: String,
            // required: true,
            //default: function() { return 'Usar qualque função como default'},
            default: 'Anônimo'
        },
        idade : Number,
        reiniciarFn: Function
    },
    methods:{
        inverteNome(){
            return this.nome.split('').reverse().join('')
        },
        reiniciarNome(){
            this.nome =  'Junior'
            this.$emit('nomeMudou', this.nome)
        }
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
