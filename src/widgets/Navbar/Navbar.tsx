import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaCog, FaShoppingCart, FaUser } from 'react-icons/fa'
import { useCartStore } from '@/shared/store/cartStore'
import { useAuth } from '@/features/auth/context/AuthContext'
import { AuthModal } from '@/features/auth/components/AuthModal'
import styles from './Navbar.module.scss'

export const Navbar: React.FC = () => {
  const { toggleCart } = useCartStore()
  const { user, isAuthenticated, logout } = useAuth()
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)

  const handleUserClick = () => {
    if (isAuthenticated) {
      logout()
    } else {
      setIsAuthModalOpen(true)
    }
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          WAAAGHT
        </Link>
        
        <div className={styles.links}>
          <Link to="/miniatures">Miniatures</Link>
          <Link to="/piantsandtools">PiantsAndTools</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/books">Books</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contactform">ContactForm</Link>
        </div>

        <div className={styles.icons}>
          <button onClick={toggleCart} className={styles.icon}>
            <FaShoppingCart size={20} />
          </button>
          {isAuthenticated && user?.role === 'admin' && (
            <Link to="/admin" className={styles.icon}>
              <FaCog size={20} />
            </Link>
          )}
          <button onClick={handleUserClick} className={styles.icon}>
            <FaUser size={20} />
          </button>
        </div>
      </div>

      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />
    </nav>
  )
}