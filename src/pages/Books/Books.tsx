import React from 'react';
import styles from './Books.module.scss';
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
    name: 'The Lord of the Rings',
    price: 14.99,
    image: '/images/products/modeling-kit.png'
  },
  {
    id: 2,
    name: 'Harry Potter',
    price: 12.99,
    image: '/images/products/brush-set.png'
  },
  {
    id: 3,
    name: 'The Hobbit',
    price: 9.99,
    image: '/images/products/paint-set.png'
  },
  {
    id: 4,
    name: 'Pride and Prejudice',
    price: 7.99,
    image: '/images/products/hand-painted.png'
  },
  {
    id: 5,
    name: '1984',
    price: 8.99,
    image: '/images/products/castle-terrain.png'
  },
  {
    id: 6,
    name: 'To Kill a Mockingbird',
    price: 10.99,
    image: '/images/products/colorful-set.png'
  }
];

export const Books = () => {
  const handleFavoriteClick = (id: number) => {
    console.log('Favorite clicked:', id);
  };

  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Books</h1>
          <p>Explore a world of knowledge and adventure with our wide selection of books.</p>
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

export default Books;