import React from 'react';
import { FiHeart } from 'react-icons/fi';
import { useCartStore } from '@/shared/store/cartStore';
import styles from './ProductCard.module.scss';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  onFavoriteClick?: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  image,
  onFavoriteClick
}) => {
  const addItem = useCartStore(state => state.addItem);

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={name} />
      </div>
      <button className={styles.favorite} onClick={onFavoriteClick}>
        <FiHeart />
      </button>
      <div className={styles.info}>
        <h3 className={styles.title}>{name}</h3>
        <div className={styles.bottomRow}>
          <div className={styles.price}>
            <span>$</span>
            <span>{price.toFixed(2)}</span>
          </div>
          <button 
            className={styles.buyButton} 
            onClick={() => addItem({ id, name, price, image })}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}; 