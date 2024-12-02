import React, { useState } from 'react';
import { Search, ShoppingCart, Menu, User, PlusCircle } from 'lucide-react';
import Modal from './Modal';
import AuthModal from './AuthModal';
import SellForm from './SellForm';
import { useProducts } from '../context/ProductContext';

export default function Navbar() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isSellOpen, setIsSellOpen] = useState(false);
  const { searchProducts } = useProducts();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    searchProducts(e.target.value);
  };

  return (
    <>
      <nav className="bg-white shadow-lg fixed w-full top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-gray-900">MotoMarket</span>
            </div>
            
            <div className="hidden md:flex flex-1 max-w-2xl mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search parts, gear, and more..."
                  onChange={handleSearch}
                  className="w-full px-4 py-2 pl-10 pr-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button 
                className="hidden md:flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors"
                onClick={() => setIsSellOpen(true)}
              >
                <PlusCircle className="h-5 w-5" />
                <span>Sell Part</span>
              </button>
              
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <ShoppingCart className="h-6 w-6 text-gray-700" />
              </button>
              
              <button 
                className="p-2 hover:bg-gray-100 rounded-full"
                onClick={() => setIsAuthOpen(true)}
              >
                <User className="h-6 w-6 text-gray-700" />
              </button>
              
              <button className="md:hidden p-2 hover:bg-gray-100 rounded-full">
                <Menu className="h-6 w-6 text-gray-700" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <Modal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        title="Welcome to MotoMarket"
      >
        <AuthModal onClose={() => setIsAuthOpen(false)} />
      </Modal>

      <Modal
        isOpen={isSellOpen}
        onClose={() => setIsSellOpen(false)}
        title="List Your Part"
      >
        <SellForm onClose={() => setIsSellOpen(false)} />
      </Modal>
    </>
  );
}