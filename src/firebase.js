// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBusOrJRfv_eH0S0tn67Aeh7Nz6PW9en5c",
  authDomain: "crescent-ims.firebaseapp.com",
  projectId: "crescent-ims",
  storageBucket: "crescent-ims.appspot.com",
  messagingSenderId: "607651373773",
  appId: "1:607651373773:web:4cd7a1c8952722254ebf84",
  measurementId: "G-438HGNXKZE",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
export { auth };
