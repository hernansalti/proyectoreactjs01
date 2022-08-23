import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCy0xmugSBHi48mfUuaqllWjSB49TCj7y0",
  authDomain: "proyectoreactjs01.firebaseapp.com",
  projectId: "proyectoreactjs01",
  storageBucket: "proyectoreactjs01.appspot.com",
  messagingSenderId: "270670798034",
  appId: "1:270670798034:web:02dec1ad82e88f3ecce10b",
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
