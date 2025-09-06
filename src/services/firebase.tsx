// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, Analytics, isSupported } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCV9sS5zGfGMwLFXTtKp9pX6qhHOyHAizU",
  authDomain: "elevateed-d09cb.firebaseapp.com",
  projectId: "elevateed-d09cb",
  storageBucket: "elevateed-d09cb.firebasestorage.app",
  messagingSenderId: "195439633320",
  appId: "1:195439633320:web:9bd11c8a5c777b433db39d",
  measurementId: "G-Y5DFJ4HZHJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Analytics only in browser environment
let analytics: Analytics | null = null;
if (typeof window !== 'undefined') {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

export { analytics };
export const auth = getAuth(app);
export const db = getFirestore(app);
