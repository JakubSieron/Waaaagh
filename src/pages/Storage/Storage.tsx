import React from 'react';
import { ProductCard } from '@/shared/components/ProductCard/ProductCard';
import styles from './Storage.module.scss';

const STORAGE_DATA = [
  {
    id: 1,
    name: 'Miniature Carrying Case',
    price: 39.99,
    image: 'https://picsum.photos/300/200?random=25'
  },
  {
    id: 2,
    name: 'Paint Storage Rack',
    price: 24.99,
    image: 'https://picsum.photos/300/200?random=26'
  },
  {
    id: 3,
    name: 'Brush Case',
    price: 12.99,
    image: 'https://picsum.photos/300/200?random=27'
  },
  {
    id: 4,
    name: 'Tool Organizer',
    price: 19.99,
    image: 'https://picsum.photos/300/200?random=28'
  },
  {
    id: 5,
    name: 'Figure Display Cabinet',
    price: 89.99,
    image: 'https://picsum.photos/300/200?random=29'
  },
  {
    id: 6,
    name: 'Terrain Storage Box',
    price: 34.99,
    image: 'https://picsum.photos/300/200?random=30'
  }
];

const Storage = () => {
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
          <h1>Storage</h1>
          <p>Keep your miniatures and supplies organized and protected</p>
        </div>
      </div>

      <div className={styles.shippingBanner}>
        Free Shipping on Orders Over AE50
      </div>

      <div className={styles.content}>
        <div className={styles.container}>
          <div className={styles.productGrid}>
            {STORAGE_DATA.map((item) => (
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

export default Storage; 