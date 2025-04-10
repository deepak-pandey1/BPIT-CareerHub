// src/firebase.js

// ✅ Import only what's needed
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// ✅ Your Firebase config (paste your exact one here)
const firebaseConfig = {
  apiKey: "AIzaSyDRtasfgRd-Q79JvLmto_hL1HC32PkbkHE",
  authDomain: "bpit-placement.firebaseapp.com",
  projectId: "bpit-placement",
  storageBucket: "bpit-placement.firebasestorage.app",
  messagingSenderId: "311172926940",
  appId: "1:311172926940:web:ea3da45b27100a1d3d5319",
  measurementId: "G-4MB67D0TJF"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Initialize Auth and Provider
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// ✅ Export for use in Login page
export { auth, provider };
