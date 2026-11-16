export interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  description: string;
}

export const CATALOG: Product[] = [
  { id: "pet-wave-purple", name: "Wave Petunia, Purple", category: "Annuals", price: "$4.99", description: "Spreading petunia for beds and baskets. 4 in. pot." },
  { id: "pet-trailing-pink", name: "Trailing Petunia, Pink", category: "Annuals", price: "$12.50", description: "Hanging basket, 10 in." },
  { id: "seed-petunia", name: "Petunia Seed Packet", category: "Seeds", price: "$1.15", description: "Mixed colors, about 50 seeds." },
  { id: "seed-basil", name: "Basil Seed Packet", category: "Seeds", price: "$2.30", description: "Genovese basil, about 200 seeds." },
  { id: "herb-basil", name: "Sweet Basil", category: "Herbs", price: "$5.75", description: "Starter plant, 4 in. pot." },
  { id: "herb-rosemary", name: "Rosemary", category: "Herbs", price: "$7.25", description: "Upright rosemary, 6 in. pot." },
  { id: "herb-lavender", name: "Lavender Hidcote", category: "Herbs", price: "$9.50", description: "Compact English lavender, 1 qt." },
  { id: "house-snake", name: "Snake Plant", category: "Houseplants", price: "$24.00", description: "Low light, low water. 6 in. pot." },
  { id: "house-fiddle", name: "Fiddle Leaf Fig", category: "Houseplants", price: "$38.00", description: "About 2 ft tall. Bright, indirect light." },
  { id: "sup-pot-8", name: "Terracotta Pot, 8 in.", category: "Supplies", price: "$8.00", description: "With drainage hole and saucer." },
  { id: "sup-mix-10", name: "Potting Mix, 10 qt.", category: "Supplies", price: "$12.00", description: "All-purpose indoor and outdoor mix." },
  { id: "sup-can", name: "Watering Can", category: "Supplies", price: "$18.50", description: "2 liter, long spout." },
];
