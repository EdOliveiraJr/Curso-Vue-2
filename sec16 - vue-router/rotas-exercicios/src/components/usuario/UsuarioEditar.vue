<template>
    <div class="usuario-editar" >
        <h3>Usuário Editar</h3>
        <hr>
        <p> <strong>Código: </strong> {{ id }} </p>
        <p> <strong>Completo: </strong> {{ $route.query.completo ? 'Sim' : 'Não' }} </p>
        <p> <strong>Língua: </strong> {{ $route.query.lingua }} </p>
        <hr>
        <button primario @click="confirmou= true">Confirmar</button>
        <div id="rodape">
            <h3>Curso Vue</h3>
        </div>
    </div>
</template>

<script>

export default {
    props: ['id'],
    data() {
        return {
            confirmou : false
        }
    },
    beforeRouteLeave(to, from, next){
        if(this.confirmou){
            next()
        }else{
            if(confirm('Tem ceteza que deseja sair?')){
                next()
            }else{
                next(false)
            }
        }
    }
}

</script>

<style>
    #rodape {
        margin-top: 1000px;
    }
</style>