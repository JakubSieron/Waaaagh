import React from 'react';
import { Product } from '@/shared/types/product';
import styles from './ProductList.module.scss';

interface ProductListProps {
  products: Product[];
  onEdit: (product: Product) => void;
  onDelete: (id: string) => void;
  handleToggleTrending: (id: string, isTrending: boolean) => void;
}

export const ProductList: React.FC<ProductListProps> = ({ products, onEdit, onDelete, handleToggleTrending }) => {
  return (
    <div className={styles.productList}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Trending</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>
                <img src={product.image} alt={product.name} className={styles.productImage} />
              </td>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>${product.price.toFixed(2)}</td>
              <td>{product.stock}</td>
              <td>
                <button
                  onClick={() => handleToggleTrending(product.id, !product.trending)}
                  className={styles.trendingButton}
                >
                  {product.trending ? 'Trending' : 'Not trending'}
                </button>
              </td>
              <td>
                <div className={styles.actions}>
                  <button
                    onClick={() => onEdit(product)}
                    className={styles.editButton}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(product.id)}
                    className={styles.deleteButton}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};