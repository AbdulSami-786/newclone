import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addcarts } from '../config/redux/reducer/cartSlice'
import useFetch from './hooks/useFetch.jsx'
import Swal from 'sweetalert2'
import { FaTag, FaLayerGroup, FaStar, FaClock } from 'react-icons/fa'

function showAlert() {
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Product added to cart!',
    showConfirmButton: false,
    timer: 1500,
  })
}

function SingleProduct() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [load, error, data] = useFetch(`https://dummyjson.com/products/${id}`)

  if (load)
    return (
      <div className="flex justify-center items-center h-[80vh] text-2xl font-bold">
        LOADING <span className="loading loading-infinity loading-lg ml-3"></span>
      </div>
    )

  if (error)
    return (
      <div className="flex flex-col justify-center items-center text-center h-[80vh] px-6 text-red-500">
        <h1 className="text-3xl font-bold mb-4">Oops! Something went wrong</h1>
        <p className="text-base text-gray-500">Check your connection or try refreshing the page.</p>
      </div>
    )

  return (
    <div className="container mx-auto px-4 py-10 mtt">
      <div className="bg-white shadow-xl rounded-2xl p-6 md:p-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        
        {/* Product Image */}
        <div className="flex justify-center">
          <img
            src={data.thumbnail}
            alt={data.title}
            className="w-[240px] h-[240px] md:w-[300px] md:h-[300px] object-cover rounded-xl shadow-md hover:scale-105 transition duration-300"
          />
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">{data.title}</h1>
          <p className="text-2xl md:text-3xl font-semibold text-orange-600">${data.price}</p>
          <p className="text-gray-700 text-base leading-relaxed">{data.description}</p>

          {/* Rating and Stock */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center text-yellow-500 text-lg">
              {[...Array(Math.floor(data.rating))].map((_, i) => <FaStar key={i} />)}
              <span className="ml-2 text-gray-600 text-sm">({data.rating} / 5)</span>
            </div>
            <div className={`text-sm font-medium ${data.stock > 0 ? 'text-green-600' : 'text-red-500'}`}>
              {data.stock > 0 ? `${data.stock} in stock` : 'Out of stock'}
            </div>
          </div>

          {/* Brand, Category, Created At */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 text-sm">
            <div className="flex items-start gap-2">
              <FaTag className="text-pink-500 mt-1" />
              <div>
                <p className="text-gray-400 text-xs">Brand</p>
                <p className="font-medium text-gray-800">{data.brand}</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <FaLayerGroup className="text-blue-500 mt-1" />
              <div>
                <p className="text-gray-400 text-xs">Category</p>
                <p className="font-medium text-gray-800 capitalize">{data.category}</p>
              </div>
            </div>
            <div className="flex items-start gap-2 col-span-1 sm:col-span-2">
              <FaClock className="text-gray-500 mt-1" />
              <div>
                <p className="text-gray-400 text-xs">Created At</p>
                <p className="font-medium text-gray-700">{data.createdAt || 'Feb 5, 2025'}</p>
              </div>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={() => {
              if (data.stock > 0) {
                dispatch(addcarts(data))
                showAlert()
              } else {
                Swal.fire({
                  icon: 'warning',
                  title: 'Out of Stock',
                  text: 'Sorry, this product is currently not available.',
                })
              }
            }}
            className="w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-bold text-lg transition duration-300"
          >
            Add to Cart 🛒
          </button>
        </div>
      </div>
    </div>
  )
}

export default SingleProduct
