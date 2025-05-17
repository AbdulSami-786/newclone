import React from 'react'
import Banner from '../component/Banner.jsx'
import Icon from '../component/Icon.jsx'
import useFetch from './hooks/useFetch.jsx'
import Card from '../component/Card.jsx'
import { Link } from 'react-router-dom'

function Home() {
  const [load, error, data] = useFetch('https://dummyjson.com/products')

  if (load) {
    return (
      <h1 className='flex justify-center h-[80vh] items-center text-3xl font-bold'>
        LOADING <span className="loading loading-infinity loading-xl ml-4"></span>
      </h1>
    )
  }

  if (error) {
    return (
      <h1 className='flex flex-col justify-center items-center text-center h-[80vh] w-full px-4 text-lg font-medium'>
        ERROR <br /><br />
        1. Check Your Internet Connection.<br />
        2. Server Error. Try again later.<br />
        3. Invalid Input. Check for typos.<br />
        4. Try Refreshing the Page.<br />
        <br />
        If the issue persists, please contact our support team.
      </h1>
    )
  }

  return (
    <div className='mtt space-y-12'>

      {/* Banner */}
      <Banner img={'https://images.olx.com.pk/thumbnails/527654309-800x600.webp'} />

      {/* Categories */}
      <section className="w-[90%] sm:w-[95%] mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center">Browse by Category</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-6">
          {[
            { path: 'mobile', img: "https://www.olx.com.pk/assets/mobiles.8c768c96bfde33f18fcf5af2a8b9cf71.png", title: "Mobile" },
            { path: 'vehical', img: "https://www.olx.com.pk/assets/vehicles.29fb808d5118f0db56f68a39ce5392e2.png", title: "Vehical" },
            { img: "https://www.olx.com.pk/assets/property-for-sale.e3a00dbfdaa69fe5f713665f1069502f.png", title: "Home" },
            { img: "https://www.olx.com.pk/assets/property-for-rent.8436595fbaa90d47f0178006f57090a8.png", title: "Rented" },
            { path: 'electronic', img: "https://www.olx.com.pk/assets/electronics-home-appliances.46e034dd8adca44625c2c70e4d1b5984.png", title: "Electronic" },
            { path: 'bike', img: "https://www.olx.com.pk/assets/bikes.4dcd02c49b2b83aa5b4d629d1e2b383e.png", title: "Bike" },
            { img: "https://www.olx.com.pk/assets/business-industrial-agriculture.704a6ffb9081bc94b11c102cc613670f.png", title: "Truckter" },
            { img: "https://www.olx.com.pk/assets/services.dc6aef196c0403dc61b0ee813f66fa5b.png", title: "Service" },
            { img: "https://www.olx.com.pk/assets/jobs.79e6136dda02111cf8e7afe26b9e0f93.png", title: "Jobs" },
            { img: "https://www.olx.com.pk/assets/animals.62d396e85f7523dbc8ff23889fdd5c31.png", title: "Animal" },
            { path: 'furniture', img: "https://www.olx.com.pk/assets/furniture-home-decor.66bcf157a53ea4c736a5b0af41219475.png", title: "Furniture" },
            { path: 'fashion', img: "https://www.olx.com.pk/assets/fashion-beauty.dd2cf7638c29b0e5c084a6673dd94dd7.png", title: "Fushion" },
            { img: "https://www.olx.com.pk/assets/books-sports-hobbies.6fee8d841b332d65a10f050f4a2ee1c8.png", title: "Book" },
            { img: "https://www.olx.com.pk/assets/kids.cd8d8864804f1c35dd6a7df68268a48d.png", title: "Toys" },
          ].map((item, i) => (
            item.path ? (
              <Link to={item.path} key={i}>
                <div className="bg-white rounded-xl shadow-md p-4 hover:scale-105 transition-transform duration-200 cursor-pointer flex flex-col items-center">
                  <img src={item.img} alt="category" className="w-16 h-16 object-contain mb-2" />
                  <p className="text-sm font-medium text-center text-gray-700">{item.title}</p>
                </div>
              </Link>
            ) : (
              <div key={i} className="bg-white rounded-xl shadow-md p-4 hover:scale-105 transition-transform duration-200 cursor-pointer flex flex-col items-center">
                <img src={item.img} alt="category" className="w-16 h-16 object-contain mb-2" />
                <p className="text-sm font-medium text-center text-gray-700">{item.title}</p>
              </div>
            )
          ))}
        </div>
      </section>

      {/* Product Cards */}
      <section className="w-[90%] mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Trending Products</h2>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
      </section>

      {/* Features Section */}
      <section className="bg-gray-100 py-12 px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <Icon />
            <h3 className="text-xl font-semibold mt-4">Wide Range</h3>
            <p>We offer a wide range of categories and products to fit all your needs.</p>
          </div>
          <div>
            <Icon />
            <h3 className="text-xl font-semibold mt-4">Secure Deals</h3>
            <p>Your safety is our top priority. Enjoy trusted and verified listings.</p>
          </div>
          <div>
            <Icon />
            <h3 className="text-xl font-semibold mt-4">Easy to Use</h3>
            <p>A smooth experience with a mobile-first design and fast navigation.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-12 text-center px-4">
        <h2 className="text-3xl font-bold mb-6">What Our Users Say</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {['Great experience!', 'Super fast and easy to use!', 'Best platform for deals!'].map((msg, idx) => (
            <div key={idx} className="bg-gray-100 rounded-xl p-6 shadow">
              <p className="italic text-gray-700 mb-4">"{msg}"</p>
              <p className="font-semibold text-gray-900">— User {idx + 1}</p>
            </div>
          ))}
        </div>
      </section>

      {/* App Promo Banner */}
      <Banner img={'https://www.olx.com.pk/assets/olxMobileApp.f5579f77e849b600ad60857e46165516.webp'} />

      {/* Newsletter */}
      <section className="bg-indigo-600 text-white py-12 text-center px-4">
        <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
        <p className="mb-6">Subscribe to our newsletter to get the latest offers and updates.</p>
        <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-md w-full text-black"
          />
          <button type="submit" className="bg-white text-indigo-600 px-4 py-2 rounded-md font-semibold hover:bg-gray-200">
            Subscribe
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 text-center text-sm">
        © {new Date().getFullYear()} OLX Clone. All rights reserved.
      </footer>
    </div>
  )
}

export default Home
