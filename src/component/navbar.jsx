import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { search } from '../config/redux/reducer/cartSlice';

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.carts);
  const [location, setLocation] = useState('Detecting...');
  const dispatch = useDispatch();
  const debounceRef = useRef(null);

  const handleChange = (e) => {
    const value = e.target.value;
    clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      dispatch(search(value));
    }, 300); // Debounce delay (optional)
  };

  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => {
        setLocation(`${data.city}, ${data.country_name}`);
      })
      .catch(() => setLocation('Location unavailable'));
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 bg-white z-10 shadow-md">
      {/* Top Navbar */}
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-3xl font-bold">OLX</Link>
        </div>

        {/* Mobile Dropdown */}
        <div className="flex-none lg:hidden">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link to="/">HOME</Link></li>
              <li><Link to="/about">ABOUT</Link></li>
              <li><Link to="/products">PRODUCTS</Link></li>
              <li><Link to="/contact">CONTACT</Link></li>
              <li><Link to="/cart">CART ({cartItems.length})</Link></li>
              <li><Link to="/signup">SIGN UP</Link></li>
            </ul>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/about">ABOUT</Link></li>
            <li><Link to="/products">PRODUCTS</Link></li>
            <li><Link to="/contact">CONTACT</Link></li>
            <li><Link to="/cart">CART ({cartItems.length})</Link></li>
            <li><Link to="/signup">SIGN UP</Link></li>
          </ul>
        </div>
      </div>

      {/* Secondary Nav */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between px-4 py-3 bg-gray-100 gap-3">
        {/* Location */}
        <div className="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 1024 1024">
            <path d="M512 85.33c211.75 0 384 172.27 384 384 0 200.58-214.8 392.34-312.66 469.34H440.68C342.83 861.67 128 669.9 128 469.33c0-211.73 172.27-384 384-384zm0 85.34c-164.67 0-298.67 133.97-298.67 298.66 0 160.02 196.89 340.53 298.46 416.6 74.81-56.72 298.88-241.32 298.88-416.6 0-164.69-133.98-298.66-298.67-298.66zm0 127.99c94.1 0 170.67 76.56 170.67 170.67s-76.56 170.66-170.66 170.66-170.67-76.56-170.67-170.66S417.9 298.66 512 298.66zm0 85.33c-47.06 0-85.33 38.28-85.33 85.34s38.27 85.33 85.34 85.33 85.33-38.27 85.33-85.33-38.27-85.34-85.33-85.34z" />
          </svg>
          <h1 className="text-sm lg:text-base font-medium">{location}</h1>
        </div>

        {/* Search */}
        <div className="flex w-full lg:w-[40%] items-center gap-3">
          <input
            type="text"
            placeholder="Find Mobile, Cars..."
            className="input input-bordered w-full"
            onChange={handleChange}
          />
         
         <Link to={'/search'}> <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT75SELy7I8F_vR2KQwSl9kI92TgoGW26UtSA&s"
            alt="Search Icon"
            className="w-6 h-6"
             />
            </Link> 
        </div>

        {/* Login / Sell */}
        <div className="flex items-center gap-4">
          <span className="font-medium cursor-pointer">Login</span>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold">
            + SELL
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
