import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart } from 'lucide-react'; // Optional: for better icons

const Card = ({ title, img, id, price }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/product/${id}`)}
      className="group cursor-pointer rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-white flex flex-col hover:scale-[1.02]"
    >
      {/* Product Image */}
      <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 overflow-hidden">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <span className="absolute top-2 right-2 bg-white text-red-500 p-2 rounded-full shadow hover:bg-red-100 transition">
          <Heart size={18} />
        </span>
      </div>

      {/* Card Content */}
      <div className="p-4 sm:p-5 md:p-6 space-y-1 sm:space-y-2">
        {/* Price */}
        <div className="flex justify-between items-center">
          <span className="text-lg sm:text-xl font-bold text-orange-500">
            ${price}
          </span>
          <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-full font-medium hidden sm:inline">
            New
          </span>
        </div>

        {/* Title */}
        <h2 className="text-base sm:text-lg font-semibold text-gray-800 line-clamp-2">
          {title}
        </h2>

        {/* Metadata */}
        <div className="text-sm text-gray-500 flex justify-between">
          <span>📍 Karachi</span>
          <span>🕒 5 days ago</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
