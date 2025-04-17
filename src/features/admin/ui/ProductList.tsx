import React from 'react';
import { Product } from '@/shared/types/product';
import styles from './ProductList.module.scss';

interface ProductListProps {
  products: Product[];
  onEdit: (product: Product) => void;
  onDelete: (id: number) => void;
  handleToggleTrending: (id: number, trending: boolean) => void;
}

export const ProductList: React.FC<ProductListProps> = ({
  products,
  onEdit,
  onDelete,
  handleToggleTrending,
}) => {
  return (
    <div className={styles.productList}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Discount</th>
            <th>Trending</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>
                {(() => {
                  const imageUrl = product.image.startsWith('http')
                    ? product.image
                    : `http://localhost:3000${product.image}`;

                  return <img src={imageUrl} alt={product.name} className={styles.productImage} />;
                })()}
              </td>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>${product.price.toFixed(2)}</td>
              <td>
                <button
                  className={`${styles.trendingButton} ${product.discount ? styles.trending : styles.notTrending}`}
                >
                  {product.discount ? ' Discount' : ' No discount'}
                </button>
              </td>
              <td>
                <button
                  className={`${styles.trendingButton} ${product.trending ? styles.trending : styles.notTrending}`}
                >
                  {product.trending ? ' Trending' : ' Not trending'}
                </button>
              </td>
              <td>
                <div className={styles.actions}>
                  <button onClick={() => onEdit(product)} className={styles.editButton}>
                    Edit
                  </button>
                  <button onClick={() => onDelete(product.id)} className={styles.deleteButton}>
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
