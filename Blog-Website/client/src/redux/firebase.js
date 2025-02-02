// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
  const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-5daed.firebaseapp.com",
  projectId: "mern-blog-5daed",
  storageBucket: "mern-blog-5daed.appspot.com",
  messagingSenderId: "36176256386",
  appId: "1:36176256386:web:08b3d086d205182239839b"
};
//Initialize Firebase
export const app = initializeApp(firebaseConfig);
