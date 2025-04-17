import React from 'react'
import { useParams } from 'react-router-dom'
import { addcarts } from '../config/redux/reducer/cartSlice'
import { useDispatch } from 'react-redux'
import useFetch from './hooks/useFetch.jsx'
import { FaTag, FaLayerGroup } from 'react-icons/fa'
import Swal from 'sweetalert2'

function showAlert() {
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Product added to cart!',
    showConfirmButton: false,
    timer: 1500
  })
}

function SingleProduct() {
  const dispatch = useDispatch()
  const params = useParams()
  const [load, error, data] = useFetch(`https://dummyjson.com/products/${params.id}`)

  if (load) {
    return (
      <div className="flex justify-center items-center h-[80vh] text-2xl font-bold">
        LOADING <span className="loading loading-infinity loading-lg ml-3"></span>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center text-center h-[80vh] px-6 text-red-500">
        <h1 className="text-3xl font-bold mb-4">Oops! Something went wrong</h1>
        <p className="text-base text-gray-500">Check your connection or try refreshing the page.</p>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-10 mtt">
      <div className="bg-white/30 backdrop-blur-md shadow-xl rounded-2xl p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center border border-gray-200">
        {/* Product Image */}
        <div className="w-full flex justify-center">
          <img
            src={data.thumbnail}
            alt={data.title}
            className="w-[220px] h-[220px] object-cover rounded-2xl border shadow-lg transition-transform hover:scale-105 duration-300"
          />
        </div>

        {/* Product Details */}
        <div className="space-y-5">
          <h1 className="text-4xl font-extrabold text-gray-800">{data.title}</h1>
          <p className="text-2xl font-semibold text-purple-600">${data.price}</p>
          <p className="text-gray-600 text-sm leading-relaxed">{data.description}</p>

          <div className="grid grid-cols-2 gap-6 text-sm mt-4">
            <div className="flex items-center gap-2">
              <FaTag className="text-pink-500" />
              <div>
                <span className="text-gray-400">Brand</span>
                <p className="text-gray-700 font-medium">{data.brand}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <FaLayerGroup className="text-blue-500" />
              <div>
                <span className="text-gray-400">Category</span>
                <p className="text-gray-700 font-medium capitalize">{data.category}</p>
              </div>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={() => {
              dispatch(addcarts(data))
              showAlert()
            }}
            className="mt-6 bg-[#ff6900] text-white px-6 py-3 rounded-xl font-bold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 w-full sm:w-auto"
          >
            Add to Cart 💖
          </button>
        </div>
      </div>
    </div>
  )
}

export default SingleProduct
