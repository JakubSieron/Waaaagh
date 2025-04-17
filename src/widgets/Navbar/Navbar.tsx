import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaCog, FaShoppingCart, FaUser, FaSignOutAlt } from 'react-icons/fa'
import { useCartStore } from '@/shared/store/cartStore'
import { useAuth } from '@/features/auth/context/AuthContext'
import { AuthModal } from '@/features/auth/components/AuthModal'
import { Modal } from '@/shared/components/Modal/Modal'
import styles from './Navbar.module.scss'

export const Navbar: React.FC = () => {
  const { toggleCart } = useCartStore()
  const { user, isAuthenticated, logout } = useAuth()
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false)
  const userMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setIsUserMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleUserClick = () => {
    if (isAuthenticated) {
      setIsUserMenuOpen(!isUserMenuOpen)
    } else {
      setIsAuthModalOpen(true)
    }
  }

  const handleLogout = () => {
    logout()
    setIsLogoutModalOpen(false)
    setIsUserMenuOpen(false)
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
          <div className={styles.userMenuContainer} ref={userMenuRef}>
            <button onClick={handleUserClick} className={styles.icon}>
              <FaUser size={20} />
            </button>
            {isUserMenuOpen && isAuthenticated && (
              <div className={styles.userMenu}>
                <div className={styles.userInfo}>
                  <span>Logged in as: {user?.username}</span>
                </div>
                <button 
                  onClick={() => setIsLogoutModalOpen(true)}
                  className={styles.logoutButton}
                >
                  <FaSignOutAlt /> Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />

      <Modal isOpen={isLogoutModalOpen} onClose={() => setIsLogoutModalOpen(false)}>
        <div className={styles.logoutModal}>
          <h2>Confirm Logout</h2>
          <p>Are you sure you want to logout?</p>
          <div className={styles.logoutButtons}>
            <button onClick={() => setIsLogoutModalOpen(false)}>Cancel</button>
            <button onClick={handleLogout} className={styles.confirmLogout}>Logout</button>
          </div>
        </div>
      </Modal>
    </nav>
  )
}