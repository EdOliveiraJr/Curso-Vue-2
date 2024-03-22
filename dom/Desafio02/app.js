new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods:{
        exibirAlerta(){
            alert('Você clickou no botão!!!')
        },
        gravaValor(event){
            this.valor = event.target.value
        }
    }
})