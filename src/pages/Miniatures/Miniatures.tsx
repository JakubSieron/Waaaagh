import React from 'react';
import { ProductCard } from '@/shared/components/ProductCard/ProductCard';
import styles from './Miniatures.module.scss';

const MINIATURES_DATA = [
  {
    id: 1,
    name: 'Fantasy Hero',
    price: 5.50,
    image: 'https://picsum.photos/300/200?random=1'
  },
  {
    id: 2,
    name: 'Dragon Miniature',
    price: 7.00,
    image: 'https://picsum.photos/300/200?random=2'
  },
  {
    id: 3,
    name: 'Orc Warrior',
    price: 4.50,
    image: 'https://picsum.photos/300/200?random=3'
  },
  {
    id: 4,
    name: 'Elven Archer',
    price: 4.50,
    image: 'https://picsum.photos/300/200?random=4'
  },
  {
    id: 5,
    name: 'Wizard',
    price: 5.00,
    image: 'https://picsum.photos/300/200?random=5'
  },
  {
    id: 6,
    name: 'Dwarf Fighter',
    price: 4.80,
    image: 'https://picsum.photos/300/200?random=6'
  }
];

const Miniatures = () => {
  const handleFavoriteClick = (id: number) => {
    console.log('Favorite clicked for item:', id);
  };

  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Miniatures</h1>
          <p>Discover our collection of highly detailed fantasy miniatures</p>
        </div>
      </div>

      <div className={styles.shippingBanner}>
        Free Shipping on Orders Over AE50
      </div>

      <div className={styles.content}>
        <div className={styles.container}>
          <div className={styles.productGrid}>
            {MINIATURES_DATA.map((item) => (
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