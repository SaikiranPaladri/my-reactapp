import React from 'react';
import Navbar from './components/Navbar';
import CategoryFilter from './components/CategoryFilter';
import ProductCard from './components/ProductCard';
import { ProductProvider, useProducts } from './context/ProductContext';

function ProductGrid() {
  const { filteredProducts } = useProducts();
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))
      ) : (
        <div className="col-span-full text-center py-8 text-gray-500">
          No products found. Try a different search or be the first to list a part!
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <ProductProvider>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        
        <main className="pt-16">
          <CategoryFilter />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <ProductGrid />
          </div>
        </main>
      </div>
    </ProductProvider>
  );
}

export default App;