import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.section}>
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className={styles.section}>
          <h3>Categories</h3>
          <ul>
            <li>
              <Link to="/miniatures">Miniatures</Link>
            </li>
            <li>
              <Link to="/books">Books</Link>
            </li>
            <li>
              <Link to="/paints">Paints</Link>
            </li>
          </ul>
        </div>
        <div className={styles.section}>
          <h3>Contact Info</h3>
          <ul>
            <li>Email: info@example.com</li>
            <li>Phone: +1 234 567 890</li>
            <li>Address: 123 Street, City</li>
          </ul>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>&copy; 2024 Your Store. All rights reserved.</p>
      </div>
    </footer>
  );
}; 