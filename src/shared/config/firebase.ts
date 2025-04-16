import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCrAeGs8p3gqhuRZFgRQ1xIQM0GEKI5l0o",
    authDomain: "waaahg-3ae52.firebaseapp.com",
    projectId: "waaahg-3ae52",
    storageBucket: "waaahg-3ae52.firebasestorage.app",
    messagingSenderId: "760695541657",
    appId: "1:760695541657:web:2bee4e594786ae15360d08",
    measurementId: "G-G56KMHRG3T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app); 