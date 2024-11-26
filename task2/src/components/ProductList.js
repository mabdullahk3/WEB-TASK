import React, { useEffect } from 'react';
import { useStore } from '../store/useStore';
import ProductCard from './ProductCard';
import SearchBar from './SearchBar';

const ProductList = () => {
  const { products, fetchProducts } = useStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div className="product-list">
      <SearchBar />
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
