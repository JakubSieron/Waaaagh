import React, { useState } from 'react';
import styles from './Admin.module.scss';
import { ProductForm } from '@/features/admin/ui/ProductForm';
import { ProductList } from '@/features/admin/ui/ProductList';
import { Product } from '@/shared/types/product';
import Modal from '@/shared/components/Modal/Modal';
import { useProductsByCategory } from '@/shared/hooks/useProductsByCategory';
import { useAdminProducts } from '@/shared/hooks/useAdminProducts';


export const Admin: React.FC = () => {
  const { selectedProduct, setSelectedProduct, isFormVisible, setIsFormVisible, handleCloseModal, handleSubmit, handleEdit, handleDelete, handleToggleTrending } = useAdminProducts();

  const { products: books, loading: isLoadingBooks, error: errorBooks,refetch: refetchBooks } = useProductsByCategory('books');
  const { products: miniatures, loading: isLoadingMiniatures, error: errorMiniatures,refetch: refetchMiniatures } = useProductsByCategory('miniatures');
  const { products: paints, loading: isLoadingPaints, error: errorPaints,refetch: refetchPaints } = useProductsByCategory('paints');

  const [activeTab, setActiveTab] = useState('miniatures');

  const getActiveProducts = () => {
    switch (activeTab) {
      case 'books':
        return books;
      case 'miniatures':
        return miniatures;
      case 'paints':
        return paints;
      default:
        return miniatures;
    }
  };

  const refetchActiveTab = () => {
    if (activeTab === 'books') refetchBooks();
    else if (activeTab === 'miniatures') refetchMiniatures();
    else if (activeTab === 'paints') refetchPaints();
  };

  const isLoading = isLoadingBooks || isLoadingMiniatures || isLoadingPaints;
  const error = errorBooks || errorMiniatures || errorPaints;

  const onSubmit = async (productData: Omit<Product, 'id'>) => {
    await handleSubmit(productData as Product);
    refetchActiveTab(); 
    setIsFormVisible(false); 
  };
  

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

      <div className={styles.tabs}>
        <button
          className={activeTab === 'miniatures' ? styles.active : ''}
          onClick={() => setActiveTab('miniatures')}
        >
          Miniatures
        </button>
        <button
          className={activeTab === 'paints' ? styles.active : ''}
          onClick={() => setActiveTab('paints')}
        >
          Paints
        </button>
        <button
          className={activeTab === 'books' ? styles.active : ''}
          onClick={() => setActiveTab('books')}
        >
          Books
        </button>
      </div>

      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error loading products</div>
      ) : (
        <ProductList
          products={getActiveProducts()}
          onEdit={handleEdit}
          onDelete={handleDelete}
          handleToggleTrending={handleToggleTrending}
        />
      )}

      <Modal isOpen={isFormVisible} onClose={handleCloseModal}>
        <ProductForm
          product={selectedProduct}
          onSubmit={onSubmit}
          onCancel={handleCloseModal}
        />
      </Modal>
    </div>
  );
};

export default Admin;