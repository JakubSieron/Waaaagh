import React from 'react';
import { FiX, FiMinus, FiPlus, FiTrash2 } from 'react-icons/fi';
import { useCart } from '@/shared/context/CartContext';
import styles from './Cart.module.scss';

export const Cart: React.FC = () => {
  const { items, isOpen, toggleCart, removeItem, updateQuantity, totalPrice } = useCart();

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={toggleCart}>
      <div className={styles.cart} onClick={e => e.stopPropagation()}>
        <div className={styles.header}>
          <h2>Shopping Cart</h2>
          <button className={styles.closeButton} onClick={toggleCart}>
            <FiX />
          </button>
        </div>

        <div className={styles.items}>
          {items.length === 0 ? (
            <div className={styles.empty}>
              Your cart is empty
            </div>
          ) : (
            items.map(item => (
              <div key={item.id} className={styles.item}>
                <img src={item.image} alt={item.name} className={styles.itemImage} />
                <div className={styles.itemInfo}>
                  <h3>{item.name}</h3>
                  <div className={styles.price}>${item.price.toFixed(2)}</div>
                  <div className={styles.quantity}>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className={styles.quantityButton}
                    >
                      <FiMinus />
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className={styles.quantityButton}
                    >
                      <FiPlus />
                    </button>
                    <button
                      onClick={() => removeItem(item.id)}
                      className={styles.removeButton}
                    >
                      <FiTrash2 />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className={styles.footer}>
            <div className={styles.total}>
              <span>Total:</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <button className={styles.checkoutButton}>
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}; 