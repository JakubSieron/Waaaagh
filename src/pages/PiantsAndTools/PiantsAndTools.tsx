import React from 'react';
import styles from './PiantsAndTools.module.scss';
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
    name: 'Basic Paint Set',
    price: 24.99,
    image: '/images/products/paint-set.png'
  },
  {
    id: 2,
    name: 'Premium Colors',
    price: 34.99,
    image: '/images/products/colorful-set.png'
  },
  {
    id: 3,
    name: 'Brush Collection',
    price: 19.99,
    image: '/images/products/brush-set.png'
  },
  {
    id: 4,
    name: 'Professional Kit',
    price: 49.99,
    image: '/images/products/modeling-kit.png'
  },
  {
    id: 5,
    name: 'Special Effects Set',
    price: 29.99,
    image: '/images/products/hand-painted.png'
  },
  {
    id: 6,
    name: 'Metallic Colors',
    price: 39.99,
    image: '/images/products/castle-terrain.png'
  }
];

export const PiantsAndTools = () => {
  const handleFavoriteClick = (id: number) => {
    console.log('Favorite clicked:', id);
  };

  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Piants and Tools</h1>
          <p>High-quality paints and tools for your miniatures</p>
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

export default PiantsAndTools;