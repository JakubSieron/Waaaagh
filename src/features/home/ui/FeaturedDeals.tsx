import React from 'react';
import { FiTag, FiChevronLeft, FiChevronRight, FiHeart } from 'react-icons/fi';
import { useDiscountedProducts } from '@/shared/hooks/useDiscountedProducts';
import { ProductCard } from '@/shared/components/ProductCard/ProductCard';
import { Product } from '@/shared/types/product';
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
    <div className={styles.featured}>
      <div className={styles.sectionHeader}>
        <h2>
          <FiTag />
          Featured Deals
        </h2>
      </div>
      <div className={styles.featuredGrid}>
        {products.map((product: Product) => (
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