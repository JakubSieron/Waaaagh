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
import { Hero } from '../features/home/ui/Hero';
import { Categories } from '../features/home/ui/Categories';
import './Home.scss';

export const Home = () => {
  return (
    <div className="page">
      <Hero />
      <Categories />

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


    </div>
  );
}

export default Home;
