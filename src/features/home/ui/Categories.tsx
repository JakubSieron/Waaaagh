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
    name: 'Paints And Tools',
    slug: 'Paints And Tools',
    icon: <FaPalette />
  },
  {
    id: 3,
    name: 'Books',
    slug: 'Books',
    icon: <FaMountain />
  },
  {
    id: 4,
    name: 'Gallery',
    slug: 'Gallery',
    icon: <FaBrush />
  },
  {
    id: 5,
    name: 'Portfolio',
    slug: 'Portfolio',
    icon: <FaBoxOpen />
  },
  {
    id: 6,
    name: 'ContactForm',
    slug: 'ContactForm',
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

export default Categories; 