import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../../../mockData';
import { FaDiceD20, FaBrush, FaMountain, FaPalette, FaTools, FaBoxOpen } from 'react-icons/fa';
import styles from './Categories.module.scss';

export const Categories = () => {
  const categoryIcons = {
    miniatures: <FaDiceD20 />,
    paints: <FaPalette />,
    terrain: <FaMountain />,
    brushes: <FaBrush />,
    tools: <FaTools />,
    accessories: <FaBoxOpen />
  };

  return (
    <section className={styles.categories}>
      <div className={styles.container}>
        <h2>Categories</h2>
        <div className={styles.categoryGrid}>
          {categories.map((category) => (
            <Link to={`/category/${category.slug}`} key={category.id} className={styles.categoryCard}>
              <div className={styles.iconWrapper}>
                {categoryIcons[category.slug as keyof typeof categoryIcons]}
              </div>
              <h3>{category.name}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}; 