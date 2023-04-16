
// import Index from "./Index";
import Home from "./Home/Home";
import Product from "./Product";
import Cart from "./Cart/Cart";


const routes = [
    {
        path: '/', element: <Home />
    },

    {
        path: '/product', element: <Product />
    },
    {
        path: '/cart', element: <Cart />
    }
]


export default routes