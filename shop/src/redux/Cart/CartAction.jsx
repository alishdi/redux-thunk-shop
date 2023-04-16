const addToCart = 'ADD_TO_CAR';
const increment = 'INCREMENT';
const decrement = 'DECREMENT';
const removeFromCart = 'REMOVE';
const clearCart = 'CLEAR'



const initialState = {
    cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
}

export default function CartProductreducer(state = initialState, action) {
    switch (action.type) {
        case addToCart:
            const hasProduct = state.cart.find(p => p.id === action.payload.id) ? true : false;
            localStorage.setItem('cart', JSON.stringify(state.cart))
            if (!hasProduct) {
                return {
                    ...state,
                    cart: [...state.cart, { ...action.payload, qty: 1 }]
                }

            }
        case increment:
            state.cart = state.cart.map(product => product.id === action.payload ? { ...product, qty: product.qty + 1 } : product)
            localStorage.setItem('cart', JSON.stringify(state.cart))
            return {
                ...state,
                cart: state.cart
            }
        case decrement:
            const hasProductQty = state.cart.find(p => p.id === action.payload);
            if (hasProductQty.qty > 1) {

                state.cart = state.cart.map(product => product.id === action.payload ? { ...product, qty: product.qty - 1 } : product)
                localStorage.setItem('cart', JSON.stringify(state.cart))
            }
            return {
                ...state,
                cart: state.cart
            }
        case removeFromCart:
            state.cart = state.cart.filter(p => p.id !== action.payload)
            localStorage.setItem('cart', JSON.stringify(state.cart))
            return {
                ...state,
                cart: state.cart
            }
        case clearCart:
            state.cart = []
            localStorage.removeItem('cart')
            return {
                ...state,
                cart: state.cart
            }


        default:
            return state
            break;
    }
}


export const addtocartAction = (product) => {
    return {
        type: addToCart,
        payload: product
    }
}
export const incrementAction = (id) => {
    return {
        type: increment,
        payload: id
    }
}
export const decrementAction = (id) => {
    return {
        type: decrement,
        payload: id
    }
}
export const removeFromCartAction = (id) => {
    return {
        type: removeFromCart,
        payload: id
    }
}
export const clearCartAction = () => {
    return {
        type: clearCart,

    }
}