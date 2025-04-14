import React from 'react';
import { Link } from 'react-router-dom';
import { FaDiceD20, FaBrush, FaMountain, FaPalette, FaTools, FaBoxOpen } from 'react-icons/fa';
import styles from './Categories.module.scss';

const categories = [
  {
    id: 1,
    name: 'Miniatures',
    slug: 'miniatures',
    icon: <FaDiceD20 />
  },
  {
    id: 2,
    name: 'Paints',
    slug: 'paints',
    icon: <FaPalette />
  },
  {
    id: 3,
    name: 'Terrain',
    slug: 'terrain',
    icon: <FaMountain />
  },
  {
    id: 4,
    name: 'Modeling',
    slug: 'modeling',
    icon: <FaBrush />
  },
  {
    id: 5,
    name: 'Storage',
    slug: 'storage',
    icon: <FaBoxOpen />
  },
  {
    id: 6,
    name: 'Workshop',
    slug: 'workshop',
    icon: <FaTools />
  }
];

export const Categories = () => {
  return (
    <section className={styles.categories}>
      <div className={styles.container}>
        <h2>Categories</h2>
        <div className={styles.categoryGrid}>
          {categories.map((category) => (
            <Link to={`/${category.slug}`} key={category.id} className={styles.categoryCard}>
              <div className={styles.iconWrapper}>
                {category.icon}
              </div>
              <h3>{category.name}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}; 