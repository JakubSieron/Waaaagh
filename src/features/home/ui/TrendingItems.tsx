import React, { useState } from 'react';
import { FiTrendingUp, FiChevronLeft, FiChevronRight, FiHeart } from 'react-icons/fi';
import { useTrendingProducts } from '@/shared/hooks/useTrendingProducts';
import { ProductCard } from '@/shared/components/ProductCard/ProductCard';
import styles from './TrendingItems.module.scss';


export const TrendingItems = () => {

  const { products:trendingItems, loading, error } = useTrendingProducts();

  if (loading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  console.log(trendingItems, 'trendingItems');

  return (
    <div className={styles.trending}>
      <div className={styles.sectionHeader}>
        <h2>
          <FiTrendingUp />
          Trending Items
        </h2>
        {/* <div className={styles.navigation}>
          <button>
            <FiChevronLeft />
          </button>
          <button>
            <FiChevronRight />
          </button>
        </div> */}
      </div>
      <div className={styles.trendingGrid}>
        {trendingItems.map((product) => (
          <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          image={product.image}
          onFavoriteClick={() => {}}
        />
        ))}
      </div>
    </div>
  );
};
