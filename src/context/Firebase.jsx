import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, set, ref } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCiMmmAcf3hd-BdMw_JAdkwAEcGbwNC1TM",
  authDomain: "ecommerce-web-54f99.firebaseapp.com",
  projectId: "ecommerce-web-54f99",
  storageBucket: "ecommerce-web-54f99.appspot.com",
  messagingSenderId: "211409749010",
  appId: "1:211409749010:web:f91ccba7a871da7717c4cb",
  databaseURL: "https://ecommerce-web-54f99-default-rtdb.firebaseio.com"
};

const firebaseApp = initializeApp(firebaseConfig);

const FirebaseContext = createContext(null);

export const useFirebase = () => useContext(FirebaseContext);

export const firebaseAuth = getAuth(firebaseApp);
const database = getDatabase(firebaseApp);

export const FirebaseProvider = (props) => {
  const signinUserWithEmailAndPassword = (email, password) => {
    return createUserWithEmailAndPassword(firebaseAuth, email, password);
  };

  const putData = (key, data) => set(ref(database, key), data);

  return (
    <FirebaseContext.Provider value={{ signinUserWithEmailAndPassword, putData }}>
      {props.children}
    </FirebaseContext.Provider>
  );
};
