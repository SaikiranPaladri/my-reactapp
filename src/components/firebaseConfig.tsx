// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXoS5J8QNB5x4EXMfkO4mjS8LQekpxG7g",
  authDomain: "motoxchange-623b0.firebaseapp.com",
  projectId: "motoxchange-623b0",
  storageBucket: "motoxchange-623b0.firebasestorage.app",
  messagingSenderId: "981368385871",
  appId: "1:981368385871:web:f555e004223555c246153a",
  measurementId: "G-9YWVN5FYM3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
