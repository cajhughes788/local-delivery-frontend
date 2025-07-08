// src/pages/Home.tsx
import { useState } from 'react';
import { products } from '../data/products';
import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';

export default function Home() {
  const { addToCart, cartItems } = useCart();

  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const categories = ['All Categories', 'Groceries', 'Apparel', 'Hygiene', 'Sporting Goods'];

  const filteredProducts = products.filter(product => {
    const matchesCategory =
      selectedCategory === 'All Categories' || product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.description.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-60 border-r border-gray-200 p-4 sticky top-0 h-screen">
        <h2 className="text-lg font-semibold mb-4">Categories</h2>
        <ul className="space-y-2">
          {categories.map((cat) => (
            <li key={cat}>
              <button
                onClick={() => setSelectedCategory(cat)}
                className={`text-left w-full px-2 py-1 rounded hover:bg-blue-100 ${
                  selectedCategory === cat ? 'bg-blue-200 font-bold' : ''
                }`}
              >
                {cat}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for products..."
            className="w-full max-w-md px-4 py-2 border rounded shadow-sm"
          />
        </div>

        <p className="text-gray-600 mb-4">
          Showing results for <strong>{selectedCategory}</strong>
          {search && (
            <>
              {' '}matching <em>"{search}"</em>
            </>
          )}
        </p>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded shadow p-4 text-center"
            >
              <Link to={`/products/${product.id}`}>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:underline">
                  {product.name}
                </h3>
              </Link>

              {product.imageUrl && (
                <img
                  src={`${product.imageUrl}?w=200`}
                  alt={product.name}
                  className="w-24 h-auto rounded mb-3 mx-auto block"
                />
              )}

              <p className="text-gray-600 mb-1">${product.price.toFixed(2)}</p>
              <p className="text-sm text-gray-500 mb-2">Sold by {product.businessName}</p>

              <button
                onClick={() => addToCart(product)}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

