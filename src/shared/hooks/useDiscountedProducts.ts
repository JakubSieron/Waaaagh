import { useState, useEffect } from 'react';
import axios from 'axios';
import { Product } from '@/shared/types/product';

export const useDiscountedProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDiscounted = async () => {
      setLoading(true);
      try {
        const response = await axios.get<Product[]>('http://localhost:3000/api/products/discounted', {
          headers: {
            'Content-Type': 'application/json',
            'user-role': 'user' 
          }
        });
        setProducts(response.data);
        setError(null);
      } catch (err) {
        setError('Failed to load discounted products');
        console.error('Discounted products fetch error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchDiscounted();
  }, []);

  return { products, loading, error };
}; 