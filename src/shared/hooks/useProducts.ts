import { useQuery } from '@tanstack/react-query';
import { productsApi } from '../api/productsApi';

export const useProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: productsApi.getAll
  });
};

export const useProductsByCategory = (category: string) => {
  return useQuery({
    queryKey: ['products', category],
    queryFn: () => productsApi.getByCategory(category)
  });
};

export const useProduct = (id: number) => {
  return useQuery({
    queryKey: ['product', id],
    queryFn: () => productsApi.getById(id)
  });
}; 