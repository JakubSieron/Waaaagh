import React from 'react';
import styles from './Miniatures.module.scss';
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
    name: 'Fantasy Hero',
    price: 29.99,
    image: '/images/products/hand-painted.png'
  },
  {
    id: 2,
    name: 'Dragon Miniature',
    price: 39.99,
    image: '/images/products/colorful-set.png'
  },
  {
    id: 3,
    name: 'Orc Warrior',
    price: 24.99,
    image: '/images/products/brush-set.png'
  },
  {
    id: 4,
    name: 'Elven Archer',
    price: 24.99,
    image: '/images/products/modeling-kit.png'
  },
  {
    id: 5,
    name: 'Wizard',
    price: 29.99,
    image: '/images/products/castle-terrain.png'
  },
  {
    id: 6,
    name: 'Dwarf Fighter',
    price: 24.99,
    image: '/images/products/paint-set.png'
  }
];

export const Miniatures = () => {
  const handleFavoriteClick = (id: number) => {
    console.log('Favorite clicked:', id);
  };

  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Miniatures</h1>
          <p>Discover our collection of highly detailed miniatures</p>
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

export default Miniatures;