export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Fantasy Hero',
    price: 5.50,
    image: '/images/products/fantasy-hero.jpg',
    category: 'miniatures',
    description: 'Highly detailed fantasy hero miniature'
  },
  {
    id: 2,
    name: 'Dragon Miniature',
    price: 7.00,
    image: '/images/products/dragon.jpg',
    category: 'miniatures',
    description: 'Impressive dragon miniature with detailed scales'
  },
  {
    id: 3,
    name: 'Base Paint Set',
    price: 15.99,
    image: '/images/products/base-paint-set.jpg',
    category: 'paints',
    description: 'Essential base paint set for miniatures'
  },
  {
    id: 4,
    name: 'Gothic Ruins Set',
    price: 49.99,
    image: '/images/products/gothic-ruins.jpg',
    category: 'terrain',
    description: 'Detailed gothic ruins terrain set'
  },
  {
    id: 5,
    name: 'Precision Tool Set',
    price: 29.99,
    image: '/images/products/tool-set.jpg',
    category: 'modeling',
    description: 'Professional precision tools for miniature modeling'
  },
  {
    id: 6,
    name: 'Miniature Carrying Case',
    price: 39.99,
    image: '/images/products/carrying-case.jpg',
    category: 'storage',
    description: 'Protective carrying case for miniatures'
  },
  {
    id: 7,
    name: 'LED Work Lamp',
    price: 49.99,
    image: '/images/products/work-lamp.jpg',
    category: 'workshop',
    description: 'Adjustable LED lamp for detailed work'
  }
];

// Имитация задержки
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const mockApi = {
  async getAll() {
    await delay(500);
    return products;
  },

  async getByCategory(category: string) {
    await delay(500);
    return products.filter(p => p.category === category);
  },

  async getById(id: number) {
    await delay(500);
    const product = products.find(p => p.id === id);
    if (!product) {
      throw new Error('Product not found');
    }
    return product;
  }
}; 