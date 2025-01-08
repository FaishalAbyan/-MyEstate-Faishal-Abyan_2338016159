// import firebase from "firebase/app";
import 'firebase/auth'
// import 'firebase/firestore'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCBsd-1IR5UNwzzN0hysz_lypGpb_Y_ATY",
    authDomain: "my-estate-2baba.firebaseapp.com",
    projectId: "my-estate-2baba",
    storageBucket: "my-estate-2baba.firebasestorage.app",
    messagingSenderId: "461547924979",
    appId: "1:461547924979:web:8347a4045f50311c7e7686",
    measurementId: "G-S420DL1EMP",
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  export default app;