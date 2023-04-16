import { Action } from "@remix-run/router";


const set_products = 'SET_PRODUCTS';
const setLoading = 'SET_LOADING';
const setError = 'SET_ERROR';

const initianState = {
    loading: false,
    products: [],
    error: null
}

export default function productReducer(state = initianState, action) {
    switch (action.type) {
        case set_products:
            return {
                ...state,
                products: action.payload
            }
        case setLoading:
            return {
                ...state,
                loading: action.payload
            }
        case setError:
            return {
                ...state,
                error: action.payload
            }



        default:
            return state
            break;
    }
}

export const setProductAction = (product) => {
    return {
        type: set_products,
        payload: product
    }
}
export const setLoadingAction = (status) => {
    return {
        type: setLoading,
        payload: status
    }
}
export const setErrorAction = (error) => {
    return {
        type: setError,
        payload: error
    }
}

export const fetchPostAction = () => {
    return (dispatch) => {
        dispatch(setLoadingAction(true))
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => {
                dispatch(setProductAction(data))
                dispatch(setLoadingAction(false))
                dispatch(setErrorAction(null))
            }).catch(err => {
                dispatch(setErrorAction(err.message))
                dispatch(setLoadingAction(false))
            })
    }
}

