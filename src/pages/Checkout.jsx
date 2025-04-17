import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Checkout() {
  const cartItems = useSelector((state) => state.cart?.carts || [])
  const total = cartItems.reduce(
    (acc, item) => acc + item.data.price * item.quantity,
    0
  )
  const navigate = useNavigate()

  const [form, setForm] = useState({
    fullName: '',
    email: '',
    address: '',
    city: '',
    zip: '',
    payment: 'cod',
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Order placed:', { ...form, cartItems, total })
    alert('✅ Order placed successfully!')
    navigate('/')
  }

  return (
    <div className="container mx-auto p-4 mt-[70px]">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Shipping Info */}
        <div className="md:col-span-2 space-y-4">
          <h2 className="text-xl font-semibold mb-2">Shipping Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={form.fullName}
              onChange={handleChange}
              className="input input-bordered w-full"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="input input-bordered w-full"
              required
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={form.address}
              onChange={handleChange}
              className="input input-bordered w-full"
              required
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={form.city}
              onChange={handleChange}
              className="input input-bordered w-full"
              required
            />
            <input
              type="text"
              name="zip"
              placeholder="ZIP Code"
              value={form.zip}
              onChange={handleChange}
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Payment Method */}
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">Payment Method</h2>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="payment"
                value="cod"
                checked={form.payment === 'cod'}
                onChange={handleChange}
                className="radio"
              />
              <span>Cash on Delivery</span>
            </label>
            <label className="flex items-center space-x-2 mt-2">
              <input
                type="radio"
                name="payment"
                value="card"
                checked={form.payment === 'card'}
                onChange={handleChange}
                className="radio"
                disabled
              />
              <span className="text-gray-400">Credit/Debit Card (Coming Soon)</span>
            </label>
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md h-fit">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          {cartItems.length === 0 ? (
            <p className="text-gray-600">Your cart is empty.</p>
          ) : (
            <>
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between mb-2">
                  <div>
                    <p className="font-medium">{item.data.title}</p>
                    <p className="text-sm text-gray-500">
                      ${item.data.price} x {item.quantity}
                    </p>
                  </div>
                  <p className="font-semibold">
                    ${item.data.price * item.quantity}
                  </p>
                </div>
              ))}
              <hr className="my-2" />
              <div className="flex justify-between font-bold text-lg mb-4">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-lg"
              >
                Place Order
              </button>
            </>
          )}
        </div>
      </form>
    </div>
  )
}

export default Checkout
