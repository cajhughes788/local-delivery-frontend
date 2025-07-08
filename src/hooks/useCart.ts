// src/hooks/useCart.ts

import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';


// Custom hook to access the CartContext
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
