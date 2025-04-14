import React from 'react'
import { Link } from 'react-router-dom'
import { FiShoppingCart } from 'react-icons/fi'
import { useCartStore } from '@/shared/store/cartStore'
import styles from './Navbar.module.scss'

export const Navbar = () => {
  const toggleCart = useCartStore(state => state.toggleCart)
  const totalItems = useCartStore(state => state.totalItems)

  const handleCartClick = (e: React.MouseEvent) => {
    e.preventDefault()
    toggleCart()
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link to="/" className={styles['navbar-logo']}>
          WAAAGHT!
        </Link>
        <div className={styles['navbar-links']}>
          <Link to="/miniatures">Miniatures</Link>
          <Link to="/paints">Paints</Link>
          <Link to="/terrain">Terrain</Link>
          <Link to="/modeling">Modeling</Link>
          <Link to="/storage">Storage</Link>
          <Link to="/workshop">Workshop</Link>
        </div>
        <div className={styles['navbar-actions']}>
          <button className={styles.cartButton} onClick={handleCartClick}>
            <FiShoppingCart />
            {totalItems() > 0 && (
              <span className={styles.cartCount}>{totalItems()}</span>
            )}
          </button>
        </div>
      </div>
    </nav>
  )
}