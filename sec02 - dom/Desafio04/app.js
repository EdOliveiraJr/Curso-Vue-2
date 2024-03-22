new Vue({
	el: '#desafio',
	data: {
		classe1: 'destaque',
		classe3: '',
		classe4: '',
		quadrado: true,
		atencao: true,
		cor5: '',
		estilo5: {
			height: '120px',
			width: '120px',
		},
		width: '0',
		
	},
	methods: {
		iniciarEfeito() {
			setInterval( 
				()=>{
					this.classe1 = this.classe1 == 'destaque' ? 'encolher' : 'destaque'
				}, 1000
				)
			console.log(classe3);
		},
		iniciarProgresso() {
			let valor = 0
			const temporizador = setInterval(
				() => {
					valor += 5
					this.width = `${valor}%`
					if(valor == 100) {
						clearInterval(temporizador) 
						this.width = 0
					}
				}, 500)
		},
		aplicarAtencao(event){
			event.target.value == 'true' ? this.atencao = true : this.atencao = false
	
		}
	}
})
