import React from 'react';
import { FiTrendingUp, FiChevronLeft, FiChevronRight, FiHeart } from 'react-icons/fi';
import { trendingItems } from '../../../mockData';
import styles from './TrendingItems.module.scss';

export const TrendingItems = () => {
  return (
    <div className={styles.trending}>
      <div className={styles.sectionHeader}>
        <h2>
          <FiTrendingUp />
          Trending Items
        </h2>
        <div className={styles.navigation}>
          <button>
            <FiChevronLeft />
          </button>
          <button>
            <FiChevronRight />
          </button>
        </div>
      </div>
      <div className={styles.trendingGrid}>
        {trendingItems.map((item) => (
          <div key={item.id} className={styles.productCard}>
            <img src={`https://picsum.photos/300/200?random=${item.id}`} alt={item.title} />
            <button className={styles.favorite}>
              <FiHeart />
            </button>
            <div className={styles.info}>
              <h3 className={styles.title}>{item.title}</h3>
              <div className={styles.bottomRow}>
                <div className={styles.price}>
                  <span>$</span>
                  <span>{item.price}</span>
                </div>
                <button className={styles.buyButton}>Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}; 