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
            We are passionate about the worlds we serve and the communities we build. 
            Every item we offer is carefully selected with both beginners and seasoned collectors in mind. 
            Whether you are assembling your first army, painting your next masterpiece, or expanding your collection, 
            we are here to support your journey every step of the way. 
            Your passion is our inspiration — and together, we bring these worlds to life.
          </p>
        </div>

        <div className={styles.section}>
          <h2>Our Team</h2>
          <p>
            We are a team of dedicated professionals who are passionate about
            what we do. Each member brings unique skills and expertise to ensure
            your satisfaction. Our team consists of two people: 
            Edem and Jakub. Edem is responsible for management and operations, 
            while Jakub focuses on customer service and direct contact with our community. 
            Together, we work to make your experience smooth, personal, and truly enjoyable.
          </p>
        </div>

        <div className={styles.section}>
          <h2>Our History</h2>
          <p>
          Warhammer Fantasy was one of the first fantasy universes to capture the hearts of players in Eastern Europe. 
          Like many others, we fell in love with its dark, rich world — a place where epic battles, ancient magic, and timeless stories come alive. 
          For decades, the fanbase here has remained strong and passionate, even inspiring Games Workshop in the creation of factions like Kislev. 
          For us, Warhammer is more than a game — it’s a part of who we are. That’s why we decided to open our own online store: 
          to share our passion and help others bring their armies and stories to life.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
