import { FC } from 'react';
import { Product } from '../../types/product';
import styles from './ProductDetails.module.scss';

interface ProductDetailsProps {
  product: Product;
}

export const ProductDetails: FC<ProductDetailsProps> = ({ product }) => {
  return (
    <div className={styles.details}>
      <div className={styles.imageContainer}>
        <img 
          src={`http://localhost:3000${product.image}`} 
          alt={product.name} 
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <h1 className={styles.name}>{product.name}</h1>
        <p className={styles.description}>{product.description}</p>
        <div className={styles.price}>{product.price} AE</div>
        <button className={styles.addButton}>Add to Cart</button>
      </div>
    </div>
  );
}; 