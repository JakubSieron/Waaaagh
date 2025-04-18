import React, { useState } from 'react';
import { FiHeart } from 'react-icons/fi';
import { useCartStore } from '@/shared/store/cartStore';
import { ProductModal } from '../ProductModal/ProductModal';
import styles from './ProductCard.module.scss';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  description?: string;
  category?: string;
  onFavoriteClick?: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  image,
  description,
  category,
  onFavoriteClick
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const addItem = useCartStore(state => state.addItem);

  const imageUrl = image.startsWith('http') 
    ? image 
    : `http://localhost:3000${image}`;

  return (
    <>
      <div className={styles.card} onClick={() => setIsModalOpen(true)}>
        <div className={styles.imageWrapper}>
          <img src={imageUrl} alt={name} onError={(e) => {
            // Fallback image if the original fails to load
            e.currentTarget.src = '/images/placeholder.jpg';
          }} />
        </div>
        {/* <button 
          className={styles.favorite} 
          onClick={(e) => {
            e.stopPropagation();
            onFavoriteClick?.();
          }}
        >
          <FiHeart />
        </button> */}
        <div className={styles.info}>
          <h3 className={styles.title}>{name}</h3>
          <div className={styles.bottomRow}>
            <div className={styles.price}>
              <span>$</span>
              <span>{price.toFixed(2)}</span>
            </div>
            <button 
              className={styles.buyButton} 
              onClick={(e) => {
                e.stopPropagation();
                addItem({ id, name, price, image });
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <ProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={{
          id,
          name,
          price,
          image,
          description,
          category
        }}
      />
    </>
  );
}; 