import React, { useState } from 'react';
import { useStore } from '../store/useStore';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const { products } = useStore();

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search products"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="filtered-products">
        {filteredProducts.map((product) => (
          <div key={product.id}>{product.title}</div>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
