import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPostAction } from '../../redux/Products/actions'
import ProductsCart from '../ProductsCart'
import Spinner from 'react-bootstrap/Spinner';
import './ProductComp.css'

export default function ProductComp() {
    const selector = useSelector(state => state.product.products)
    const selectorLoad = useSelector(state => state.product.loading)
   
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchPostAction())
    }, [dispatch])
    return (
        <>
            <div className="row">
                {selectorLoad!==true ? selector.map(product => (
                    <ProductsCart key={product.id} {...product} />
                )) :null


                }
                    <div className={`animation ${selectorLoad ? 'show' : 'viue'}`}>

                        <Spinner animation="grow" />


                    </div>


            </div>
        </>
    )
}
