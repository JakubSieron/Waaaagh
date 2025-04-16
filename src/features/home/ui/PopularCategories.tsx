import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiStar } from 'react-icons/fi';

import styles from './PopularCategories.module.scss';

export const PopularCategories = () => {
  const [popularCategories, setPopularCategories] = useState([
    {
      id: 'paints',
      title: 'Paints',
      description: 'Explore a wide range of high-quality paints.',
    },
    {
      id: 'books',
      title: 'Books',
      description: 'Discover guides and lore from the fantasy worlds.',
    },
  ]);


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
