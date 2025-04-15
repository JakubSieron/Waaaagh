import React from 'react';
import styles from './Workshop.module.scss';
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
    name: 'LED Work Lamp',
    price: 49.99,
    image: '/images/products/modeling-kit.png'
  },
  {
    id: 2,
    name: 'Painting Station',
    price: 79.99,
    image: '/images/products/paint-set.png'
  },
  {
    id: 3,
    name: 'Airbrush Booth',
    price: 129.99,
    image: '/images/products/brush-set.png'
  },
  {
    id: 4,
    name: 'Work Mat',
    price: 24.99,
    image: '/images/products/hand-painted.png'
  },
  {
    id: 5,
    name: 'Paint Mixing Station',
    price: 39.99,
    image: '/images/products/castle-terrain.png'
  },
  {
    id: 6,
    name: 'Magnifying Lamp',
    price: 69.99,
    image: '/images/products/colorful-set.png'
  }
];

export const Workshop = () => {
  const handleFavoriteClick = (id: number) => {
    console.log('Favorite clicked:', id);
  };

  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Workshop</h1>
          <p>Essential equipment for your miniature painting workspace</p>
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

export default Workshop; 