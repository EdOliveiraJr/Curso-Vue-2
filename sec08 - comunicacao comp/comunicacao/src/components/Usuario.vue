<template>
    <div class="container">
        <h1>Componente Usuário</h1>
        <p>Esse é um componente muito legal!</p>
        <p>{{ nome }}</p>
        <p>{{ idade }}</p>
        <button @click="alterarNome" >Alterar Nome</button>
        <hr>
        <div class="componentes">
            <app-usuario-info 
                :nome="nome"
                :idade="idade"
                @nomeMudou="nome = $event"
                :reiniciarFn = "reiniciarNome"
            />
            <app-usuario-editar 
                :idade="idade"
                @idadeMudou="idade = $event" 
            />
        </div>
    </div>
</template>

<script>
import AppUsuarioInfo from './UsuarioInfo'
import AppUsuarioEditar from './UsuarioEditar'

export default {
    components: { AppUsuarioInfo, AppUsuarioEditar },
    data() {
        return {
            nome: 'Junior',
            idade: '36',
        }
    },
    methods: {
        alterarNome(){
            this.nome = 'Ana'
        },
        reiniciarNome() {
            this.nome = 'Junior'
        }
    }
}
</script>

<style scoped>
    .container {
        background-color: #27363b;
        color: #fff;
        padding: 10px;
    }

    .container hr {
        margin: 20px 10px;
    }

    .componentes {
        display: flex;
    }

    .componentes > * {
        margin: 10px;
    }
</style>
