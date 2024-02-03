// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCnk0LL8GXWDBf2igD2wm_rcSXKpX2hGzk",
  authDomain: "weather-app-cbecd.firebaseapp.com",
  databaseURL: "https://weather-app-cbecd-default-rtdb.firebaseio.com",
  projectId: "weather-app-cbecd",
  storageBucket: "weather-app-cbecd.appspot.com",
  messagingSenderId: "558455062504",
  appId: "1:558455062504:web:1e3e52721b70ee0c5fae5d",
  measurementId: "G-ZS3BVQLRZW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const db = getDatabase();
// export const datab = database()