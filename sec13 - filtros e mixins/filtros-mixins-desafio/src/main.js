import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
Vue.filter('countChar', function(valor){
	// var arr1 =  valor.split(' ')
	// var arr2 = []
	
	// arr1.forEach(element => {
	// 	var total = element.length
	// 	arr2.push(element + '(' + total + ')')
	// });
	
	// return arr2.join(' ')
	return valor.split(' ').map(palavra => `${palavra} (${palavra.length})`).join(' ')
})

new Vue({
	render: h => h(App),
}).$mount('#app')
