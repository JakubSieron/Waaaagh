export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  stock: number;
}

// Mock data for testing
export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Space Marine',
    price: 29.99,
    description: 'Detailed Space Marine miniature',
    image: 'https://picsum.photos/300/300',
    category: 'miniatures',
    stock: 10
  },
  {
    id: '2',
    name: 'Paint Set',
    price: 19.99,
    description: 'Basic paint set for miniatures',
    image: 'https://picsum.photos/300/300',
    category: 'paints',
    stock: 15
  }
];

// Имитация задержки
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const mockApi = {
  async getAll() {
    await delay(500);
    return mockProducts;
  },

  async getByCategory(category: string) {
    await delay(500);
    return mockProducts.filter(p => p.category === category);
  },

  async getById(id: string) {
    await delay(500);
    const product = mockProducts.find(p => p.id === id);
    if (!product) {
      throw new Error('Product not found');
    }
    return product;
  }
}; 