export default {
    setList ({commit}, payload) {
        commit('setList', payload)
    },
    addToCart ({commit}, payload) {
        commit('addToCart', payload)
    },
    incrementItem ({commit}, payload) {
        commit('incrementItem', payload)
    },
    decrementItem ({commit}, payload) {
        commit('decrementItem', payload)
    },
    removeItem ({commit}, payload) {
        commit('removeItem', payload)
    },
    checkout ({commit}, payload) {
        commit('checkout', payload)
    }
}