import React, { createContext, useContext, useState } from 'react';

interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
  condition: string;
  location: string;
  description: string;
  category: string; // New category field
}

interface ProductContextType {
  products: Product[];
  addProduct: (product: Omit<Product, 'id'>) => void;
  searchProducts: (query: string) => void;
  filteredProducts: Product[];
  setCategory: (category: string) => void; // Function to update category filter
  category: string; // Store selected category
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export function ProductProvider({ children }: { children: React.ReactNode }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [category, setCategory] = useState<string>('All Parts'); // Default category to 'All Parts'

  // Add a product with a generated id
  const addProduct = (product: Omit<Product, 'id'>) => {
    const newProduct = {
      ...product,
      id: Date.now().toString(),
    };
    setProducts(prev => [newProduct, ...prev]);
    setFilteredProducts(prev => [newProduct, ...prev]);
  };

  // Search products by title or description
  const searchProducts = (query: string) => {
    const filtered = products.filter(product =>
      product.title.toLowerCase().includes(query.toLowerCase()) ||
      product.description.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  // Update filtered products based on selected category
  const filterByCategory = (category: string) => {
    if (category === 'All Parts') {
      setFilteredProducts(products); // Show all products if category is 'All Parts'
    } else {
      const filtered = products.filter(product => product.category === category);
      setFilteredProducts(filtered);
    }
  };

  // Set the category and filter products
  const handleCategoryChange = (category: string) => {
    setCategory(category);
    filterByCategory(category);
  };

  return (
    <ProductContext.Provider value={{
      products,
      addProduct,
      searchProducts,
      filteredProducts,
      setCategory: handleCategoryChange, // Pass category change handler
      category // Pass current category
    }}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProducts() {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
}
