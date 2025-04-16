import React, { useState } from 'react';
import { FiTrendingUp, FiChevronLeft, FiChevronRight, FiHeart } from 'react-icons/fi';

import styles from './TrendingItems.module.scss';

export const TrendingItems = () => {
  const [trendingItems] = useState([
    {
      id: 1,
      title: 'Dwarfen Mountain Holds',
      price: 120.99,
    },
    {
      id: 2,
      title: 'Ellyrian Reavers',
      price: 74.99,
    },
    {
      id: 3,
      title: 'Chaos Warriors',
      price: 49.99,
    },
    {
      id: 4,
      title: 'Retributor Armour',
      price: 5.99,
    },
    {
      id: 5,
      title: 'Arcane Journal: High Elves',
      price: 19.99,
    }
  ]);

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
