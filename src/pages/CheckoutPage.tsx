import { useCart } from '../hooks/useCart';
import { useState } from 'react';
import axios from 'axios';

export default function CheckoutPage() {
  const { cartItems, clearCart } = useCart();
  const [shippingAddress, setShippingAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // ✅ Fix placement

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleCheckout = async () => {
    setError('');

    // ✅ Start loading
    setLoading(true);

    // ✅ Validate input
    if (!shippingAddress.trim()) {
      setError('Please enter your shipping address.');
      setLoading(false);
      return;
    }

    if (!paymentMethod) {
      setError('Please select a payment method.');
      setLoading(false);
      return;
    }

    const cart_id = localStorage.getItem('cart_id');
    const token = localStorage.getItem('token');

    if (!cart_id || !token) {
      setError('Missing cart or authentication.');
      setLoading(false);
      return;
    }

    try {
      const res = await axios.post(
        'http://localhost:5000/api/cart/checkout',
        {
          cart_id,
          payment_method: paymentMethod,
          shipping_address: shippingAddress,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log('✅ Checkout response:', res.data);
      clearCart();
      localStorage.removeItem('cart_id');
      setOrderPlaced(true);
    } catch (err: any) {
      console.error(err);
      setError(err.response?.data?.message || 'Checkout failed.');
    } finally {
      setLoading(false); // ✅ Always stop loading
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Checkout</h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          <ul className="mb-6 space-y-4">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="bg-white shadow rounded p-4 flex justify-between items-center"
              >
                <div>
                  <p className="font-medium text-gray-800">{item.name}</p>
                  <p className="text-gray-600">
                    ${item.price.toFixed(2)} × {item.quantity}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <div className="text-xl font-semibold text-right mb-6">
            Total: ${total.toFixed(2)}
          </div>

          {/* Shipping Address */}
          <div className="mb-4">
            <label htmlFor="shipping" className="block text-sm font-medium text-gray-700 mb-1">
              Shipping Address
            </label>
            <textarea
              id="shipping"
              value={shippingAddress}
              onChange={(e) => setShippingAddress(e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={3}
              placeholder="123 Main St, Post Falls, ID 83854"
            />
          </div>

          {/* Payment Method */}
          <div className="mb-4">
            <label htmlFor="payment" className="block text-sm font-medium text-gray-700 mb-1">
              Payment Method
            </label>
            <select
              id="payment"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="w-full border px-3 py-2 rounded-md"
            >
              <option value="">Select...</option>
              <option value="credit_card">Credit Card</option>
              <option value="paypal">PayPal</option>
              <option value="cash_on_delivery">Cash on Delivery</option>
            </select>
          </div>

          {/* Show credit card fields if selected */}
          {paymentMethod === 'credit_card' && (
            <div className="grid grid-cols-1 gap-4 mb-6">
              <input
                type="text"
                placeholder="Card Number"
                className="w-full border px-3 py-2 rounded"
              />
              <input
                type="text"
                placeholder="MM/YY"
                className="w-full border px-3 py-2 rounded"
              />
              <input
                type="text"
                placeholder="CVC"
                className="w-full border px-3 py-2 rounded"
              />
            </div>
          )}

          {/* Checkout Button */}
          {orderPlaced ? (
            <p className="text-green-600 font-semibold text-center">
              ✅ Thank you! Your order has been placed.
            </p>
          ) : (
            <button
              disabled={loading}
              onClick={handleCheckout}
              className={`bg-green-600 text-white px-6 py-2 rounded block w-full ${
                loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-700'
              }`}
            >
              {loading ? 'Placing Order...' : 'Place Order'}
            </button>
          )}

          {error && <p className="text-red-600 text-sm mt-4 text-center">{error}</p>}
        </>
      )}
    </div>
  );
}

