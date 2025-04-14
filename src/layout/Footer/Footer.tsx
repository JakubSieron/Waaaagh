import React from 'react';
import { Link } from 'react-router-dom';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import logo from '../../assets/images/logo.svg';
import styles from './Footer.module.scss';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles['footer-container']}>
        <div className={styles['footer-logo']}>
          <img src={logo} alt="Logo" />
          <p>Your one-stop shop for all things miniature gaming</p>
        </div>

        <div className={styles['footer-links']}>
          <div className={styles['footer-column']}>
            <h3>Quick Links</h3>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/shipping">Shipping Info</Link>
            <Link to="/returns">Returns</Link>
          </div>

          <div className={styles['footer-column']}>
            <h3>Categories</h3>
            <Link to="/category/miniatures">Miniatures</Link>
            <Link to="/category/paints">Paints</Link>
            <Link to="/category/terrain">Terrain</Link>
            <Link to="/category/tools">Tools</Link>
          </div>

          <div className={styles['footer-column']}>
            <h3>Store Hours</h3>
            <p>Monday - Friday: 9am - 6pm</p>
            <p>Saturday: 10am - 4pm</p>
            <p>Sunday: Closed</p>
          </div>

          <div className={styles['footer-column']}>
            <h3>Customer Support</h3>
            <p>Email: support@waaaght.com</p>
            <p>Phone: (123) 456-7890</p>
            <div className={styles['footer-social']}>
              <a href="#" aria-label="Facebook"><FiFacebook /></a>
              <a href="#" aria-label="Twitter"><FiTwitter /></a>
              <a href="#" aria-label="Instagram"><FiInstagram /></a>
            </div>
          </div>
        </div>

        <div className={styles['footer-copyright']}>
          <p>&copy; 2024 Waaaght. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
