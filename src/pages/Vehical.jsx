import { useEffect } from 'react'
import useFetch from './hooks/useFetch.jsx'
import Card from '../component/Card.jsx'
function Vehical() {
const [load , error , data] = useFetch('https://dummyjson.com/products/category/vehicle')
 if (load) {
    return (
      <div className="flex justify-center items-center h-[80vh] text-3xl font-bold">
        LOADING <span className="loading loading-infinity loading-xl ml-4"></span>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-[80vh] text-center px-6">
        <div className="text-red-600 text-lg max-w-xl space-y-4">
          <h1 className="text-3xl font-bold">ERROR</h1>
          <ul className="list-disc list-inside text-left text-base text-gray-700">
            <li>Check your internet connection.</li>
            <li>Server error. Please try again later.</li>
            <li>Invalid input. Double-check the request URL.</li>
            <li>Try refreshing the page.</li>
          </ul>
          <p className="text-sm text-gray-500">If the issue persists, contact support for assistance.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-10 mtt">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Vehical</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data?.products?.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            img={item.thumbnail}
            price={item.price}
          />
        ))}
      </div>
    </div>
  )
}
export default Vehical