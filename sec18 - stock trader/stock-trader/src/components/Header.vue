<template>
   <v-toolbar dense class="mb-6">
        <v-toolbar-title class="headline text-uppercase mr-4">
            <span>Stock</span>
            <span class="font-weight-light">Trader</span>
        </v-toolbar-title>
        
        <v-toolbar-items>
            <v-btn plain to="/">Início</v-btn>
            <v-btn plain to="/portfolio">Portfólio</v-btn>
            <v-btn plain to="/stocks">Ações</v-btn>
        </v-toolbar-items>
        
        <v-spacer></v-spacer>
        
        <v-toolbar-items class="ml-auto">
            <v-btn plain @click="endDay" >Finalizar Dia</v-btn>
            <v-menu offset-y >
                <template v-slot:activator="{ on }">
                    <v-btn plain v-on="on" > Salvar & Carregar </v-btn>
                </template>
                <v-list>
                    <v-list-item @click="saveData">
                        <v-list-item-content>
                            <v-list-item-title>Salvar Dados</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item @click="loadDataLocal">
                        <v-list-item-content>
                            <v-list-item-title>Carregar Dados</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-menu>
            <v-layout align-center>
                <span class="text-uppercase grey--text text--darken-2">
                    Saldo: {{ funds | currency}}
                </span>
            </v-layout>
        </v-toolbar-items>
   </v-toolbar>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    computed: {
        funds(){
            return this.$store.getters.funds
        }
    },
    methods: {
        ...mapActions(['randomizeStocks', 'loadData']),
        endDay() {
            this.randomizeStocks()
        },
        saveData(){
            const {funds, stocksPortfolio, stocks } = this.$store.getters
            this.$http.put('data.json', {funds, stocksPortfolio, stocks})
            // .then(resp => { alert('Dados salvos com sucesso!')})
            // .catch(error =>{alert('Ocorreu algum erro durante a operação!')})
        },
        loadDataLocal(){
            this.loadData()
        }
    },
}
</script>
    
<style scoped>
    .v-toolbar {
        flex: none;
    }
    
</style>