import React from 'react';
import { FiGift } from 'react-icons/fi';
import { useDiscountedProducts } from '@/shared/hooks/useDiscountedProducts';
import { ProductCard } from '@/shared/components/ProductCard/ProductCard';
import styles from './FeaturedDeals.module.scss';

export const FeaturedDeals = () => {
  const { products, loading, error } = useDiscountedProducts();

  console.log(products, 'products');

  if (loading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  return (
    <div className={styles.featuredDeals}>
      <div className={styles.sectionHeader}>
        <h2>
          <FiGift />
          Featured Deals
        </h2>
      </div>
      <div className={styles.dealsGrid}>
        {products.map((product) => (
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
      {/* <div className={styles.limitedOffer}>
        <h3>LIMITED OFFER</h3>
        <p>Ending soon</p>
        <div className={styles.timer}>
          <div className={styles.timeBlock}>1</div>
          <div className={styles.timeBlock}>1</div>
          <div className={styles.separator}>:</div>
          <div className={styles.timeBlock}>5</div>
          <div className={styles.timeBlock}>7</div>
        </div>
      </div> */}
    </div>
  );
};

export default FeaturedDeals; 