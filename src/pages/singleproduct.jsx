import React from 'react'
import { useParams } from 'react-router-dom'
import { addcarts } from '../config/redux/reducer/cartSlice'
import { useDispatch } from 'react-redux'
import useFetch from './hooks/useFetch'
import Swal from 'sweetalert2' // ✅ Import SweetAlert2

function showAlert() {
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Product added to cart!",
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
      <h1 className='flex justify-center h-[80vh] items-center text-3xl font-bold'>
        LOADING <span className="loading loading-infinity loading-xl"></span>
      </h1>
    )
  }

  if (error) {
    return (
      <h1 className='flex justify-center w-[80vh] m-auto h-[80vh] items-center text-1xl font-bold'>
        ERROR <br /><br />
        1. Check Your Internet Connection<br />
        2. Server Error<br />
        3. Invalid Input<br />
        4. Try Refreshing the Page
      </h1>
    )
  }

  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-24 mt-[70px]">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 xl:w-1/3 p-4">
          <img
            src={data.thumbnail}
            alt={data.title}
            className="w-full h-full object-cover object-center rounded-lg shadow-md"
          />
        </div>
        <div className="w-full md:w-1/2 xl:w-2/3 p-4">
          <h1 className="text-3xl font-bold mb-2">{data.title}</h1>
          <p className="text-lg font-semibold mb-4">${data.price}</p>
          <p className="text-lg mb-4">{data.description}</p>
          <div className="flex flex-wrap -mx-2 mb-4">
            <div className="w-full md:w-1/2 xl:w-1/3 p-2">
              <h2 className="text-lg font-bold mb-2">Brand:</h2>
              <p className="text-lg">{data.brand}</p>
            </div>
            <div className="w-full md:w-1/2 xl:w-1/3 p-2">
              <h2 className="text-lg font-bold mb-2">Category:</h2>
              <p className="text-lg">{data.category}</p>
            </div>
          </div>
          <button
            onClick={() => {
              dispatch(addcarts(data))
              showAlert()
            }}
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-lg"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default SingleProduct
