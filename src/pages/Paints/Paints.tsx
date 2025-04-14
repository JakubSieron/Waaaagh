import React from 'react';
import { ProductCard } from '@/shared/components/ProductCard/ProductCard';
import styles from './Paints.module.scss';

const PAINTS_DATA = [
  {
    id: 1,
    name: 'Base Paint Set',
    price: 15.99,
    image: 'https://picsum.photos/300/200?random=21'
  },
  {
    id: 2,
    name: 'Metallic Paint Set',
    price: 18.50,
    image: 'https://picsum.photos/300/200?random=22'
  },
  {
    id: 3,
    name: 'Shade Paint Set',
    price: 16.99,
    image: 'https://picsum.photos/300/200?random=23'
  },
  {
    id: 4,
    name: 'Layer Paint Set',
    price: 17.50,
    image: 'https://picsum.photos/300/200?random=24'
  },
  {
    id: 5,
    name: 'Technical Paint Set',
    price: 19.99,
    image: 'https://picsum.photos/300/200?random=25'
  },
  {
    id: 6,
    name: 'Contrast Paint Set',
    price: 21.99,
    image: 'https://picsum.photos/300/200?random=26'
  }
];

const Paints = () => {
  const handleFavoriteClick = (id: number) => {
    console.log('Favorite clicked for item:', id);
  };

  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Paints</h1>
          <p>High-quality paints for your miniatures</p>
        </div>
      </div>

      <div className={styles.shippingBanner}>
        Free Shipping on Orders Over AE50
      </div>

      <div className={styles.content}>
        <div className={styles.container}>
          <div className={styles.productGrid}>
            {PAINTS_DATA.map((item) => (
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

export default Paints; 