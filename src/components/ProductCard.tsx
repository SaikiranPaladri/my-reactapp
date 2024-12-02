import React from 'react';
import { Heart } from 'lucide-react';

interface ProductCardProps {
  title: string;
  price: number;
  image: string;
  condition: string;
  location: string;
}

export default function ProductCard({ title, price, image, condition, location }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover"
        />
        <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
          <Heart className="h-5 w-5 text-gray-600" />
        </button>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 truncate">{title}</h3>
        <p className="text-xl font-bold text-blue-600 mt-1">${price.toLocaleString()}</p>
        
        <div className="mt-2 flex items-center justify-between text-sm text-gray-500">
          <span className="bg-gray-100 px-2 py-1 rounded-full">{condition}</span>
          <span>{location}</span>
        </div>
      </div>
    </div>
  );
}