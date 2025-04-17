import React from 'react'
import Banner from '../component/Banner'
import Icon from '../component/Icon'
import useFetch from './hooks/useFetch'
import Card from '../component/card'
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
    <>
    <div className='mt-[130px]'>

      <Banner img={'https://images.olx.com.pk/thumbnails/527654309-800x600.webp'}  />

      <div className="flex flex-wrap w-[90%] sm:w-[95%] my-8 mx-auto gap-6 justify-center">
        {[
          { path: 'mobile', img: "https://www.olx.com.pk/assets/mobiles.8c768c96bfde33f18fcf5af2a8b9cf71.png" },
          { path: 'vehical', img: "https://www.olx.com.pk/assets/vehicles.29fb808d5118f0db56f68a39ce5392e2.png" },
          { img: "https://www.olx.com.pk/assets/property-for-sale.e3a00dbfdaa69fe5f713665f1069502f.png" },
          { img: "https://www.olx.com.pk/assets/property-for-rent.8436595fbaa90d47f0178006f57090a8.png" },
          { path: 'electronic', img: "https://www.olx.com.pk/assets/electronics-home-appliances.46e034dd8adca44625c2c70e4d1b5984.png" },
          { path: 'bike', img: "https://www.olx.com.pk/assets/bikes.4dcd02c49b2b83aa5b4d629d1e2b383e.png" },
          { img: "https://www.olx.com.pk/assets/business-industrial-agriculture.704a6ffb9081bc94b11c102cc613670f.png" },
          { img: "https://www.olx.com.pk/assets/services.dc6aef196c0403dc61b0ee813f66fa5b.png" },
          { img: "https://www.olx.com.pk/assets/jobs.79e6136dda02111cf8e7afe26b9e0f93.png" },
          { img: "https://www.olx.com.pk/assets/animals.62d396e85f7523dbc8ff23889fdd5c31.png" },
          { path: 'furniture', img: "https://www.olx.com.pk/assets/furniture-home-decor.66bcf157a53ea4c736a5b0af41219475.png" },
          { path: 'fashion', img: "https://www.olx.com.pk/assets/fashion-beauty.dd2cf7638c29b0e5c084a6673dd94dd7.png" },
          { img: "https://www.olx.com.pk/assets/books-sports-hobbies.6fee8d841b332d65a10f050f4a2ee1c8.png" },
          { img: "https://www.olx.com.pk/assets/kids.cd8d8864804f1c35dd6a7df68268a48d.png" },
        ].map((item, i) => (
          item.path ? (
            <Link to={item.path} key={i}>
              <Icon Immg={item.img} title={"MOBILE"} />
            </Link>
          ) : (
            <Icon key={i} Immg={item.img} title={"MOBILE"} />
          )
        ))}
      </div>

      <div className='flex flex-wrap gap-6 justify-center items-center w-[90%] my-8 mx-auto'>
        {data?.products?.map((item) => (
          <Card key={item.id} id={item.id} title={item.title} img={item.thumbnail} />
        ))}
      </div>

      <Banner img={'https://www.olx.com.pk/assets/olxMobileApp.f5579f77e849b600ad60857e46165516.webp'} />
        </div>
    </>
  )
}

export default Home
