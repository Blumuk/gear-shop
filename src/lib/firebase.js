import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
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

const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth()
export const storage = getStorage();

//Firebase Auth Store
function createUserAuth(){
	const { subscribe, set, update } = writable();

	return{
		subscribe,
    updateAuth: (authObj) => {set(authObj)},
    logout: () => {signOut(auth).then(() => {set(null)}).catch((error) => {console.log(error)});},

	}

}
export const userAuthStore = createUserAuth()



function createUserData(){
	const { subscribe, set, update } = writable();

	return{
		subscribe,
    updateAuth: (authObj) => {set(authObj)},
    logout: () => {signOut(auth).then(() => {set(null)}).catch((error) => {console.log(error)});},

	}

}
export const userDataStore = createUserData()








onAuthStateChanged(auth, (user) => {
  if (user) {
    userAuthStore.updateAuth(user)
    console.log("authed")
  } else {
    userAuthStore.updateAuth(null)
}});