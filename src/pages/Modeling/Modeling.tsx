import React from 'react';
import styles from './Modeling.module.scss';
import { ProductCard } from '@/shared/components/ProductCard/ProductCard';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Modeling Kit Pro',
    price: 44.99,
    image: '/images/products/modeling-kit.png'
  },
  {
    id: 2,
    name: 'Sculpting Tools',
    price: 29.99,
    image: '/images/products/brush-set.png'
  },
  {
    id: 3,
    name: 'Detail Kit',
    price: 34.99,
    image: '/images/products/paint-set.png'
  },
  {
    id: 4,
    name: 'Conversion Set',
    price: 39.99,
    image: '/images/products/hand-painted.png'
  },
  {
    id: 5,
    name: 'Base Making Kit',
    price: 24.99,
    image: '/images/products/castle-terrain.png'
  },
  {
    id: 6,
    name: 'Professional Tools',
    price: 49.99,
    image: '/images/products/colorful-set.png'
  }
];

export const Modeling = () => {
  const handleFavoriteClick = (id: number) => {
    console.log('Favorite clicked:', id);
  };

  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Modeling</h1>
          <p>Professional tools for miniature modeling and customization</p>
        </div>
      </div>

      <div className={styles.shippingBanner}>
        Free Shipping on Orders Over AE50
      </div>

      <div className={styles.content}>
        <div className={styles.container}>
          <div className={styles.productGrid}>
            {PRODUCTS.map((item) => (
              <ProductCard
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
                image={item.image}
                onFavoriteClick={() => handleFavoriteClick(item.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modeling; 