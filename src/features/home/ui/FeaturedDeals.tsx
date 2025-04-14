import React from 'react';
import { FiGift } from 'react-icons/fi';
import styles from './FeaturedDeals.module.scss';

export const FeaturedDeals = () => {
  return (
    <div className={styles.featuredDeals}>
      <h2>
        <FiGift />
        Featured Deals
      </h2>
      <div className={styles.dealsGrid}>
        <div className={styles.dealCard}>
          <img src="https://picsum.photos/400/300?random=1" alt="Miniature" />
          <div className={styles.content}>
            <div className={styles.top}>
              <h3>Miniature</h3>
              <p>by Master</p>
            </div>
            <div className={styles.bottom}>
              <div className={styles.discount}>25% OFF</div>
              <button className={styles.buyButton}>Buy</button>
            </div>
          </div>
        </div>
        <div className={styles.dealCard}>
          <img src="https://picsum.photos/400/300?random=2" alt="New Arrivals" />
          <div className={styles.content}>
            <div className={styles.top}>
              <h3>New Arrivals</h3>
              <p>Discover our latest</p>
            </div>
            <div className={styles.bottom}>
              <div className={styles.discount}>20% OFF</div>
              <button className={styles.buyButton}>Buy</button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.limitedOffer}>
        <h3>LIMITED OFFER</h3>
        <p>Ending soon</p>
        <div className={styles.timer}>
          <div className={styles.timeBlock}>1</div>
          <div className={styles.timeBlock}>1</div>
          <div className={styles.separator}>:</div>
          <div className={styles.timeBlock}>5</div>
          <div className={styles.timeBlock}>7</div>
        </div>
      </div>
    </div>
  );
}; 