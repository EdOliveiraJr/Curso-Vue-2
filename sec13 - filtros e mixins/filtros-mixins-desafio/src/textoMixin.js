export	default {
    data() {
        return {
            texto: 'Pedro é muito legal'
        }
    },
    computed: {
		textoVirgula(){
			// return this.texto.split(' ').join(',')
            return this.texto.replace(/ /g, ',')
		},
		textoCount(){
            return this.texto.split(' ').map(palavra => `${palavra} (${palavra.length})`).join(' ')
		}
	}
}