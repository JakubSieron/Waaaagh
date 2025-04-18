import React, { useEffect } from 'react';
import { FiX, FiShoppingCart, FiHeart } from 'react-icons/fi';
import { useCartStore } from '@/shared/store/cartStore';
import styles from './ProductModal.module.scss';

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    id: number;
    name: string;
    price: number;
    image: string;
    description?: string;
    category?: string;
  };
}

export const ProductModal: React.FC<ProductModalProps> = ({ isOpen, onClose, product }) => {
  const addItem = useCartStore(state => state.addItem);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);



  if (!isOpen) return null;

  const imageUrl = product.image.startsWith('http') 
    ? product.image 
    : `http://localhost:3000${product.image}`;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          <FiX />
        </button>
        
        <div className={styles.modalBody}>
          <div className={styles.imageSection}>
            <img 
              src={imageUrl} 
              alt={product.name}
              onError={(e) => {
                e.currentTarget.src = '/images/placeholder.jpg';
              }}
            />
          </div>
          
          <div className={styles.infoSection}>
            <div className={styles.header}>
              <h2>{product.name}</h2>
              {product.category && (
                <span className={styles.category}>{product.category}</span>
              )}
            </div>
            
            <div className={styles.price}>
              <span>$</span>
              <span>{product.price.toFixed(2)}</span>
            </div>

            {product.description && (
              <div className={styles.description}>
                <h3>Description</h3>
                <p>{product.description}</p>
              </div>
            )}

            <div className={styles.actions}>
              <button 
                className={styles.addToCart}
                onClick={() => {
                  addItem(product);
                  onClose();
                }}
              >
                <FiShoppingCart />
                Add to Cart
              </button>
              <button className={styles.favorite}>
                <FiHeart />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 