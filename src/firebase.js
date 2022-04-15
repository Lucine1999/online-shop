import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import {
  getFirestore,
  collection,
  doc,
  onSnapshot,
  setDoc,
  getDocs,
  updateDoc,
  where,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAf-5wgUUG_8nEQv--NYk6RAee4_0hGZqE",
  authDomain: "online-shop-543a4.firebaseapp.com",
  projectId: "online-shop-543a4",
  storageBucket: "online-shop-543a4.appspot.com",
  messagingSenderId: "1070224139707",
  appId: "1:1070224139707:web:f09bc06cfaaa2bf51b109e",
};

initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore();

export {
  auth,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  db,
  collection,
  doc,
  onSnapshot,
  setDoc,
  getDocs,
  updateDoc,
  where,
};
