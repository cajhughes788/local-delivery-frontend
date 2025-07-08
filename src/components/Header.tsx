// src/components/Header.tsx

import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';

export default function Header() {
  // Access cart items from context to show count
  const { cartItems } = useCart();

  return (
    <header className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      {/* Site title */}
      <h1 className="text-xl font-bold text-gray-800">Local Market</h1>

      {/* Navigation links */}
      <nav className="space-x-4">
        <Link to="/" className="text-blue-600 hover:underline">Home</Link>
        <Link to="/products" className="text-blue-600 hover:underline">Products</Link>
        <Link to="/cart" className="text-blue-600 hover:underline">
          Cart ({cartItems.length})
        </Link>
      </nav>
    </header>
  );
}
