// src/types/cart.ts

// Product type
export type Product = {
  id: number;
  name: string;
  price: number;
};

// CartItem extends Product with quantity
export type CartItem = Product & { quantity: number };
