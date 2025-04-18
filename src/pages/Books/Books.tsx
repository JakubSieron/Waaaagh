import React from 'react';
import styles from './Books.module.scss';
import { ProductCard } from '@/shared/components/ProductCard/ProductCard';
import { useProductsByCategory } from '@/shared/hooks/useProductsByCategory';


export const Books = () => {
  const { products, loading, error } = useProductsByCategory('books');

  const handleFavoriteClick = (id: number) => {
    console.log('Favorite clicked:', id);
  };

  if (loading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Books</h1>
          <p>Explore a world of knowledge and adventure with our wide selection of books.</p>
        </div>
      </div>

      <div className={styles.shippingBanner}>
        Free Shipping on Orders Over AE50
      </div>

      <div className={styles.content}>
        <div className={styles.container}>
          <div className={styles.productGrid}>
            {products.map((item) => (
              <ProductCard
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
                image={item.image}
                description={item.description}
                onFavoriteClick={() => handleFavoriteClick(item.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Books;