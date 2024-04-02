<template>
        <div>
                <h1 class="display-3 font-weigth-light mb-4" >Negocie e Consulte suas Ações!!!</h1>
                <v-sheet :elevation="6" class="primary pa-2">
                        <v-icon class="white--text mr-3">info</v-icon>
                        <span class="headline white--text font-weight-light ">Você pode salvar e carregar seu dados!</span>
                </v-sheet>
                <v-sheet :elevation="6" class="success pa-2 mt-3">
                        <v-icon class="white--text mr-3">info</v-icon>
                        <span class="headline white--text font-weight-light ">Clique em "Finalizar Dia" para começar um novo dia!</span>
                </v-sheet>
                <v-divider class="my-4"></v-divider>
                <p class="display-1"><strong>Seu Saldo: </strong>{{ funds | currency }}</p>
        </div>
</template>

<script>
export default {
        computed: {
                funds(){
                        return this.$store.getters.funds
                } 
        }
}
</script>

<style>

</style>