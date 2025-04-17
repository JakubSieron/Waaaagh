import { useState, useEffect } from 'react';
import axios from 'axios';

interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  price: number;
  description: string;
}

export const useProductsByCategory = (category: string) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get<Product[]>('http://localhost:3000/api/products', {
          params: { category },
          headers: { 'Content-Type': 'application/json' }
        });
        setProducts(response.data);
      } catch (err: any) {
        setError(`Failed to load ${category}`);
        console.error(`Error fetching ${category}:`, err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  return {
    products,
    loading,
    error,
  };
};
