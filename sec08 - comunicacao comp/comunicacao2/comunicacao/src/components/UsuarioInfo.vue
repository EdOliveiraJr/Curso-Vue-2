<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p> Nome do Usuário: {{ nome }}</p>
    </div>
</template>

<script>
export default {
    props: {
        nome: {
            type: String,
            // required: true,
            default: 'Anônimo'
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
