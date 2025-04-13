import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

// Your web app's Firebase configuration
// Replace with your actual Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyAa9Lly-Gg5emnElAHI6vNBE8s85Ain9V4",
    authDomain: "gazo-smart-system.firebaseapp.com",
    projectId: "gazo-smart-system",
    storageBucket: "gazo-smart-system.firebasestorage.app",
    messagingSenderId: "316107202230",
    appId: "1:316107202230:web:db0355cb34d4b0566e5017"
  };

  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);