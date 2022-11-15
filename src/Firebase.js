import { getFirestore } from 'firebase/firestore';
import { getDatabase } from "firebase/database";
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyCwCB_LB7HYrCPw6FcEEuK7flE_kR3T9xk",
  authDomain: "kq-1-1a499.firebaseapp.com",
  databaseURL: "https://kq-1-1a499.firebaseio.com",
  projectId: "kq-1-1a499",
  storageBucket: "kq-1-1a499.appspot.com",
  messagingSenderId: "370493268596",
  appId: "1:370493268596:web:97ff8cf99425d049882721",
  measurementId: "G-BLYFGZ04MF"
};
export const firebaseApp = initializeApp(firebaseConfig);

export const fireDatabase = getFirestore(firebaseApp);
export const fireRtDatabase = getDatabase(firebaseApp);