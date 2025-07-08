// src/pages/ProductsPage.tsx

import { useState } from 'react';
import { useCart } from '../hooks/useCart';
import { Link } from 'react-router-dom';
import { products } from '../data/products'; // Import the real product list

export default function ProductsPage() {
  const { cartItems, addToCart } = useCart();

  // State for search bar and category dropdown
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');

  // Filter products by search text and selected category
  const filteredProducts = products.filter(product => {
    // Match category if selected, otherwise include all
    const matchesCategory =
      selectedCategory === 'All Categories' || product.category === selectedCategory;
    // Match if product name or description includes the search term (case-insensitive)
    const matchesSearch =
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.description.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8">
      {/* Page header with nav */}
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Local Market</h1>
        <nav className="space-x-6">
          <Link to="/" className="text-gray-600 hover:text-blue-500 font-medium">Home</Link>
          <Link to="/products" className="text-gray-600 hover:text-blue-500 font-medium">Products</Link>
          <Link to="/cart" className="text-gray-600 hover:text-blue-500 font-medium">
            Cart ({cartItems.length})
          </Link>
        </nav>
      </header>

      <h2 className="text-2xl font-semibold mb-6 text-center">Available Products</h2>

      {/* Search bar and category filter */}
      <div className="flex flex-col sm:flex-row mb-6 gap-4 items-center">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded px-3 py-2 w-60"
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border rounded px-3 py-2 ml-0 sm:ml-4"
        >
          <option>All Categories</option>
          <option>Groceries</option>
          <option>Apparel</option>
          <option>Hygiene</option>
          <option>Sporting Goods</option>
        </select>
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded shadow p-4 text-center"
          >
            {/* Product name links to detail page */}
            <Link to={`/products/${product.id}`}>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:underline">
                {product.name}
              </h3>
            </Link>

            {/* Show product image if available */}
            {product.imageUrl && (
              <img
                src={`${product.imageUrl}?w=200`}
                alt={product.name}
                className="w-24 h-auto rounded mb-3 mx-auto block"
              />
            )}

            <p className="text-gray-600 mb-1">${product.price.toFixed(2)}</p>
            <p className="text-sm text-gray-500 mb-2">Sold by {product.businessName}</p>

            {/* Add to cart button */}
            <button
              onClick={() => addToCart(product)}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
