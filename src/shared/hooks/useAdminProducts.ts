import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Product } from '@/shared/types/product';

export const useAdminProducts = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | undefined>();
  const [isFormVisible, setIsFormVisible] = useState(false);
  const queryClient = useQueryClient();

  const createMutation = useMutation({ mutationFn: () => new Promise<any>(() => {}), onSuccess: () => {  setIsFormVisible(false); } });
  const updateMutation = useMutation({ mutationFn: () => new Promise<any>(() => {}), onSuccess: () => {  setIsFormVisible(false); setSelectedProduct(undefined); } });
  const deleteMutation = useMutation({ mutationFn: () => new Promise<any>(() => {}), onSuccess: () => {  } });

  const handleCloseModal = () => {
    setIsFormVisible(false);
    setSelectedProduct(undefined);
  };

  const handleSubmit = (productData: Omit<Product, 'id'>) => {
    if (selectedProduct) {
      updateMutation.mutate({ id: selectedProduct.id, ...productData });
    } else {
      createMutation.mutate(productData);
    }
  };

  const handleEdit = (product: Product) => {
    setSelectedProduct(product);
    setIsFormVisible(true);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      deleteMutation.mutate(id);
    }
  };

  return {
    selectedProduct,
    setSelectedProduct,
    isFormVisible,
    setIsFormVisible,
    createMutation,
    updateMutation,
    deleteMutation,
    handleCloseModal,
    handleSubmit,
    handleEdit,
    handleDelete,
  };
};