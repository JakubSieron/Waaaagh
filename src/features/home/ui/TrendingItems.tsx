// TrendingItems.tsx
import React, { useState } from 'react';
import { FiTrendingUp, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useTrendingProducts } from '@/shared/hooks/useTrendingProducts';
import { ProductCard } from '@/shared/components/ProductCard/ProductCard';
import styles from './TrendingItems.module.scss';

export const TrendingItems = () => {
  const { products: trendingItems, loading, error } = useTrendingProducts();

  // pagination state
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 6;
  const total = trendingItems.length;
  const maxStart = Math.max(total - visibleCount, 0);
  const disableNav = total <= visibleCount;

  if (loading) return <div className={styles.loading}>Loading...</div>;
  if (error)   return <div className={styles.error}>{error}</div>;

  const showPrev = () => {
    setStartIndex(idx => idx <= 0 ? maxStart : idx - visibleCount);
  };
  const showNext = () => {
    setStartIndex(idx => idx >= maxStart ? 0 : idx + visibleCount);
  };

  return (
    <div className={styles.trending}>
      <div className={styles.sectionHeader}>
        <h2>
          <FiTrendingUp />
          Trending Items
        </h2>
        <div className={styles.arrows}>
          <button onClick={showPrev} disabled={disableNav} aria-label="Prev">
            <FiChevronLeft />
          </button>
          <button onClick={showNext} disabled={disableNav} aria-label="Next">
            <FiChevronRight />
          </button>
        </div>
      </div>

      <div className={styles.trendingGrid}>
        {trendingItems
          .slice(startIndex, startIndex + visibleCount)
          .map(item => (
            <ProductCard
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              image={item.image}
              description={item.description}
              onFavoriteClick={() => {}}
            />
          ))}
      </div>
    </div>
  );
};

export default TrendingItems;
