// src/firebase.js

// ✅ Import only what's needed
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider  } from "firebase/auth";

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
const githubProvider = new GithubAuthProvider();

// ✅ Export for use in Login page
export { auth, provider, githubProvider  };




// PORT=4001
// MONGODB_URI=mongodb+srv://deepakpandeyofficially:yPgg7mZFJvXvdK24@cluster0.vg2w9jx.mongodb.net/placement

// JWT_SECRET_KEY=81gpOxCPlBOrKhuxojvHc4nxphqSu+fpe8THkonCpCE=
// FRONTEND_URL=https://bpit-careerhub.onrender.com