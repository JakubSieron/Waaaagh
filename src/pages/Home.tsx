import React from 'react';
import { Link } from 'react-router-dom';
import { categories, trendingItems, featuredDeals, popularCategories } from '../mockData';
import { 
  FiSearch, 
  FiShoppingCart, 
  FiUser, 
  FiHeart, 
  FiChevronLeft, 
  FiChevronRight, 
  FiTrendingUp,
  FiGift,
  FiStar,
  FiClock
} from 'react-icons/fi';
import { FaDiceD20, FaBrush, FaMountain } from 'react-icons/fa';
import logo from '../assets/images/logo.svg';
import dragonImage from '../assets/images/hero/dragon.png';
import './Home.scss';

export const Home = () => {
  return (
    <div className="page">
      <nav className="navbar">
        <div className="container">
          <Link to="/" className="navbar-logo">
            <img src={logo} alt="Logo" />
          </Link>
          <div className="navbar-links">
            <Link to="/featu">FEATU</Link>
            <Link to="/catalog">CATALOG</Link>
            <Link to="/gear">GEAR</Link>
            <Link to="/cart">CART</Link>
          </div>
          <div className="navbar-actions">
            <button>
              <FiSearch />
            </button>
            <button>
              <FiShoppingCart />
            </button>
            <button>
              <FiUser />
            </button>
          </div>
        </div>
      </nav>

      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Explore top quality miniatures & accessories for gaming</h1>
            <p>Browse by category, brand or special</p>
            <div className="search-box">
              <div className="input-wrapper">
                <input 
                  type="text" 
                  placeholder="Search for miniatures, paints, terrain..." 
                />
                <FiSearch className="search-icon" />
              </div>
              <button className="go-button">Go</button>
            </div>
          </div>
          <div className="hero-image">
            <img src={dragonImage} alt="Dragon miniature" />
          </div>
        </div>
      </section>

      <section className="categories">
        <div className="container">
          <h2>Categories</h2>
          <div className="category-grid">
            {categories.map((category) => (
              <Link to={`/category/${category.slug}`} key={category.id} className="category-card">
                <img 
                  src={`https://picsum.photos/200?random=${category.id}`} 
                  alt={category.name} 
                />
                <h3>{category.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="main-content">
        <div className="container">
          <div className="left-column">
            <div className="featured-deals">
              <h2>
                <FiGift />
                Featured Deals
              </h2>
              <div className="deals-grid">
                <div className="deal-card">
                  <img src="https://picsum.photos/400/300?random=1" alt="Miniature" />
                  <div className="content">
                    <div className="top">
                      <h3>Miniature</h3>
                      <p>by Master</p>
                    </div>
                    <div className="bottom">
                      <div className="discount">25% OFF</div>
                      <button className="buy-button">Buy</button>
                    </div>
                  </div>
                </div>
                <div className="deal-card">
                  <img src="https://picsum.photos/400/300?random=2" alt="New Arrivals" />
                  <div className="content">
                    <div className="top">
                      <h3>New Arrivals</h3>
                      <p>Discover our latest</p>
                    </div>
                    <div className="bottom">
                      <div className="discount">20% OFF</div>
                      <button className="buy-button">Buy</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="limited-offer">
                <h3>LIMITED OFFER</h3>
                <p>Ending soon</p>
                <div className="timer">
                  <div className="time-block">1</div>
                  <div className="time-block">1</div>
                  <div className="separator">:</div>
                  <div className="time-block">5</div>
                  <div className="time-block">7</div>
                </div>
              </div>
            </div>
          </div>

          <div className="right-column">
            <div className="trending">
              <div className="section-header">
                <h2>
                  <FiTrendingUp />
                  Trending Items
                </h2>
                <div className="navigation">
                  <button>
                    <FiChevronLeft />
                  </button>
                  <button>
                    <FiChevronRight />
                  </button>
                </div>
              </div>
              <div className="trending-grid">
                {trendingItems.map((item) => (
                  <div key={item.id} className="product-card">
                    <img src={`https://picsum.photos/300/200?random=${item.id}`} alt={item.title} />
                    <button className="favorite">
                      <FiHeart />
                    </button>
                    <div className="info">
                      <h3 className="title">{item.title}</h3>
                      <div className="bottom-row">
                        <div className="price">
                          <span>$</span>
                          <span>{item.price}</span>
                        </div>
                        <button className="buy-button">Buy Now</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="popular-categories">
              <div className="section-header">
                <FiStar />
                <h2>Popular Categories</h2>
              </div>
              <div className="category-cards">
                {popularCategories.map((category) => (
                  <Link to={`/category/${category.id}`} key={category.id} className="category-card">
                    <img src={`https://picsum.photos/800/400?random=${category.id}`} alt={category.title} />
                    <div className="content">
                      <h3>{category.title}</h3>
                      <p>{category.description}</p>
                      <button className="browse-button">Browse</button>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-section">
        <h2>Latest Blog Posts</h2>
        <div className="blog-grid">
          <div className="blog-card">
            <img src="https://picsum.photos/400/300" alt="Blog post" />
            <div className="content">
              <h3>Getting Started with Miniature Painting</h3>
              <p>Learn the essential techniques and tools needed to start your miniature painting journey.</p>
            </div>
            <div className="author">
              <img src="https://picsum.photos/40/40" alt="Author" />
              <span>By John Smith • 5 days ago</span>
            </div>
          </div>
          <div className="blog-card">
            <img src="https://picsum.photos/400/301" alt="Blog post" />
            <div className="content">
              <h3>Advanced Terrain Building Tips</h3>
              <p>Take your terrain crafting skills to the next level with these pro techniques.</p>
            </div>
            <div className="author">
              <img src="https://picsum.photos/40/41" alt="Author" />
              <span>By Jane Doe • 1 week ago</span>
            </div>
          </div>
          <div className="blog-card">
            <img src="https://picsum.photos/400/302" alt="Blog post" />
            <div className="content">
              <h3>Color Theory for Miniatures</h3>
              <p>Master the art of color selection and create stunning miniature paint schemes.</p>
            </div>
            <div className="author">
              <img src="https://picsum.photos/40/42" alt="Author" />
              <span>By Mike Johnson • 2 weeks ago</span>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-content">
          <div className="footer-section">
            <img src="/logo.png" alt="Waaaght Logo" className="logo" />
            <p>Your one-stop shop for all your miniature painting and hobby needs. Quality products, expert advice, and a vibrant community.</p>
            <div className="social-links">
              <a href="#"><FaDiceD20 /></a>
              <a href="#"><FaBrush /></a>
              <a href="#"><FaMountain /></a>
            </div>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Shop</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Categories</h3>
            <ul>
              <li><a href="#">Miniatures</a></li>
              <li><a href="#">Paint Sets</a></li>
              <li><a href="#">Brushes</a></li>
              <li><a href="#">Terrain</a></li>
              <li><a href="#">Accessories</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Store Hours</h3>
            <div className="schedule">
              <span>Monday - Friday: 9am - 8pm</span>
              <span>Saturday: 10am - 6pm</span>
              <span>Sunday: 11am - 5pm</span>
            </div>
            <p>Customer Support:<br />support@waaaght.com</p>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; 2024 Waaaght. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
