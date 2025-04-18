import React from 'react';
import styles from './AboutUs.module.scss';

export const AboutUs = () => {
  return (
    <div className={styles.page}>

      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>About Us</h1>
          <p>We’re passionate about great products and service.</p>
        </div>
      </div>


      <div className={styles.accentBanner}>
        Free shipping on all orders over AE50!
      </div>


      <div className={styles.content}>
        <p>
          Welcome to our store! We are passionate about providing high‑quality products
          and excellent service to our customers. Our team is dedicated to creating
          a unique shopping experience for you.
        </p>

        <div className={styles.section}>
          <h2>Our Mission</h2>
          <p>
            Our mission is to bring you the best products at competitive prices,
            while maintaining the highest standards of quality and customer service.
          </p>
        </div>

        <div className={styles.section}>
          <h2>Our Team</h2>
          <p>
            We are a team of dedicated professionals who are passionate about
            what we do. Each member brings unique skills and expertise to ensure
            your satisfaction.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
