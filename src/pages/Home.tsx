import React from 'react';
import { Hero } from '../features/home/ui/Hero';
import { TrendingItems } from '../features/home/ui/TrendingItems';
import { FeaturedDeals } from '../features/home/ui/FeaturedDeals';
import { PopularCategories } from '../features/home/ui/PopularCategories';
import { Blog } from '../features/home/ui/Blog';
import './Home.scss';
import { Categories } from '@/features/home/ui/Categories';

const Home: React.FC = () => {
  return (
    <div className="main-content">
      <Hero />
      <Categories />
      <div className="container">
        <div className="left-column">
          <FeaturedDeals />
        </div>
        <div className="right-column">
          <TrendingItems />
          <PopularCategories />
        </div>
      </div>
      <div className="blog-section">
        <div className="container">
          <Blog />
        </div>
      </div>
    </div>
  );
};

export default Home;
