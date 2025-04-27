import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAj9ue3QRizx_IklumDlrJ-nd3pzh_LUqU",
  authDomain: "olx-app-db7e0.firebaseapp.com",
  projectId: "olx-app-db7e0",
  storageBucket: "olx-app-db7e0.appspot.com", 
  messagingSenderId: "632042749738",
  appId: "1:632042749738:web:e0742cadd38d0fa624a853",
  measurementId: "G-Q4WT1HNNG5"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
export const db = getFirestore(app);