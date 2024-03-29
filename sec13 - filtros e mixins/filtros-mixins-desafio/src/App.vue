<template>
	<div id="app">
		<h1>Filtros & Mixins (Desafio)</h1>
		<!-- Exercício 1 -->
		<!-- Construir um filtro local que troca espaços por vírgula -->
		<input type="text" v-model="texto">
		<p>{{ texto | texto }}</p>
		
		<!-- Exercício 2 -->
		<!-- Filtro global que conta o tamanho de cada palavra e adiciona o 
			valor na string final -->
		<!-- "Pedro é legal" => "Pedro (5) é (1) legal (5)" -->
		<p>{{ texto | countChar }}</p>

		<!-- Exercício 3 -->
		<!-- Implementar os exercicios 1 e 2 com propriedade computada -->
		<p>{{ textoVirgula }}</p>
		<p>{{ textoCount }}</p>

		<!-- Exercício 4 -->
		<!-- Compartilhe a propriedade computada via mixin -->


	</div>
</template>

<script>
import textoMixin from '@/textoMixin'

export default {
	filters:{
		texto(valor){
			// return valor.split(' ').join(',')
			return valor.replace(/ /g, ',')
		}
	},
	mixins:[textoMixin],
	// data() {
	// 	return {
	// 		texto: 'Pedro é legal'
	// 	}
	// },
	// computed: {
	// 	textoVirgula(){
	// 		return this.texto.split(' ').join(',')
	// 	},
	// 	textoCount(){
	// 		var arr1 =  this.texto.split(' ')
	// 		var arr2 = []
			
	// 		arr1.forEach(element => {
	// 			var total = element.length
	// 			arr2.push(element + '(' + total + ')')
	// 		});
			
	// 		return arr2.join(' ')
	// 	}
	// }
	
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;

}

input {
	text-align: center;
	font-size: 2.5rem;
}
</style>
