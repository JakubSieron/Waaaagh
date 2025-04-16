interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  price: number;
  description: string;
}

const getAuthHeader = () => {
  const token = localStorage.getItem('token');
  return token ? { Authorization: `Bearer ${token}` } : {};
};

export const productService = {
  async getMiniatures(): Promise<Product[]> {
    try {
      const response = await fetch('http://localhost:3000/api/products?category=miniatures', {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch miniatures');
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching miniatures:', error);
      throw error;
    }
  },

  async getAllProducts(): Promise<Product[]> {
    try {
      const response = await fetch('http://localhost:3000/api/products', {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  }
}; 