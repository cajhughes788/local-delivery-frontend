import {
  createContext,
  useState,
  useEffect,
} from 'react';
import type { ReactNode } from 'react';
import type { Product, CartItem } from '../types/cart';
import axios from 'axios';

// 🧠 Define context type
type CartContextType = {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
};

// ✅ Create the CartContext
export const CartContext = createContext<CartContextType | undefined>(undefined);

// 🛒 CartProvider component
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartId, setCartId] = useState<number | null>(null);

  // 🔁 Fetch or create cart on component mount (once token is available)
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return;

    const fetchOrCreateCart = async () => {
      try {
        const res = await axios.post(
          'http://localhost:5000/api/cart',
          {},
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setCartId(res.data.id);                        // Save cart ID to state
        localStorage.setItem('cart_id', res.data.id);  // persist to localStorage
      } catch (err) {
        console.error('Failed to fetch or create cart', err);
      }
    };

    fetchOrCreateCart();
  }, []);

  // ➕ Add item or increment quantity locally + sync to backend
  const addToCart = (product: Product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });

    const token = localStorage.getItem('token');
    if (cartId && token) {
      axios
        .post(
          'http://localhost:5000/api/cart/items',
          {
            cart_id: cartId,
            product_id: product.id,
            quantity: 1,
          },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        .then(() => console.log('Item synced to backend cart'))
        .catch((err) => {
          console.error('Failed to sync cart item to backend', err);
        });
    }
  };

  // ➖ Remove quantity or delete item locally + sync delete if needed
  const removeFromCart = (productId: number) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems
        .map((item) =>
          item.id === productId && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0);

      const removedItem = prevItems.find(
        (item) => item.id === productId && item.quantity === 1
      );

      // 🔗 If item was removed entirely, sync delete
      if (removedItem) {
        const token = localStorage.getItem('token');
        if (token) {
          axios
            .delete(`http://localhost:5000/api/cart/items/${removedItem.id}`, {
              headers: { Authorization: `Bearer ${token}` },
            })
            .then(() => console.log('Item removed from backend'))
            .catch((err) => {
              console.error('Failed to remove item from backend', err);
            });
        }
      }

      return updatedItems;
    });
  };

  // 🧹 Clear entire cart locally
  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem('cart_id');
    setCartId(null);
    // Optional: delete or reset backend cart
  };

  // ✅ Provide cart context
  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
