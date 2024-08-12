import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBfe6OCHtnkel8AnqZk_AGVNLNGweOjJj8",
  authDomain: "arrivin-9a6a4.firebaseapp.com",
  projectId: "arrivin-9a6a4",
  storageBucket: "arrivin-9a6a4.appspot.com",
  messagingSenderId: "720485517344",
  appId: "1:720485517344:web:4ae8d01024a54622969445"
};

initializeApp(firebaseConfig);

const db = getFirestore();

export default db;