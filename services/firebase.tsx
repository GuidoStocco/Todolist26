import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBLeFMKoYArcgPllyNmx4arSmQsYYcYS3M",
  authDomain: "todolist26-5b8a2.firebaseapp.com",
  projectId: "todolist26-5b8a2",
  storageBucket: "todolist26-5b8a2.firebasestorage.app",
  messagingSenderId: "890406583433",
  appId: "1:890406583433:web:8edacb994659f5034d1a58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);