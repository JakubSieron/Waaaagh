import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import styles from './Admin.module.scss';
import { ProductForm } from '@/features/admin/ui/ProductForm';
import { ProductList } from '@/features/admin/ui/ProductList';
import { Product } from '@/shared/api/mockData';
import { productApi } from '@/shared/api/productApi';

export const Admin: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | undefined>();
  const [isFormVisible, setIsFormVisible] = useState(false);
  const queryClient = useQueryClient();

  const { data: products = [], isLoading, error } = useQuery<Product[]>({
    queryKey: ['products'],
    queryFn: productApi.getProducts,
  });

  const createMutation = useMutation({
    mutationFn: productApi.createProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
      setIsFormVisible(false);
    },
  });

  const updateMutation = useMutation({
    mutationFn: productApi.updateProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
      setIsFormVisible(false);
      setSelectedProduct(undefined);
    },
  });

  const deleteMutation = useMutation({
    mutationFn: productApi.deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
  });

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

      {isFormVisible && (
        <div className={styles.formContainer}>
          <ProductForm
            product={selectedProduct}
            onSubmit={handleSubmit}
            onCancel={() => {
              setIsFormVisible(false);
              setSelectedProduct(undefined);
            }}
          />
        </div>
      )}

      <ProductList
        products={products}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default Admin; 