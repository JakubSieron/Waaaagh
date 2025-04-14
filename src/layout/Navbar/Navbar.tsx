import React from 'react'
import { Link } from 'react-router-dom'
import { FiSearch, FiShoppingCart, FiUser } from 'react-icons/fi'
import logo from '../../assets/images/logo.svg';
import styles from './Navbar.module.scss';

export const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link to="/" className={styles['navbar-logo']}>
          <img src={logo} alt="Logo" />
        </Link>
        <div className={styles['navbar-links']}>
          <Link to="/featu">FEATU</Link>
          <Link to="/catalog">CATALOG</Link>
          <Link to="/gear">GEAR</Link>
          <Link to="/cart">CART</Link>
        </div>
        <div className={styles['navbar-actions']}>
          <button><FiSearch /></button>
          <button><FiShoppingCart /></button>
          <button><FiUser /></button>
        </div>
      </div>
    </nav>
  )
}