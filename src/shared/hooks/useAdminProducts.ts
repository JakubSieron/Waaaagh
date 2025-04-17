import { useState } from 'react';
import axios from 'axios';
import { Product } from '@/shared/types/product';

export const useAdminProducts = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | undefined>();
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [productIdToDelete, setProductIdToDelete] = useState<string | null>(null);

  const handleCloseModal = () => {
    setIsFormVisible(false);
    setSelectedProduct(undefined);
  };

  const handleSubmit = async (productData: Omit<Product, 'id'>) => {
    if (selectedProduct) {
      try {
        
        await axios.patch(`http://localhost:3000/api/products/${selectedProduct.id}`, productData,{
          headers: {
            'user-role': 'admin'
          }
          
        });
        setIsFormVisible(false);
        setSelectedProduct(undefined);
      } catch (error) {
        console.error('Error updating product:', error);
      }
    } else {
      try {
        await axios.post('/api/products', productData);
        setIsFormVisible(false);
      } catch (error) {
        console.error('Error creating product:', error);
      }
    }
  };

  const handleEdit = (product: Product) => {
    setSelectedProduct(product);
    setIsFormVisible(true);
  };

  const handleDelete = (id: string) => {
    setProductIdToDelete(id);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = async () => {
    if (productIdToDelete) {
      try {
        await axios.delete(`/api/products/${productIdToDelete}`);
        setIsDeleteModalOpen(false);
        setProductIdToDelete(null);
      } catch (error) {
        console.error('Error deleting product:', error);
      }
    }
  };

  const cancelDelete = () => {
    setIsDeleteModalOpen(false);
    setProductIdToDelete(null);
  };

  const handleToggleTrending = async (id: string, trending: boolean) => {
    try {
      await axios.patch(`/api/products/${id}/trending`, { trending });
    } catch (error) {
      console.error('Error toggling trending status:', error);
    }
  };

  return {
    selectedProduct,
    setSelectedProduct,
    isFormVisible,
    setIsFormVisible,
    handleCloseModal,
    handleSubmit,
    handleEdit,
    handleDelete,
    handleToggleTrending,
    isDeleteModalOpen,
    confirmDelete,
    cancelDelete,
  };
};