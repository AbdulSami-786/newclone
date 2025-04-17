import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removecart, increaseQty, decreaseQty } from '../config/redux/reducer/cartSlice'
import { Link } from 'react-router-dom'

function Cart() {
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart.carts)

  const getTotalPrice = () => {
    return cartItems.reduce((acc, item) => acc + item.data.price * item.quantity, 0)
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-10 text-center text-primary">Your Cart 🛒</h1>

      {cartItems.length === 0 ? (
        <div className="text-center text-xl font-medium text-gray-500 flex flex-col items-center justify-center h-[300px]">
          <img
            src="https://cdn-icons-png.flaticon.com/512/102/102661.png"
            alt="Empty cart"
            className="w-20 h-20 mb-4 opacity-60"
          />
          Your cart is empty
        </div>
      ) : (
        <>
          {/* Items Grid */}
          <div className="grid gap-6 mtt">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row items-center justify-between gap-6 p-5 bg-base-100 rounded-xl shadow-lg"
              >
                {/* Product Info */}
                <div className="flex items-center gap-5 w-full md:w-[60%]">
                  <img
                    src={item.data.thumbnail}
                    alt={item.data.title}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <div>
                    <h2 className="text-xl font-semibold text-base-content">{item.data.title}</h2>
                    <p className="text-gray-500">
                      ${item.data.price} x {item.quantity} ={' '}
                      <span className="text-primary font-bold">
                        ${item.data.price * item.quantity}
                      </span>
                    </p>
                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2 mt-3">
                      <button
                        onClick={() => dispatch(decreaseQty({ id: item.id }))}
                        className="bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded text-lg font-bold"
                      >
                        −
                      </button>
                      <span className="text-lg font-medium">{item.quantity}</span>
                      <button
                        onClick={() => dispatch(increaseQty({ id: item.id }))}
                        className="bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded text-lg font-bold"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => dispatch(removecart({ id: item.id }))}
                  className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Total & Checkout */}
          <div className="mt-10 flex flex-col items-end">
            <div className="bg-base-100 shadow-md p-6 rounded-xl w-full md:w-1/2 lg:w-1/3 text-right">
              <h2 className="text-2xl font-bold mb-4">
                Total: <span className="text-primary">${getTotalPrice()}</span>
              </h2>
              <Link to="/checkout">
                <button className="w-full btn btn-success text-white text-lg font-semibold">
                  Proceed to Checkout
                </button>
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Cart
