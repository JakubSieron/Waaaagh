import React from 'react'
import { Link } from 'react-router-dom'
import { FaCog, FaShoppingCart, FaUser } from 'react-icons/fa'
import { useCartStore } from '@/shared/store/cartStore'
import styles from './Navbar.module.scss'

export const Navbar: React.FC = () => {
  const { toggleCart } = useCartStore()

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          WAAAGHT
        </Link>
        
        <div className={styles.links}>
          <Link to="/miniatures">Miniatures</Link>
          <Link to="/paints">Paints</Link>
          <Link to="/terrain">Terrain</Link>
          <Link to="/modeling">Modeling</Link>
          <Link to="/storage">Storage</Link>
          <Link to="/workshop">Workshop</Link>
        </div>

        <div className={styles.icons}>
          <Link to="/admin" className={styles.icon}>
            <FaCog size={20} />
          </Link>
          <button onClick={toggleCart} className={styles.icon}>
            <FaShoppingCart size={20} />
          </button>
          <Link to="/profile" className={styles.icon}>
            <FaUser size={20} />
          </Link>
        </div>
      </div>
    </nav>
  )
}