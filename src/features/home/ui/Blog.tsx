import React from 'react';
import { FiBookOpen } from 'react-icons/fi';
import styles from './Blog.module.scss';

export const Blog = () => {
  return (
    <div className={styles.blog}>
      <div className={styles.header}>
        <FiBookOpen />
        <h2>Latest Blog Posts</h2>
      </div>
      <div className={styles.blogGrid}>
        <article className={styles.blogCard}>
          <img src="https://picsum.photos/800/400?random=1" alt="Miniature Painting" />
          <div className={styles.content}>
            <h3>Miniature Painting Tips</h3>
            <p>Essential techniques for painting miniatures like a pro</p>
            <div className={styles.author}>
              <img src="https://picsum.photos/32/32?random=10" alt="John Doe" className={styles.avatar} />
              <span>John Doe</span>
              <span className={styles.date}>2 days ago</span>
            </div>
          </div>
        </article>
        <article className={styles.blogCard}>
          <img src="https://picsum.photos/800/400?random=2" alt="Building Terrain" />
          <div className={styles.content}>
            <h3>Building Terrain</h3>
            <p>Create stunning terrain pieces for your tabletop games</p>
            <div className={styles.author}>
              <img src="https://picsum.photos/32/32?random=11" alt="Jane Smith" className={styles.avatar} />
              <span>Jane Smith</span>
              <span className={styles.date}>3 days ago</span>
            </div>
          </div>
        </article>
        <article className={styles.blogCard}>
          <img src="https://picsum.photos/800/400?random=3" alt="Color Theory" />
          <div className={styles.content}>
            <h3>Color Theory for Miniatures</h3>
            <p>Master the art of color selection and composition</p>
            <div className={styles.author}>
              <img src="https://picsum.photos/32/32?random=12" alt="Mike Johnson" className={styles.avatar} />
              <span>Mike Johnson</span>
              <span className={styles.date}>4 days ago</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}; 