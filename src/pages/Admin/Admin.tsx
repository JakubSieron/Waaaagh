import React, { useState } from 'react';
import { productsApi } from '@/shared/api/products';
import { ProductFormData } from '@/shared/types/product';
import styles from './Admin.module.scss';

export const Admin = () => {
  const [formData, setFormData] = useState<ProductFormData>({
    name: '',
    price: 0,
    category: '',
    description: '',
    image: undefined
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'price' ? parseFloat(value) : value
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({
        ...prev,
        image: e.target.files![0]
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await productsApi.addProduct(formData);
      alert('Product added successfully!');
      setFormData({
        name: '',
        price: 0,
        category: '',
        description: '',
        image: undefined
      });
    } catch (error) {
      console.error('Error adding product:', error);
      alert('Error adding product. Please try again.');
    }
  };

  return (
    <div className={styles.admin}>
      <h1>Admin Dashboard</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Product Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
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
            onChange={handleInputChange}
            required
            min="0"
            step="0.01"
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            required
          >
            <option value="">Select a category</option>
            <option value="miniatures">Miniatures</option>
            <option value="paints">Paints</option>
            <option value="terrain">Terrain</option>
            <option value="modeling">Modeling</option>
            <option value="storage">Storage</option>
            <option value="workshop">Workshop</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="image">Product Image</label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleImageChange}
            accept="image/*"
          />
        </div>

        <button type="submit" className={styles.submitButton}>
          Add Product
        </button>
      </form>
    </div>
  );
};

export default Admin; 