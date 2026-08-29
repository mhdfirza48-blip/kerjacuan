// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth,
  setPersistence,
  browserLocalPersistence
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Konfigurasi Firebase
const firebaseConfig = {
  apiKey: "PASTE_API_KEY_FIREBASE_KAMU",
  authDomain: "kerjacuan-374dd.firebaseapp.com",
  projectId: "kerjacuan-374dd",
  storageBucket: "kerjacuan-374dd.firebasestorage.app",
  messagingSenderId: "677864393276",
  appId: "1:677864393276:web:b6bd6852dc8ede6904d139",
  measurementId: "G-WZ27QDDH6L"
};

// Init Firebase
const app = initializeApp(firebaseConfig);

// Authentication
const auth = getAuth(app);

setPersistence(auth, browserLocalPersistence).catch((error) => {
  console.error("Persistence error:", error);
});

// Firestore
const db = getFirestore(app);

// Export
export {
  app,
  auth,
  db
};
