import { combineReducers } from "redux";
import productReducer from "./Products/actions";
import CartProductreducer from "./Cart/CartAction";


const rootReducer = combineReducers({
    product: productReducer,
    cart: CartProductreducer
})


export default rootReducer