import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // ✅ Add the missing import

// ✅ Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAj9ue3QRizx_IklumDlrJ-nd3pzh_LUqU",
  authDomain: "olx-app-db7e0.firebaseapp.com",
  projectId: "olx-app-db7e0",
  storageBucket: "olx-app-db7e0.appspot.com", // ✅ fixed .app to .appspot.com
  messagingSenderId: "632042749738",
  appId: "1:632042749738:web:e0742cadd38d0fa624a853",
  measurementId: "G-Q4WT1HNNG5"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Get Auth instance
const auth = getAuth(app);

// ✅ Get Firestore instance
const db = getFirestore(app);

// ✅ Named export
export { auth, db };
