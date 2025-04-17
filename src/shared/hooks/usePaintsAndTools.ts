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

export const usePaintsAndTools = () => {
  const [paintsAndTools, setPaintsAndTools] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPaintsAndTools = async () => {
      try {
        const response = await axios.get<Product[]>('/api/paints-and-tools');
        setPaintsAndTools(response.data);
      } catch (err: any) {
        setError('Failed to load paints and tools');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPaintsAndTools();
  }, []);

  return {
    paintsAndTools,
    loading,
    error,
  };
};