import React from 'react';
import styles from './Portfolio.module.scss';
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
    name: 'Castle Ruins',
    price: 49.99,
    image: '/images/products/castle-terrain.png'
  },
  {
    id: 2,
    name: 'Forest Set',
    price: 39.99,
    image: '/images/products/hand-painted.png'
  },
  {
    id: 3,
    name: 'Desert Landscape',
    price: 44.99,
    image: '/images/products/colorful-set.png'
  },
  {
    id: 4,
    name: 'City Buildings',
    price: 54.99,
    image: '/images/products/modeling-kit.png'
  },
  {
    id: 5,
    name: 'Battlefield Set',
    price: 59.99,
    image: '/images/products/brush-set.png'
  },
  {
    id: 6,
    name: 'Dungeon Tiles',
    price: 34.99,
    image: '/images/products/paint-set.png'
  }
];

export const Portfolio = () => {
  const handleFavoriteClick = (id: number) => {
    console.log('Favorite clicked:', id);
  };

  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Portfolio</h1>
          <p>Check out our best miniature painting jobs</p>
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

export default Portfolio;