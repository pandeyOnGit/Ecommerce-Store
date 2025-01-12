// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiMmmAcf3hd-BdMw_JAdkwAEcGbwNC1TM",
  authDomain: "ecommerce-web-54f99.firebaseapp.com",
  projectId: "ecommerce-web-54f99",
  storageBucket: "ecommerce-web-54f99.firebasestorage.app",
  messagingSenderId: "211409749010",
  appId: "1:211409749010:web:f91ccba7a871da7717c4cb",
  databaseURL:"https://ecommerce-web-54f99-default-rtdb.firebaseio.com"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);

 export default app;