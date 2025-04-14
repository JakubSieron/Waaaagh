import React from 'react';
import { FiX, FiMinus, FiPlus, FiTrash2 } from 'react-icons/fi';
import { useCartStore } from '@/shared/store/cartStore';
import styles from './Cart.module.scss';

export const Cart: React.FC = () => {
  const items = useCartStore(state => state.items);
  const isOpen = useCartStore(state => state.isOpen);
  const removeItem = useCartStore(state => state.removeItem);
  const updateQuantity = useCartStore(state => state.updateQuantity);
  const closeCart = useCartStore(state => state.closeCart);
  const totalPrice = useCartStore(state => state.totalPrice);

  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeCart();
    }
  };

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.cart} onClick={e => e.stopPropagation()}>
        <div className={styles.header}>
          <h2>Your Shopping Cart</h2>
          <button className={styles.closeButton} onClick={closeCart}>
            <FiX />
          </button>
        </div>

        <div className={styles.items}>
          {items.length === 0 ? (
            <div className={styles.empty}>
              Your cart is empty
            </div>
          ) : (
            items.map((item) => (
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
              <span>${totalPrice().toFixed(2)}</span>
            </div>
            <div className={styles.buttons}>
              <button className={styles.continueButton} onClick={closeCart}>
                Continue Shopping
              </button>
              <button className={styles.checkoutButton}>
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}; 