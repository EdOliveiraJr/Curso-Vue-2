new Vue({
    el: '#app',
    data:{
        lifeJogador: 100,
        lifeMonstro: 100,
        iniciou: false,
    },
    computed:{
        temResultado(){
            return this.lifeJogador == 0 || this.lifeMonstro == 0
        }
    },
    methods:{
        iniciarJogo(){
            this.iniciou = true;
            this.lifeJogador = 100;
            this.lifeMonstro = 100;
        },
        desistirJogo(){
            this.iniciou = false;
        },
        valorRandomico(){
            return Math.round(Math.random() * 10)
        },
        zeroLife(){
            if(this.lifeJogador <=0) this.lifeJogador = 0;
            if(this.lifeMonstro <=0) this.lifeMonstro = 0;
        },
        ataque(especial){
            let valor = this.valorRandomico()
            
            if(especial){
                this.lifeJogador -= 5
                this.lifeMonstro -= valor + 5 
            }else{
                this.lifeJogador -= valor + 5
                this.lifeMonstro -= 5
            }
            this.zeroLife()
        },
        cura(){
            let valor = this.valorRandomico()
            
            this.lifeJogador -= valor
            this.lifeJogador += 5
            
            this.zeroLife()
        }
    },
    watch:{
        temResultado(value){
            if(value) this.iniciou = false; 
        }   
    }

})