import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { clearCartAction, decrementAction, incrementAction, removeFromCartAction } from '../../redux/Cart/CartAction'
import Swal from 'sweetalert2'

export default function Cart() {
  const cart = useSelector(state => state.cart.cart)
  const dispatch = useDispatch()

  function TotalPrice() {
    let sum = 0
    cart.forEach(product => {
      sum += product.price * product.qty
    });
    return Math.ceil(sum)
  }

  const incrementHandler = (id) => {
    dispatch(incrementAction(id))
    Swal.fire({
      title: 'Cart Updated',
      icon: 'success',
      showConfirmButton: false,
      timerProgressBar: true,
      timer: 3000,
      toast: true,
      position: 'top'
    })
  }
  const decrementHandler = (id, qty) => {
    if (qty > 1) {
      dispatch(decrementAction(id))
      Swal.fire({
        title: 'Cart Updated',
        icon: 'success',
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
        toast: true,
        position: 'top'
      })

    }
  }
  const removeHandler = (id) => {
    Swal.fire({
      title: 'Are You Sure To Delete?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'yup',
      showConfirmButton: true,

    }).then(res => {
      if (res.isConfirmed) {
        dispatch(removeFromCartAction(id))
        Swal.fire({
          title: 'Cart Updated',
          icon: 'success',
          showConfirmButton: false,
          timerProgressBar: true,
          timer: 3000,
          toast: true,
          position: 'top'
        })
      }
    })
  }
  const clearHandler = () => {
    Swal.fire({
      title: 'Are You Sure To Clear?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'yup',
      showConfirmButton: true,

    }).then(res => {
      if (res.isConfirmed) {
        dispatch(clearCartAction())
        Swal.fire({
          title: 'Cart Updated',
          icon: 'success',
          showConfirmButton: false,
          timerProgressBar: true,
          timer: 3000,
          toast: true,
          position: 'top'
        })
      }
    })
  }

  return (
    <>
      {cart.length ? (
        <div className="container">
          <div className="row mt-5">
            <div className="col-lg-12 pl-3 pt-3">
              <table className="table table-hover border bg-white">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th style={{ width: '10%' }}>Quantity</th>
                    <th>Subtotal</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cart && cart.map(product => (
                    <tr key={product.id}>
                      <td className="align-middle">
                        <div className="row">
                          <div className="col-lg-2">
                            <img
                              src={product.image}
                              alt="..."
                              className="img-fluid"
                            />
                          </div>
                          <div className="col-lg-10">
                            <h5> {product.title.slice(0, 17)} </h5>
                            <p> {product.description.slice(0, 150)} </p>
                          </div>
                        </div>
                      </td>
                      <td className="align-middle">{product.price}</td>
                      <td className="align-middle">
                        <button className="btn btn-sm btn-dark me-2" onClick={() => incrementHandler(product.id)}>
                          +
                        </button>
                        <span>{product.qty} $</span>
                        <button className="btn btn-sm btn-dark ms-2" onClick={() => decrementHandler(product.id, product.qty)}>
                          -
                        </button>
                      </td>
                      <td className="align-middle">{product.price * product.qty} $</td>
                      <td className="align-middle" style={{ width: '15%' }}>
                        <button className="btn btn-danger btn-sm" onClick={() => removeHandler(product.id)}>delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td>
                      <span className="btn btn-dark" onClick={clearHandler}>Clear Cart</span>
                    </td>
                    <td colSpan="2" className="hidden-xs"></td>
                    <td className="hidden-xs text-center" style={{ width: '15%' }}>
                      <strong>Total : {TotalPrice()} $</strong>
                    </td>
                    <td>
                      <Link to="/" className="btn btn-success btn-block">Checkout</Link>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>

      ) :

        <div className='container text-center'>
          <h1 className='text-center'>Cart Is Empty</h1>
          <Link to='/product' className='btn btn-outline-dark mt-5'>Products Page</Link>
        </div>

      }
    </>
  )
}
