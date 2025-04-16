import { db, storage } from '../config/firebase';
import { collection, addDoc, updateDoc, deleteDoc, doc, getDocs, query, where } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { Product, ProductFormData } from '../types/product';

export const productsApi = {
  async getAllProducts() {
    const productsRef = collection(db, 'products');
    const snapshot = await getDocs(productsRef);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Product));
  },

  async getProductsByCategory(category: string) {
    const productsRef = collection(db, 'products');
    const q = query(productsRef, where('category', '==', category));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Product));
  },

  async addProduct(data: ProductFormData) {
    let imageUrl = '';
    
    if (data.image) {
      const storageRef = ref(storage, `products/${Date.now()}_${data.image.name}`);
      await uploadBytes(storageRef, data.image);
      imageUrl = await getDownloadURL(storageRef);
    }

    const productData = {
      name: data.name,
      price: data.price,
      category: data.category,
      description: data.description,
      image: imageUrl,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    const docRef = await addDoc(collection(db, 'products'), productData);
    return { id: docRef.id, ...productData };
  },

  async updateProduct(id: string, data: Partial<ProductFormData>) {
    const productRef = doc(db, 'products', id);
    const updateData: any = { ...data, updatedAt: new Date() };

    if (data.image) {
      const storageRef = ref(storage, `products/${Date.now()}_${data.image.name}`);
      await uploadBytes(storageRef, data.image);
      updateData.image = await getDownloadURL(storageRef);
    }

    await updateDoc(productRef, updateData);
    return { id, ...updateData };
  },

  async deleteProduct(id: string) {
    await deleteDoc(doc(db, 'products', id));
  }
}; 