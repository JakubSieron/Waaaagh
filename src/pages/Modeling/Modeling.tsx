import React from 'react';
import { ProductCard } from '@/shared/components/ProductCard/ProductCard';
import styles from './Modeling.module.scss';

const MODELING_DATA = [
  {
    id: 1,
    name: 'Precision Tool Set',
    price: 29.99,
    image: 'https://picsum.photos/300/200?random=19'
  },
  {
    id: 2,
    name: 'Sculpting Tools Kit',
    price: 24.99,
    image: 'https://picsum.photos/300/200?random=20'
  },
  {
    id: 3,
    name: 'Model Putty',
    price: 8.99,
    image: 'https://picsum.photos/300/200?random=21'
  },
  {
    id: 4,
    name: 'Detail Brushes Set',
    price: 19.99,
    image: 'https://picsum.photos/300/200?random=22'
  },
  {
    id: 5,
    name: 'Hobby Knife Set',
    price: 15.99,
    image: 'https://picsum.photos/300/200?random=23'
  },
  {
    id: 6,
    name: 'Plastic Cement',
    price: 6.99,
    image: 'https://picsum.photos/300/200?random=24'
  }
];

const Modeling = () => {
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
            {MODELING_DATA.map((item) => (
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

export default Modeling; 