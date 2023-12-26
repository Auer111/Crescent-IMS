import { Admin, Resource } from "react-admin";
import { dataProvider } from "./dataProvider";
import { Box, CircularProgress } from "@mui/material";
import { UserList, UserShow, UserEdit, UserCreate } from "./user";
import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithRedirect,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { useEffect, useState } from "react";
import SignIn, { GoogleSignIn } from "./google/signIn";

const config = {
  apiKey: "AIzaSyBusOrJRfv_eH0S0tn67Aeh7Nz6PW9en5c",
  authDomain: "crescent-ims.firebaseapp.com",
  projectId: "crescent-ims",
  storageBucket: "crescent-ims.appspot.com",
  messagingSenderId: "607651373773",
  appId: "1:607651373773:web:4cd7a1c8952722254ebf84",
  measurementId: "G-438HGNXKZE",
};

const app = initializeApp(config);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true); // Added loading state
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setLoading(false); // Set loading to false once auth state is determined
    });

    return () => {
      unsubscribe();
    };
  }, [auth]);

  const handleLoginClick = () => {
    setLoading(true); // Set loading to true when login button is clicked
    signInWithRedirect(auth, provider);
  };

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh" // Adjust as needed
      >
        <CircularProgress />
      </Box>
    ); // Show spinner while loading
  }

  if (!isLoggedIn) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh" // Adjust as needed
      >
        <GoogleSignIn onClick={handleLoginClick}></GoogleSignIn>
      </Box>
    );
  }

  return (
    <Admin dataProvider={dataProvider}>
      <Resource
        name="users"
        show={UserShow}
        list={UserList}
        edit={UserEdit}
        create={UserCreate}
      />
    </Admin>
  );
};
