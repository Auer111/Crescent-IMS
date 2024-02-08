import { useEffect, useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import {
  Admin,
  AdminContext,
  CustomRoutes,
  Resource,
  ListGuesser,
  ShowGuesser,
  EditGuesser,
} from "react-admin";
import { FirebaseDataProvider } from "react-admin-firebase";
import { Box, CircularProgress } from "@mui/material";
import { initializeApp } from "firebase/app";
import { GoogleSignIn } from "./login/signIn";
import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithRedirect,
} from "firebase/auth";
import { UserList, UserShow, UserEdit, UserCreate } from "./user";
import GroupIcon from "@mui/icons-material/Group";
import OtherHousesIcon from "@mui/icons-material/OtherHouses";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import coverImage from "./img/cover.png";
import {
  LocationCreate,
  LocationList,
  LocationEdit,
  LocationShow,
} from "./location";
import { Dashboard } from "./dashboard";
import { ProgramView } from "./programs/view";
import { ProgramList, ProgramEdit, ProgramCreate } from "./programs/admin";

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
const dataProvider = FirebaseDataProvider(config, {});

export const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(true); // Added loading state
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setIsLoggedIn(true);
        setToken(await user.getIdToken());
        setIsAdmin(user?.email?.includes("@crescentlake.camp") ?? false);
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

  const clientApp = () => (
    <>
      <AdminContext dataProvider={dataProvider}>
        <Resource name="programs" list={ProgramView} />
      </AdminContext>
    </>
  );

  const adminApp = () => (
    <>
      <Admin dataProvider={dataProvider} dashboard={Dashboard}>
        <CustomRoutes>
          <Route path="/dashboard" element={<Dashboard />} />
        </CustomRoutes>
        <Resource
          name="programs"
          icon={LocalActivityIcon}
          list={ProgramList}
          show={ShowGuesser}
          edit={ProgramEdit}
          create={ProgramCreate}
        />
        <Resource
          icon={OtherHousesIcon}
          name="locations"
          list={LocationList}
          create={LocationCreate}
        />
        <Resource
          icon={GroupIcon}
          name="users"
          show={UserShow}
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
        />
      </Admin>
    </>
  );

  const login = () => (
    <>
      <div
        style={{
          backgroundImage: `url(${coverImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100vh"
        >
          <GoogleSignIn onClick={handleLoginClick}></GoogleSignIn>
        </Box>
      </div>
    </>
  );

  const progress = () => (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh" // Adjust as needed
      >
        <CircularProgress />
      </Box>
    </>
  );

  if (loading) {
    return progress(); // Show spinner while loading
  }
  if (!isLoggedIn) {
    return login();
  }

  return <>{isAdmin ? adminApp() : clientApp()}</>;
};
