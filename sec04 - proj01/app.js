new Vue({
    el: '#app',
    data:{
        lifeJogador: 100,
        lifeMonstro: 100,
        iniciou: false,
        registros: [],
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
            this.registros = [];
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
                this.registraAtaque(5,valor+5) 
            }else{
                this.lifeJogador -= valor + 5
                this.lifeMonstro -= 5
                this.registraAtaque(valor + 5, 5)
            }
            this.zeroLife()
        },
        cura(){
            let valor = this.valorRandomico()
            
            this.lifeJogador -= valor
            this.lifeJogador += 5
            
            this.registraCura( 5, valor)
            
            this.zeroLife()
        },
        registraAtaque( ataqueJogador, ataqueMonstro){
            this.registros.push({'ataqueJogador':ataqueJogador,'ataqueMonstro':ataqueMonstro})
        },
        registraCura(cura,ataqueMonstro){
            this.registros.push({'cura': cura,'ataqueMonstro': ataqueMonstro})
        }
    },
    watch:{
        temResultado(value){
            if(value) this.iniciou = false;
        }   
    }

})