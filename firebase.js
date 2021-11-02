// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwwCJLVHCzVexwYdPohuPhHtQBE6mSyNg",
  authDomain: "insta-remake-2.firebaseapp.com",
  projectId: "insta-remake-2",
  storageBucket: "insta-remake-2.appspot.com",
  messagingSenderId: "39702135271",
  appId: "1:39702135271:web:64e67289ff2874940cbd42",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
