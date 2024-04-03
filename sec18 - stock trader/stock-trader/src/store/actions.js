import Vue from 'vue'

export default {
    loadData({commit}){
        Vue.prototype.$http.get('data.json')
        .then(resp =>{
            const data = resp.data
            if(data){
                commit('setStocks', data.stocks)
                commit('setPortfolio', {
                    funds: data.funds,
                    stocksPortfolio: data.stocksPortfolio
                })
            }
            alert('Dados carregados com sucesso!')
        })
    }
}