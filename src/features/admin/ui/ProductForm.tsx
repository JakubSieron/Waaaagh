import React, { useState, useEffect } from 'react';
import { Product, ProductFormProps } from '@/shared/types/product';
import styles from './ProductForm.module.scss';


export const ProductForm: React.FC<ProductFormProps> = ({ product, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState<Omit<Product, 'id'> & { trending: boolean; discount: boolean }>({
    name: '',
    price: 0,
    description: '',
    image: '',
    category: 'miniatures',
    stock: 0,
    trending: false,
    discount: false,
  });

  useEffect(() => {
    if (product) {
      const { id, ...productData } = product;
      setFormData({...productData, trending: product.trending || false, discount: product.discount || false});
    }
  }, [product]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;

    setFormData(prev => {
      if (name === 'trending' || name === 'discount') {
        return { ...prev, [name]: (e.target as HTMLInputElement).checked };
      } else {
        return { ...prev, [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : (name === 'price' || name === 'stock' ? Number(value) : value) };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.formGroup}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="price">Price</label>
        <input
          type="number"
          id="price"
          name="price"
          value={formData.price}
          onChange={handleChange}
          min="0"
          step="0.01"
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="image">Image URL</label>
        <input
          type="text"
          id="image"
          name="image"
          value={formData.image}
          onChange={handleChange}
          required={!product}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="category">Category</label>
        <select
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        >
          <option value="miniatures">Miniatures</option>
          <option value="paints">Paints and tools</option>
          <option value="portfolio">Portfolio</option>
          <option value="books">Books</option>
          <option value="gallery">Gallery</option>
          <option value="contact">Contact</option>
        </select>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="stock">Stock</label>
        <input
          type="number"
          id="stock"
          name="stock"
          value={formData.stock}
          onChange={handleChange}
          min="0"
          required
        />
      </div>

      <div className={styles.checkboxGroup}>
  <input
    type="checkbox"
    id="trending"
    name="trending"
    checked={formData.trending}
    onChange={handleChange}
  />
  <label htmlFor="trending">Trending</label>
</div>

<div className={styles.checkboxGroup}>
  <input
    type="checkbox"
    id="discount"
    name="discount"
    checked={formData.discount}
    onChange={handleChange}
  />
  <label htmlFor="discount">Discount</label>
</div>


      <div className={styles.formActions}>
        <button type="submit" className={styles.submitButton}>
          {product ? 'Update Product' : 'Add Product'}
        </button>
        <button type="button" onClick={onCancel} className={styles.cancelButton}>
          Cancel
        </button>
      </div>
    </form>
  );
}; 