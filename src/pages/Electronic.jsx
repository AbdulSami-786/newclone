import { useEffect } from 'react'
import useFetch from './hooks/useFetch.jsx'
import Card from '../component/Card.jsx'
function Electronic() {
const [load , error , data] = useFetch('https://dummyjson.com/products/category/laptops')
const [loading , err , dat] = useFetch('https://dummyjson.com/products/category/mobile-accessories')

if(load && loading){
  return <h1 className='flex justify-center h-[80vh] items-center text-3xl font-bold'>LOADING <span className="loading loading-infinity loading-xl"></span></h1>
}
if(error && err){
  return <h1 className='flex justify-center w-[80vh] m-auto h-[80vh] items-center text-1xl font-bold'>ERROR <br /><br />
  1. Check   Your Internet Connection: Ensure that your internet connection is stable and working properly.
2. Server Error: There might be a server-side issue. Please try again later or contact our support team.
3. Invalid Input: Make sure you have entered the correct information. Check for any typos or invalid characters.
4. Try Refreshing the Page: Sometimes, a simple page refresh can resolve the issue. Try refreshing the page and see if the error persists.

If the issue persists, please contact our support team for further assistance</h1>
}
  return (
    <>
    {console.log(data)}
    <div className='flex flex-wrap gap-4 content-center items-center m-10 marg mtt'>
    {data && data.products && data.products.map((item) => {
        return (
            <Card key={item.id} id={item.id} title={item.title} description={item.description} img={item.thumbnail} price={item.price}/>
        );
    })}

  {console.log(dat)}
    {data && data.products && data.products.map((itemm) => {
        return (
            <Card key={itemm.id} id={itemm.id} title={itemm.title} description={itemm.description} img={itemm.thumbnail} price={itemm.price}/>
        );
    })}
    </div>
 
    </>
);
}

export default Electronic