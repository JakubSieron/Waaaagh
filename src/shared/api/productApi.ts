import { Product } from './mockData';
import { mockProducts } from './mockData';

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const productApi = {
  getProducts: async (): Promise<Product[]> => {
    await delay(500);
    return mockProducts;
  },

  createProduct: async (product: Omit<Product, 'id'>): Promise<Product> => {
    await delay(500);
    const newProduct: Product = {
      ...product,
      id: Date.now().toString(),
    };
    mockProducts.push(newProduct);
    return newProduct;
  },

  updateProduct: async (product: Product): Promise<Product> => {
    await delay(500);
    const index = mockProducts.findIndex(p => p.id === product.id);
    if (index === -1) {
      throw new Error('Product not found');
    }
    mockProducts[index] = product;
    return product;
  },

  deleteProduct: async (id: string): Promise<void> => {
    await delay(500);
    const index = mockProducts.findIndex(p => p.id === id);
    if (index === -1) {
      throw new Error('Product not found');
    }
    mockProducts.splice(index, 1);
  },
}; 