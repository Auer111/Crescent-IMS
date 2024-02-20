import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, redirect } from "react-router-dom";
import {
  Admin,
  AdminContext,
  CustomRoutes,
  Resource,
  ListGuesser,
  ShowGuesser,
  EditGuesser,
  SaveButton,
  ResourceContextProvider,
} from "react-admin";
import { FirebaseDataProvider } from "react-admin-firebase";
import { Box, CircularProgress } from "@mui/material";
import { initializeApp } from "firebase/app";
import { GoogleSignIn } from "./login/signIn";
import {
  GoogleAuthProvider,
  User,
  getAuth,
  onAuthStateChanged,
  signInWithRedirect,
} from "firebase/auth";
import {
  ProfileList,
  ProfileShow,
  ProfileEdit,
  ProfileCreate,
} from "./profile";
import { Profile } from "./profile/profile";
import GroupIcon from "@mui/icons-material/Group";
import OtherHousesIcon from "@mui/icons-material/OtherHouses";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import {
  LocationCreate,
  LocationList,
  LocationEdit,
  LocationShow,
} from "./location";
import { Dashboard } from "./dashboard";
import {
  ProgramShow,
  ProgramList,
  ProgramEdit,
  ProgramCreate,
  ProgramUpload,
  ProgramInvite,
  ProgramInvited,
  ProgramCollection,
  ResourceProgram,
  ProgramGallery,
} from "./programs";

import clbcLogo from "./img/clbc.png";
import coverImage from "./img/cover.webp";
import { Nav } from "./nav";

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
  const [profile, setProfile] = useState<Profile | null>(null);
  const auth = getAuth();

  const setProfileFromUser = (profile: any) => {
    setProfile(profile);
    setLoading(false);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setIsLoggedIn(true);
        setToken(await user.getIdToken());
        setIsAdmin(user?.email?.includes("@crescentlake.camp") ?? false);
        getProfile(user);
      } else {
        setIsLoggedIn(false);
        setLoading(false);
      }

      // Set loading to false once auth state is determined
    });

    const getProfile = (user: User) => {
      dataProvider.getOne("profiles", { id: user.uid }).then((response) => {
        if (response?.data?.email.includes("@")) {
          setProfileFromUser(response.data);
          setLoading(false);
        } else {
          createProfile(user);
        }
      });
    };

    const createProfile = (user: User) => {
      if (profile === null) {
        dataProvider
          .create("profiles", {
            data: { id: user.uid, email: user.email, name: user.displayName },
          })
          .then((response) => setProfileFromUser(response.data));
      }
    };

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
        <ResourceContextProvider value="programs">
          <Routes>
            <Route
              path="programs/:id/invite"
              element={<ProgramInvited profile={profile!} />}
            />
            <Route path="programs/:id" element={<ProgramGallery />} />
            <Route
              path="programs/*"
              element={<ProgramCollection profile={profile!} />}
            />
          </Routes>
        </ResourceContextProvider>
        <Nav />
      </AdminContext>
    </>
  );

  const adminApp = () => (
    <>
      <Admin dataProvider={dataProvider} dashboard={Dashboard}>
        <CustomRoutes>
          <Route path="/dashboard" element={<Dashboard />} />
        </CustomRoutes>
        <ResourceProgram
          name="programs"
          icon={LocalActivityIcon}
          list={ProgramList}
          show={ProgramShow}
          edit={ProgramEdit}
          create={ProgramCreate}
          upload={ProgramUpload}
          invite={ProgramInvite}
        />
        <Resource
          icon={OtherHousesIcon}
          name="locations"
          list={LocationList}
          create={LocationCreate}
        />
        <Resource
          icon={GroupIcon}
          name="profiles"
          show={ProfileShow}
          list={ProfileList}
          edit={ProfileEdit}
        />
      </Admin>
    </>
  );

  const login = () => (
    <>
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          display="grid"
          height="100vh"
          sx={{ placeContent: "space-between", justifyItems: "center" }}
        >
          <img
            src={clbcLogo}
            alt="Crescent Lake Bible Camp Logo"
            style={{
              width: "min(100%,20em)",
              marginInline: "auto",
              paddingTop: "5vh",
            }}
          ></img>
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
