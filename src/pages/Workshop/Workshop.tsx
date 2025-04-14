import React from 'react';
import { ProductCard } from '@/shared/components/ProductCard/ProductCard';
import styles from './Workshop.module.scss';

const WORKSHOP_DATA = [
  {
    id: 1,
    name: 'LED Work Lamp',
    price: 49.99,
    image: 'https://picsum.photos/300/200?random=31'
  },
  {
    id: 2,
    name: 'Painting Station',
    price: 79.99,
    image: 'https://picsum.photos/300/200?random=32'
  },
  {
    id: 3,
    name: 'Airbrush Booth',
    price: 129.99,
    image: 'https://picsum.photos/300/200?random=33'
  },
  {
    id: 4,
    name: 'Work Mat',
    price: 14.99,
    image: 'https://picsum.photos/300/200?random=34'
  },
  {
    id: 5,
    name: 'Paint Mixing Station',
    price: 29.99,
    image: 'https://picsum.photos/300/200?random=35'
  },
  {
    id: 6,
    name: 'Magnifying Lamp',
    price: 59.99,
    image: 'https://picsum.photos/300/200?random=36'
  }
];

const Workshop = () => {
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
            {WORKSHOP_DATA.map((item) => (
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

export default Workshop; 