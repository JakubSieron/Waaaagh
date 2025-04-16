import { useEffect, useState } from 'react';
import { productService } from '../../features/products/services/productService';
import { ProductCard } from '@/shared/components/ProductCard/ProductCard';
import styles from './Miniatures.module.scss';

interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  price: number;
  description: string;
}

export const Miniatures = () => {
  const [miniatures, setMiniatures] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMiniatures = async () => {
      try {
        const data = await productService.getMiniatures();
        setMiniatures(data);
        console.log(data);
      } catch (err) {
        setError('Failed to load miniatures');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMiniatures();
  }, []);

  if (loading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Miniatures</h1>
          <p>Discover our collection of highly detailed miniatures</p>
        </div>
      </div>

      <div className={styles.shippingBanner}>
        Free Shipping on Orders Over AE50
      </div>

      <div className={styles.content}>
        <div className={styles.container}>
          <div className={styles.productGrid}>
            {miniatures.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                onFavoriteClick={() => {}}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Miniatures;