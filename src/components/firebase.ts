import firebase from "firebase/compat/app";
import "firebase/compat/firestore";


firebase.initializeApp({
  apiKey: import.meta.env.VITE_APP_APIKEY,
  authDomain: import.meta.env.VITE_APP_AUTHDOMAIN,
  databaseURL: import.meta.env.VITE_APP_DB,
  projectId: import.meta.env.VITE_APP_PID,
  storageBucket: import.meta.env.VITE_APP_SB,
  messagingSenderId: import.meta.env.VITE_APP_SID,
  appId: import.meta.env.VITE_APP_APPID,
  measurementId: import.meta.env.VITE_APP_MID,
});

const fb = firebase;
export default fb;
