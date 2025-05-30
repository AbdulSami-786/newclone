import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from '../firebase/Firebase';

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
    contact: '',
    address: '',
    city: '',
    zip: '',
    payment: 'cod',
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  // Validation functions
  const isValidFullName = (name) => /^[A-Za-z\s]{3,50}$/.test(name.trim())
  const isValidEmail = (email) => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.trim())
  const isValidPhoneNumber = (phone) => {
    const phoneRegex = /^0[1-9][0-9]{9}$/;
    const scamPatterns = [
      /^(\d)\1+$/, // like 00000000000 or 11111111111
      /0123456789/,
      /9876543210/
    ];
    if (!phoneRegex.test(phone)) return false;
    for (let pattern of scamPatterns) {
      if (pattern.test(phone)) return false;
    }
    return true;
  }
  const isValidAddress = (address) => address.trim().length >= 5
  const isValidCity = (city) => /^[A-Za-z\s]{2,50}$/.test(city.trim())
  const isValidZip = (zip) => /^\d{5,6}$/.test(zip.trim())

  const validateForm = () => {
    if (!isValidFullName(form.fullName)) {
      alert("❌ Please enter a valid Full Name (only letters, 3-50 chars).")
      return false
    }
    if (!isValidEmail(form.email)) {
      alert("❌ Please enter a valid Email address.")
      return false
    }
    if (!isValidPhoneNumber(form.contact)) {
      alert("❌ Invalid or scam Phone Number detected.")
      return false
    }
    if (!isValidAddress(form.address)) {
      alert("❌ Address must be at least 5 characters long.")
      return false
    }
    if (!isValidCity(form.city)) {
      alert("❌ City name must be only letters, 2-50 characters.")
      return false
    }
    if (!isValidZip(form.zip)) {
      alert("❌ Please enter a valid ZIP code (5 or 6 digits).")
      return false
    }
    return true
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) return;

    try {
      await addDoc(collection(db, "posts"), {
        formData: form,
        cartItems: cartItems,
        totalAmount: total,
        createdAt: serverTimestamp(),
      });
      console.log('Order placed:', { ...form, cartItems, total })
      alert('✅ Order placed successfully!')
      navigate('/')
    } catch (e) {
      console.error("Error adding document: ", e);
      alert('❌ Failed to place order. Please try again.')
    }
  }

  return (
    <div className="container mx-auto p-4 mtt">
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
              pattern="[A-Za-z\s]{3,50}"
              title="Full Name should be 3-50 letters only"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="input input-bordered w-full"
              pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
              title="Enter a valid email address"
              required
            />
            <input
              type="text"
              name="contact"
              placeholder="Contact Number"
              value={form.contact}
              onChange={handleChange}
              className="input input-bordered w-full"
             pattern="^0[1-9][0-9]{9}$"
              title="10-digit mobile number starting with 6-9"
              required
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={form.address}
              onChange={handleChange}
              className="input input-bordered w-full"
              minLength={5}
              title="Address must be at least 5 characters"
              required
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={form.city}
              onChange={handleChange}
              className="input input-bordered w-full"
              pattern="[A-Za-z\s]{2,50}"
              title="City should be 2-50 letters only"
              required
            />
            <input
              type="text"
              name="zip"
              placeholder="ZIP Code"
              value={form.zip}
              onChange={handleChange}
              className="input input-bordered w-full"
              pattern="\d{5,6}"
              title="ZIP code must be 5 or 6 digits"
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
