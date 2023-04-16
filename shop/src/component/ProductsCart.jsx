import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useSelector, useDispatch } from 'react-redux';
import { addtocartAction } from '../redux/Cart/CartAction';
import './productCart.css'
import Swal from 'sweetalert2';
function ProductsCart({ id, title, description, price, image }) {
    const selector = useSelector(state => state.product.products)
    const selectorCart = useSelector(state => state.cart.cart)
    const dispatch = useDispatch()



    const addToProductHandler = (id) => {
        const fillter = selector.find(product => product.id === id)
        dispatch(addtocartAction(fillter))

        Swal.fire({
            title: 'Add To Cart',
            icon: 'success',
            showConfirmButton: false,
            timerProgressBar:true,
            timer:3000,
            toast:true,
            position:'top'
          })


    }
    const hasInBasket = (id) => {
        let has = selectorCart.find(p => p.id === id) ? true : false

        return has

    }

    return (
        <div className="col-12 col-lg-4 col-md-6 cart-contain">
            <Card className='card-pro'>
                <div className="contain">
                    <Card.Img variant="top" src={image} />
                </div>
                <Card.Body>
                    <Card.Title>{title.slice(0, 17)}</Card.Title>
                    <Card.Text>
                        {description.slice(0, 30)}
                    </Card.Text>
                    <Card.Text className='alert alert-success fw-bold'>
                        {price} $
                    </Card.Text>
                    <Button variant="success" onClick={() => addToProductHandler(id)}
                        disabled={hasInBasket(id)}>{hasInBasket(id) ? 'In Basket' : 'Add To Cart'}</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default ProductsCart;