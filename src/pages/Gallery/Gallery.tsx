import React from 'react';
import styles from './Gallery.module.scss';
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
    name: 'Miniature Diorama',
    price: 59.99,
    image: '/images/products/modeling-kit.png'
  },
  {
    id: 2,
    name: 'Hand-Painted Figure',
    price: 44.99,
    image: '/images/products/paint-set.png'
  },
  {
    id: 3,
    name: 'Custom Terrain Piece',
    price: 19.99,
    image: '/images/products/brush-set.png'
  },
  {
    id: 4,
    name: 'Scratch Built Model',
    price: 29.99,
    image: '/images/products/hand-painted.png'
  },
  {
    id: 5,
    name: 'Epic Battle Scene',
    price: 89.99,
    image: '/images/products/castle-terrain.png'
  },
  {
    id: 6,
    name: 'Group Army Shot',
    price: 49.99,
    image: '/images/products/colorful-set.png'
  }
];

export const Gallery = () => {
  const handleFavoriteClick = (id: number) => {
    console.log('Favorite clicked:', id);
  };

  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Gallery</h1>
          <p>Showcase of beautiful miniatures and terrain</p>
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

export default Gallery;