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
    <div className="container mx-auto px-4 py-8 mt-[100px]">
      <h1 className="text-3xl font-bold mb-6 text-center">Your Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center text-xl font-medium flex content-center w-[100%] items-center text-gray-600 h-[250px]">
          Your cart is empty 🛒
        </div>
      ) : (
        <>
          <div className="grid gap-6 mt-[100px]">
            {cartItems.map((item) => (
              <div key={item.id} className="flex flex-col md:flex-row items-center justify-between p-4 border rounded-xl shadow-md">
                <div className="flex items-center gap-4">
                  <img src={item.data.thumbnail} alt={item.data.title} className="w-24 h-24 object-cover rounded-lg" />
                  <div>
                    <h2 className="text-xl font-semibold">{item.data.title}</h2>
                    <p className="text-gray-600">${item.data.price} x {item.quantity} = ${item.data.price * item.quantity}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => dispatch(decreaseQty({ id: item.id }))}
                        className="bg-gray-300 hover:bg-gray-400 px-2 py-1 rounded text-lg font-bold"
                      >
                        −
                      </button>
                      <span className="text-lg">{item.quantity}</span>
                      <button
                        onClick={() => dispatch(increaseQty({ id: item.id }))}
                        className="bg-gray-300 hover:bg-gray-400 px-2 py-1 rounded text-lg font-bold"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => dispatch(removecart({ id: item.id }))}
                  className="mt-4 md:mt-0 bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="text-right mt-6">
            <h2 className="text-2xl font-bold">Total: ${getTotalPrice()}</h2>
            <Link to={'/checkout'}>
            <button className="mt-4 bg-green-600 hover:bg-green-800 text-white font-bold px-6 py-3 rounded-xl">
              Checkout
            </button>
            </Link>
          </div>
        </>
      )}
    </div>
  )
}

export default Cart
