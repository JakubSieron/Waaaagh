import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Product } from '@/shared/types/product';

export const useProductsByCategory = (category: string) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get<Product[]>('http://localhost:3000/api/products', {
        params: { category },
        headers: { 'Content-Type': 'application/json' }
      });
      setProducts(response.data);
      setError(null);
    } catch (err: any) {
      setError(`Failed to load ${category}`);
      console.error(`Error fetching ${category}:`, err);
    } finally {
      setLoading(false);
    }
  }, [category]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return {
    products,
    loading,
    error,
    refetch: fetchProducts, 
  };
};
