import { useCart } from '../hooks/useCart';
import { Link } from 'react-router-dom';

export default function CartPage() {
  const { cartItems, removeFromCart } = useCart();

  // ✅ Calculate total with quantity
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Your Cart</h1>
        <nav className="space-x-6">
          <Link to="/" className="text-gray-600 hover:text-blue-500 font-medium">Home</Link>
          <Link to="/products" className="text-gray-600 hover:text-blue-500 font-medium">Products</Link>
        </nav>
      </header>

      {cartItems.length === 0 ? (
        <p className="text-gray-600 text-center">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded shadow p-4 flex justify-between items-center"
            >
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                <p className="text-gray-600">
                  ${item.price.toFixed(2)} × {item.quantity}
                </p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-600 hover:text-red-800 font-medium"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="text-right text-lg font-bold text-gray-900">
            Total: ${total.toFixed(2)}
          </div>

          <div className="text-center mt-6">
            <Link
              to="/checkout"
              className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
