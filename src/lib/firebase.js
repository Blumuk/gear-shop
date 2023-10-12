import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { writable } from "svelte/store";

const firebaseConfig = {
    apiKey: "AIzaSyACYSmviTxOZ3ZR-ehB301x1OktQ-2vNoY",
  authDomain: "gear-shop-66f86.firebaseapp.com",
  projectId: "gear-shop-66f86",
  storageBucket: "gear-shop-66f86.appspot.com",
  messagingSenderId: "677802514271",
  appId: "1:677802514271:web:3bf6ab0732c692d05548ea",
  measurementId: "G-NQVYMRMFDP"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();











function createUserAuth() {

  let unsubscribe
	
  const { subscribe } = writable(auth?.currentUser ?? null, (set) => {
    unsubscribe = onAuthStateChanged(auth, (user) => {
      set(user);
      console.log("Grabbed Auth")
    });

    return () => unsubscribe();
  });

  return {
    subscribe,
  };
}
export const userAuthStore = createUserAuth()