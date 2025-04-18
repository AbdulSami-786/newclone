import React from 'react';
import { useSelector } from 'react-redux';
import useFetch from './hooks/useFetch.jsx'; // ✅ Make sure this path is correct
import Card from '../component/Card.jsx';     // ✅ Make sure this path is correct

function Search() {
  const searchQuery = useSelector((state) => state.cart.searchQuery); // Correctly accessing searchQuery
  const [loading, error, data] = useFetch(`https://dummyjson.com/products/search?q=${searchQuery}`);

  if (loading) {
    return (
      <h1 className='flex justify-center h-[80vh] items-center text-3xl font-bold'>
        LOADING <span className="loading loading-infinity loading-xl ml-4"></span>
      </h1>
    );
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
    );
  }

  // Optional: Handle no results case
  if (data?.products?.length === 0) {
    return (
      <div className='flex justify-center items-center h-[80vh] text-xl font-semibold text-gray-500 mtt'>
        No products found for "<span className='text-black font-bold mx-1'>{searchQuery}</span>"
      </div>
    );
  }

  return (
    <div className="grid gap-6 p-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mtt" >
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
  );
}

export default Search;
