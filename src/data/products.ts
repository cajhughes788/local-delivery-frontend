export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  businessName: string;
  category: 'Groceries' | 'Apparel' | 'Hygiene' | 'Sporting Goods';
}

export const products: Product[] = [
  // Groceries (GreenLeaf Market)
  {
    id: 1,
    name: "Organic Gala Apples",
    description: "Crisp and sweet, perfect for snacks or baking.",
    price: 3.99,
    imageUrl: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    businessName: "GreenLeaf Market",
    category: "Groceries"
  },
  {
    id: 2,
    name: "Fresh Whole Milk – 1 Gallon",
    description: "Locally sourced, hormone-free dairy.",
    price: 4.25,
    imageUrl: "https://images.unsplash.com/photo-1550583724-b2692b85b150?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    businessName: "GreenLeaf Market",
    category: "Groceries"
  },
  {
    id: 3,
    name: "Sourdough Bread Loaf",
    description: "Handcrafted daily with wild yeast.",
    price: 5.49,
    imageUrl: "https://plus.unsplash.com/premium_photo-1664640733898-d5c3f71f44e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c291cmRvdWdofGVufDB8fDB8fHww",
    businessName: "GreenLeaf Market",
    category: "Groceries"
  },
  {
    id: 4,
    name: "Free-Range Eggs – Dozen",
    description: "Brown-shelled, Grade A, pasture-raised.",
    price: 3.75,
    imageUrl: "https://images.unsplash.com/photo-1585355611266-f01530088d60?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    businessName: "GreenLeaf Market",
    category: "Groceries"
  },
  {
    id: 5,
    name: "Raw Local Honey – 12oz",
    description: "Filtered but unpasteurized for maximum nutrients.",
    price: 7.99,
    imageUrl: "https://images.unsplash.com/photo-1587049352851-8d4e89133924?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJhdyUyMGxvY2FsJTIwaG9uZXl8ZW58MHx8MHx8fDA%3D",
    businessName: "GreenLeaf Market",
    category: "Groceries"
  },

  // Apparel (Inland Outfitters)
  {
    id: 6,
    name: "Canvas Work Jacket",
    description: "Heavy-duty, fleece-lined for outdoor work.",
    price: 49.99,
    imageUrl: "https://images.unsplash.com/photo-1630269470893-6e3d211f63c7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29yayUyMGphY2tldCUyMHNhbGV8ZW58MHx8MHx8fDA%3D",
    businessName: "Inland Outfitters",
    category: "Apparel"
  },
  {
    id: 7,
    name: "Stretch Denim Jeans – Slim Fit",
    description: "Comfortable, rugged everyday jeans.",
    price: 39.99,
    imageUrl: "https://images.unsplash.com/photo-1560243563-062bfc001d68?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGVuaW0lMjBqZWFuc3xlbnwwfHwwfHx8MA%3D%3D",
    businessName: "Inland Outfitters",
    category: "Apparel"
  },
  {
    id: 8,
    name: "Pullover",
    description: "Warm, breathable white cotton pullover.",
    price: 29.95,
    imageUrl: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFwcGFyZWx8ZW58MHx8MHx8fDA%3D",
    businessName: "Inland Outfitters",
    category: "Apparel"
  },
  {
    id: 9,
    name: "Socks – 3 Pack",
    description: "hand-crafted intricate socks.",
    price: 14.5,
    imageUrl: "https://images.unsplash.com/photo-1613151848917-80e67f421fff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNvY2tzfGVufDB8fDB8fHww",
    businessName: "Inland Outfitters",
    category: "Apparel"
  },
  {
    id: 10,
    name: "Beanie – One Size",
    description: "Soft knit cap with thermal insulation.",
    price: 12.0,
    imageUrl: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhbmllfGVufDB8fDB8fHww",
    businessName: "Inland Outfitters",
    category: "Apparel"
  },

  // Hygiene (PureWellness Supplies)
  {
    id: 11,
    name: "Natural Bar Soap – Lavender Oat",
    description: "Handcrafted and moisturizing with no parabens.",
    price: 6.0,
    imageUrl: "https://plus.unsplash.com/premium_photo-1678529870357-8d055638e9d2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJhbCUyMGJhciUyMHNvYXB8ZW58MHx8MHx8fDA%3D",
    businessName: "PureWellness Supplies",
    category: "Hygiene"
  },
  {
    id: 12,
    name: "Fluoride-Free Toothpaste – Mint",
    description: "Gentle on enamel with essential oils.",
    price: 4.25,
    imageUrl: "https://images.unsplash.com/photo-1602193815349-525071f27564?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRvb3RocGFzdGV8ZW58MHx8MHx8fDA%3D",
    businessName: "PureWellness Supplies",
    category: "Hygiene"
  },
  {
    id: 13,
    name: "Shampoo Bar – Coconut & Lime",
    description: "Zero waste packaging, sulfate-free.",
    price: 7.5,
    imageUrl: "https://images.unsplash.com/photo-1663659505961-db99f0f604e3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNoYW1wb28lMjBiYXJ8ZW58MHx8MHx8fDA%3D",
    businessName: "PureWellness Supplies",
    category: "Hygiene"
  },
  {
    id: 14,
    name: "Bamboo Toothbrush – 2 Pack",
    description: "Eco-friendly with soft charcoal bristles.",
    price: 5.99,
    imageUrl: "https://images.unsplash.com/photo-1591184510248-6be5138855a0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFtYm9vJTIwdG9vdGhicnVzaHxlbnwwfHwwfHx8MA%3D%3D",
    businessName: "PureWellness Supplies",
    category: "Hygiene"
  },
  {
    id: 15,
    name: "Perfume- Lavender",
    description: "Long-lasting, lavender-infused essential oil perfume.",
    price: 8.0,
    imageUrl: "https://plus.unsplash.com/premium_photo-1661504705297-92efbb8a34f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fERlb2RvcmFudCUyMFN0aWNrJTIwJUUyJTgwJTkzJTIwQmVyZ2Ftb3QlMjBDZWRhcnxlbnwwfHwwfHx8MA%3D%3D",
    businessName: "PureWellness Supplies",
    category: "Hygiene"
  },

  // Sporting Goods (Apex Sports Supply)
  {
    id: 16,
    name: "Inflatable Paddle Board",
    description: "Includes paddle, pump, and travel bag.",
    price: 199.99,
    imageUrl: "https://images.unsplash.com/photo-1641248616170-fdee7c9d1fd6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGluZmxhdGFibGUlMjBwYWRkbGUlMjBib2FyZHxlbnwwfHwwfHx8MA%3D%3D",
    businessName: "Apex Sports Supply",
    category: "Sporting Goods"
  },
  {
    id: 17,
    name: "Adjustable Dumbbell – 25lb Max",
    description: "Space-saving with quick dial weights.",
    price: 79.99,
    imageUrl: "https://images.unsplash.com/photo-1544033527-b192daee1f5b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZHVtYmVsbHN8ZW58MHx8MHx8fDA%3D",
    businessName: "Apex Sports Supply",
    category: "Sporting Goods"
  },
  {
    id: 18,
    name: "Mountain Bike Helmet – Adult M",
    description: "Lightweight and certified for trail safety.",
    price: 44.99,
    imageUrl: "https://images.unsplash.com/photo-1665542379220-bc12c51b70ad?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fE1vdW50YWluJTIwQmlrZSUyMEhlbG1ldCUyMCVFMiU4MCU5MyUyMEFkdWx0JTIwTXxlbnwwfHwwfHx8MA%3D%3D",
    businessName: "Apex Sports Supply",
    category: "Sporting Goods"
  },
  {
    id: 19,
    name: "Mountain Bike",
    description: "Optimally designed with features designed to enhance durability and performance in rough terrain",
    price: 19.99,
    imageUrl: "https://images.unsplash.com/photo-1673121414328-52eff37bc6d0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fE1vdW50YWluJTIwQmlrZXxlbnwwfHwwfHx8MA%3D%3D",
    businessName: "Apex Sports Supply",
    category: "Sporting Goods"
  },
  {
    id: 20,
    name: "Yoga Mat",
    description: "Great for home workouts and mobility training",
    price: 89.95,
    imageUrl: "https://plus.unsplash.com/premium_photo-1675155952889-abb299df1fe7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8eW9nYSUyMG1hdHxlbnwwfHwwfHx8MA%3D%3D",
    businessName: "Namaste",
    category: "Sporting Goods"
  }
];
