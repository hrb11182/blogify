import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDr5h5dvLbgVcDg8CfnZ1j_r5H0Co2JM7E",
  authDomain: "ab-blog-90adc.firebaseapp.com",
  projectId: "ab-blog-90adc",
  storageBucket: "ab-blog-90adc.appspot.com",
  messagingSenderId: "91055056992",
  appId: "1:91055056992:web:42c316c9e0c10b8df17b05"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };