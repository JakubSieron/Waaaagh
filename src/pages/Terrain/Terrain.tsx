import React from 'react';
import { ProductCard } from '@/shared/components/ProductCard/ProductCard';
import styles from './Terrain.module.scss';

const TERRAIN_DATA = [
  {
    id: 1,
    name: 'Gothic Ruins Set',
    price: 49.99,
    image: 'https://picsum.photos/300/200?random=7'
  },
  {
    id: 2,
    name: 'Forest Terrain Pack',
    price: 39.99,
    image: 'https://picsum.photos/300/200?random=8'
  },
  {
    id: 3,
    name: 'Industrial Sector',
    price: 59.99,
    image: 'https://picsum.photos/300/200?random=9'
  },
  {
    id: 4,
    name: 'Battlefield Craters',
    price: 29.99,
    image: 'https://picsum.photos/300/200?random=10'
  },
  {
    id: 5,
    name: 'City Buildings Set',
    price: 69.99,
    image: 'https://picsum.photos/300/200?random=11'
  },
  {
    id: 6,
    name: 'Desert Outpost',
    price: 44.99,
    image: 'https://picsum.photos/300/200?random=12'
  }
];

const Terrain = () => {
  const handleBuyClick = (id: number) => {
    console.log('Buy clicked for item:', id);
  };

  const handleFavoriteClick = (id: number) => {
    console.log('Favorite clicked for item:', id);
  };

  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Terrain & Scenery</h1>
          <p>Transform your battlefield with our premium terrain pieces</p>
        </div>
      </div>

      <div className={styles.shippingBanner}>
        Free Shipping on Orders Over AE50
      </div>

      <div className={styles.content}>
        <div className={styles.container}>
          <div className={styles.productGrid}>
            {TERRAIN_DATA.map((item) => (
              <ProductCard
                key={item.id}
                name={item.name}
                price={item.price}
                image={item.image}
                onBuyClick={() => handleBuyClick(item.id)}
                onFavoriteClick={() => handleFavoriteClick(item.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terrain; 