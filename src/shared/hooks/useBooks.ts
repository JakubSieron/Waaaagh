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

export const useBooks = () => {
  const [books, setBooks] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get<Product[]>('/api/books');
        setBooks(response.data);
      } catch (err: any) {
        setError('Failed to load books');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  return {
    books,
    loading,
    error,
  };
};