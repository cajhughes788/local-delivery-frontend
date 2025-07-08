// src/pages/ProductDetailPage.tsx

import { useParams } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import { products } from '../data/products'; // Use real product data from data file

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();

  // Find the product by its ID from the imported product list
  const product = products.find(p => p.id === Number(id));

  // If no matching product found, show fallback message
  if (!product) {
    return <div className="text-center p-8">Product not found.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex flex-col items-center">
      {/* Product name */}
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>

      {/* Product description */}
      <p className="text-lg text-gray-700 mb-4">{product.description}</p>

      {/* Product price */}
      <p className="text-xl text-gray-900 mb-6">${product.price.toFixed(2)}</p>

      {/* Add to Cart button */}
      <button
        onClick={() => addToCart(product)}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        Add to Cart
      </button>
    </div>
  );
}
