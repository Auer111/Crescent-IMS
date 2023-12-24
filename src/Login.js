// src/Login.js
import React from 'react';
import { auth } from './firebase';  // Import auth from './firebase'
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';  // Import signInWithPopup and GoogleAuthProvider from 'firebase/auth'

const Login = () => {
  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();  // Use GoogleAuthProvider from 'firebase/auth'
    try {
      await signInWithPopup(auth, provider);  // Use signInWithPopup from 'firebase/auth' and pass auth as the first argument
    } catch (error) {
      console.error('Error signing in:', error);
    }
  };

  return (
    <div>
      <button variant="contained" color="primary" onClick={handleLogin}>
        Login with Google
      </button>
    </div>
  );
};

export default Login;
