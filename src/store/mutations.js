export default {
    setList (state, payload) {
        state.list = payload
    },
    addToCart (state, payload) {
        const itemExist = state.cart.items.find(el => el.id == payload.id)
        if (itemExist) {
            itemExist.quantity += 1
            itemExist.totalQty += 1
            itemExist.totalPrice += itemExist.price
        } else {
            const item = Object.assign(payload, { quantity: 1, totalPrice: payload.price, totalQty: 1 })
            state.cart.items.push(item)
        }
    },
    incrementItem (state, itemId) {
        const itemExist = state.cart.items.find(el => el.id == itemId)
        if (itemExist) {
            itemExist.quantity += 1
            itemExist.totalQty += 1
            itemExist.totalPrice += itemExist.price
        }
    },
    decrementItem (state, itemId) {
        const itemExist = state.cart.items.find(el => el.id == itemId)
        if (itemExist) {
            itemExist.quantity -= 1
            itemExist.totalQty -= 1
            itemExist.totalPrice -= itemExist.price
        }
    },
    removeItem (state, itemId) {
        const tmpItems = state.cart.items.filter(el => el.id != itemId)
        state.cart.items = tmpItems
    },
    checkout (state) {
        state.cart.items = []
        state.cart.grandTotalQty = state.cart.grandTotalPrice = 0
    }
}