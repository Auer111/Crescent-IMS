import {
  FirebaseAuthProvider,
  FirebaseDataProvider,
} from "react-admin-firebase";

const config = {
  apiKey: "AIzaSyBusOrJRfv_eH0S0tn67Aeh7Nz6PW9en5c",
  authDomain: "crescent-ims.firebaseapp.com",
  projectId: "crescent-ims",
  storageBucket: "crescent-ims.appspot.com",
  messagingSenderId: "607651373773",
  appId: "1:607651373773:web:4cd7a1c8952722254ebf84",
  measurementId: "G-438HGNXKZE",
};

const options = {
  logging: false,
};

const dataProvider = FirebaseDataProvider(config, options);
//export const authProvider = FirebaseAuthProvider(config, options);
