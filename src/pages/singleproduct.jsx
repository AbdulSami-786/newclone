import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addcarts } from '../config/redux/reducer/cartSlice'
import useFetch from './hooks/useFetch.jsx'
import Swal from 'sweetalert2'
import { FaTag, FaLayerGroup, FaStar, FaClock, FaHeart, FaShareAlt } from 'react-icons/fa'

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
  const [load, error, data] = useFetch(`https://dummyjson.com/products/${id}`)
  const [selectedImg, setSelectedImg] = useState(null)

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

  const handleImageClick = (imgUrl) => {
    setSelectedImg(imgUrl)
  }

  return (
    <div className="container mx-auto px-4 py-10 mtt">
      <div className="bg-white shadow-xl rounded-2xl p-6 md:p-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

        {/* Image Gallery */}
        <div>
          <img
            src={selectedImg || data.thumbnail}
            alt={data.title}
            className="w-full h-[300px] md:h-[400px] object-cover rounded-xl shadow-md"
          />
          <div className="flex gap-2 mt-4 overflow-auto">
            {[data.thumbnail, ...(data.images || [])].slice(0, 5).map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`thumb-${index}`}
                onClick={() => handleImageClick(img)}
                className={`w-20 h-20 object-cover rounded-md border-2 cursor-pointer transition duration-200 ${
                  (selectedImg || data.thumbnail) === img
                    ? 'border-orange-500 scale-105'
                    : 'border-gray-300 hover:scale-105'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-5">
          <h1 className="text-3xl font-bold text-gray-900">{data.title}</h1>
          <p className="text-2xl text-orange-600 font-semibold">${data.price}</p>
          <p className="text-gray-700 text-base leading-relaxed">{data.description}</p>

          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center text-yellow-500 text-lg">
              {[...Array(Math.floor(data.rating))].map((_, i) => <FaStar key={i} />)}
              <span className="ml-2 text-gray-600 text-sm">({data.rating} / 5)</span>
            </div>
            <div className={`text-sm font-medium ${data.stock > 0 ? 'text-green-600' : 'text-red-500'}`}>
              {data.stock > 0 ? `${data.stock} in stock` : 'Out of stock'}
            </div>
          </div>

          {/* Extra Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2 text-sm">
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
            <div className="flex items-start gap-2 sm:col-span-2">
              <FaClock className="text-gray-500 mt-1" />
              <div>
                <p className="text-gray-400 text-xs">Created At</p>
                <p className="font-medium text-gray-700">{data.createdAt || 'Feb 5, 2025'}</p>
              </div>
            </div>
          </div>

          <div className="mt-4 text-sm space-y-1 text-gray-600">
            <p><strong>Warranty:</strong> 6 months brand warranty</p>
            <p><strong>Delivery:</strong> Free shipping in 3-5 days</p>
            <p><strong>Return Policy:</strong> 7-day return available</p>
          </div>

          {/* Actions */}
          <div className="flex gap-4 mt-6">
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
              className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-bold text-lg transition"
            >
              Add to Cart 🛒
            </button>
            <button className="px-4 py-3 rounded-xl bg-gray-200 hover:bg-gray-300 text-gray-800 transition text-xl">
              <FaHeart />
            </button>
            <button className="px-4 py-3 rounded-xl bg-gray-200 hover:bg-gray-300 text-gray-800 transition text-xl">
              <FaShareAlt />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleProduct
