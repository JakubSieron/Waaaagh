import React from 'react';
import { FiHeart } from 'react-icons/fi';
import styles from './ProductCard.module.scss';

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
  onBuyClick?: () => void;
  onFavoriteClick?: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  name,
  price,
  image,
  onBuyClick,
  onFavoriteClick
}) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={name} />
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
          <button className={styles.buyButton} onClick={onBuyClick}>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}; 