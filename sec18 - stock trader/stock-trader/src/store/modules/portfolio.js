export default {
    state: {
        funds: 10000,
        stocks: [],
    },
    mutations: {
        buyStock(state, {stockId, stockPrice, quantity}){
            const record = state.stocks.find(element => element.id == stockId)
            if(record){
                record.quantity += quantity
            } else {
                state.stocks.push({
                    id: stockId,
                    quantity: quantity
                })
            }
            state.funds -= stockPrice * quantity
        },
        sellStock(state,{stockId, stockPrice, quantity}){
            const record = state.stocks.find(element => element.id == stockId)
            if(record.quantity > quantity){
                record.quantity -= quantity
            } else {
                state.stocks.splice(state.stocks.indexOf(record), 1)
            }
            state.funds += stockPrice * quantity
        }
    },
    actions: {
        sellStock({commit}, order) {
            commit('sellStock', order)
        }
    },
    getters: {
        stockPortfolio(state, getters) {
            return state.stocks.map(stocks => {
                const record = getters.stocks.find(element => element.id == stocks.id)
                return {
                    id: stocks.id,
                    quantity: stocks.quantity,
                    name: record.name,
                    price: record.price
                }
            })
        },
        funds(state){
           return state.funds
        }
    }
}