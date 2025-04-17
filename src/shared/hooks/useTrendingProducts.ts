import { useState, useEffect } from 'react';
import axios from 'axios';
import { Product } from '@/shared/types/product';

export const useTrendingProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTrending = async () => {
      setLoading(true);
      try {
        const response = await axios.get<Product[]>('http://localhost:3000/api/products/trending', {
          headers: {
            'Content-Type': 'application/json',
            'user-role': 'user' 
          }
        });
        setProducts(response.data);
        setError(null);
      } catch (err) {
        setError('Failed to load trending products');
        console.error('Trending fetch error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchTrending();
  }, []);

  return { products, loading, error };
};
