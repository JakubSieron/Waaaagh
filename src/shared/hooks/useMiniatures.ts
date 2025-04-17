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

export const useMiniatures = () => {
  const [miniatures, setMiniatures] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMiniatures = async () => {
      try {
        const response = await axios.get<Product[]>('/api/miniatures');
        setMiniatures(response.data);
      } catch (err: any) {
        setError('Failed to load miniatures');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMiniatures();
  }, []);

  return {
    miniatures,
    loading,
    error,
  };
};