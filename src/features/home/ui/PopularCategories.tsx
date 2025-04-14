import React from 'react';
import { Link } from 'react-router-dom';
import { FiStar } from 'react-icons/fi';
import { popularCategories } from '../../../mockData';
import styles from './PopularCategories.module.scss';

export const PopularCategories = () => {
  return (
    <div className={styles.popularCategories}>
      <div className={styles.sectionHeader}>
        <FiStar />
        <h2>Popular Categories</h2>
      </div>
      <div className={styles.categoryCards}>
        {popularCategories.map((category) => (
          <Link to={`/category/${category.id}`} key={category.id} className={styles.categoryCard}>
            <img src={`https://picsum.photos/800/400?random=${category.id}`} alt={category.title} />
            <div className={styles.content}>
              <h3>{category.title}</h3>
              <p>{category.description}</p>
              <button className={styles.browseButton}>Browse</button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}; 