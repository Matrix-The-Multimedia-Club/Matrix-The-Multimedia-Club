import { initializeApp, getApps, getApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged
} from "firebase/auth";
import {
  getDatabase,
  ref,
  get,
  set,
  update,
  remove,
  onValue,
  push,
  child
} from "firebase/database";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyDemoKey_ReplaceWithYourActualFirebaseKey",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "matrix-club.firebaseapp.com",
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL || "https://matrix-club-default-rtdb.firebaseio.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "matrix-club",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "matrix-club.appspot.com",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "123456789012",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:123456789012:web:demo123456789",
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getDatabase(app);

export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account"
});

export {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  ref,
  get,
  set,
  update,
  remove,
  onValue,
  push,
  child
};

// Check if Firebase is using demo placeholder config
export const isFirebaseDemoConfig = () => {
  return (
    !import.meta.env.VITE_FIREBASE_API_KEY ||
    import.meta.env.VITE_FIREBASE_API_KEY.includes("DemoKey") ||
    import.meta.env.VITE_FIREBASE_API_KEY.includes("your_firebase_api_key")
  );
};
