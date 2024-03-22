new Vue({
    el: '#desafio',
    data: {
        nome: 'Edvaldo Oliveira',
        idade: 36,
        linkImage: 'https://avatars.githubusercontent.com/u/74935603?v=4'
    },
    methods:{
        idadeX3(){
            return this.idade * 3
        },
        random(){
            return Math.random()
        }

    }
})