import React, { useState } from 'react';
import { FiTag, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useDiscountedProducts } from '@/shared/hooks/useDiscountedProducts';
import { ProductCard } from '@/shared/components/ProductCard/ProductCard';
import { Product } from '@/shared/types/product';
import styles from './FeaturedDeals.module.scss';

export const FeaturedDeals = () => {
  const { products, loading, error } = useDiscountedProducts();
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 2;

  if (loading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  const total = products.length;
  const maxStart = Math.max(total - visibleCount, 0);
  const disableNav = total <= visibleCount;

  const showPrev = () => {
    if (startIndex <= 0) {
      setStartIndex(maxStart);
    } else {
      setStartIndex((prev) => Math.max(prev - visibleCount, 0));
    }
  };

  const showNext = () => {
    if (startIndex >= maxStart) {
      setStartIndex(0);
    } else {
      setStartIndex((prev) => Math.min(prev + visibleCount, maxStart));
    }
  };

  return (
    <div className={styles.featured}>
      <div className={styles.sectionHeader}>
        <h2>
          <FiTag />
          Featured Deals
        </h2>
        <div className={styles.arrows}>
          <button onClick={showPrev} disabled={disableNav} aria-label="Previous">
            <FiChevronLeft />
          </button>
          <button onClick={showNext} disabled={disableNav} aria-label="Next">
            <FiChevronRight />
          </button>
        </div>
      </div>

      <div className={styles.featuredGrid}>
        {products.slice(startIndex, startIndex + visibleCount).map((product: Product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            description={product.description}
            onFavoriteClick={() => {}}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedDeals;
