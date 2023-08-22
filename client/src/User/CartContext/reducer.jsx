export const reducer = (state, action) => {
    switch (action.type) {

        case "ADD_TO_CART": {
            return { ...state, cart: [...state.cart, action.payload] }
        }

        case "CLEAR_CART":{
            return { ...state, cart: [] }
        }
        case "REMOVE_FROM_CART":{
            const updatedCart = state.cart.filter((val)=>val._id != action.id)
            return { ...state, cart: updatedCart }
        }
        

        default: {
            return state;
        }
    }
}