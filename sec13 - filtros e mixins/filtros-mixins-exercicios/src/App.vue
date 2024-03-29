<template>
	<div id="app">
		<h1>Filtros & Mixins</h1>
		<hr>
		<p>{{ cpfDoAluno | cpf | inverter }}</p>
		<input type="text" :style="{fontSize: '2.5rem'}" :value="cpfDoAluno | cpf | inverter">
		
		<Frutas></Frutas>
		
		<div>
			<ul v-for="(fruta, index) in frutas" :key="index">
				<li :style="{listStyle: 'none'}" >{{ fruta }}</li>
			</ul >
        	<input v-model="fruta" @keydown.enter="add" />
    	</div>
	
	</div>
</template>

<script>
import Frutas from '@/Frutas.vue'
import frutasMixins from '@/frutasMixins'

export default {
	components:{Frutas},
	mixins:[frutasMixins],
	filters:{
		cpf(valor){
			const arr = valor.split('')
			arr.splice(3,0,'.')
			arr.splice(7,0,'.')
			arr.splice(11,0,'-')
			return arr.join('')
		}
	},
	data() {
		return {
			cpfDoAluno: '01816219320',
		}
    },
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
</style>
