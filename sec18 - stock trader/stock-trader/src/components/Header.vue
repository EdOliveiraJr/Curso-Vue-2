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
            <v-btn plain>Finalizar Dia</v-btn>
            <v-menu offset-y >
                <template v-slot:activator="{ on }">
                    <v-btn plain v-on="on" > Salvar & Carregar </v-btn>
                </template>
                <v-list>
                    <v-list-item>
                        <v-list-item-title>Salvar Dados</v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-title>Carregar Dados</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-toolbar-items>
        
   </v-toolbar>
</template>

<script>
export default {

}
</script>
    
<style scoped>
    .v-toolbar {
        flex: none;
    }
    
</style>