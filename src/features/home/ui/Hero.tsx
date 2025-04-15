import React from 'react';
import { FiSearch } from 'react-icons/fi';
import dragonImage from '../../../assets/images/hero/dragon.png';
import styles from './Hero.module.scss';

export const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles['hero-content']}>
          <h1>Explore top quality miniatures & accessories for gaming</h1>
          <p>Browse by category, brand or special</p>
          <div className={styles['search-box']}>
            <div className={styles['input-wrapper']}>
              <input 
                type="text" 
                placeholder="Search for miniatures, paints, terrain..." 
              />
              <FiSearch className={styles['search-icon']} />
            </div>
            <button className={styles['go-button']}>Go</button>
          </div>
        </div>
        <div className={styles['hero-image']}>
          <img src={dragonImage} alt="Dragon miniature" />
        </div>
      </div>
    </section>
  );
};

export default Hero; 