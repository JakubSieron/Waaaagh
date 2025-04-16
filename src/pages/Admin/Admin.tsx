import React from 'react';
import { useQuery } from '@tanstack/react-query';
import styles from './Admin.module.scss';
import { ProductForm } from '@/features/admin/ui/ProductForm';
import { ProductList } from '@/features/admin/ui/ProductList';
import { Product } from '@/shared/types/product';
import Modal from '@/shared/components/Modal/Modal';
import { useAdminProducts } from '@/shared/hooks/useAdminProducts';


export const Admin: React.FC = () => {
  const { selectedProduct, setSelectedProduct, isFormVisible, setIsFormVisible, handleCloseModal, handleSubmit, handleEdit, handleDelete, } = useAdminProducts();
  const { data: products = [], isLoading, error } = useQuery<Product[]>({ queryKey: ['products'], queryFn: () => [] });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;

  return (
    <div className={styles.admin}>
      <h1>Admin Dashboard</h1>

      <div className={styles.header}>
        <h2>Products</h2>
        <button
          onClick={() => {
            setSelectedProduct(undefined);
            setIsFormVisible(true);
          }}
          className={styles.addButton}
        >
          Add New Product
        </button>
      </div>

      <ProductList
        products={products}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <Modal isOpen={isFormVisible} onClose={handleCloseModal}>
        <ProductForm
          product={selectedProduct}
          onSubmit={handleSubmit}
          onCancel={handleCloseModal}
        />
      </Modal>
    </div>
  );
};

export default Admin;