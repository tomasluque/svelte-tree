import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyB0c_NmiGf38Z3psAPuovLIO24n-U7ZEC8",
    authDomain: "svelte-tree-93217.firebaseapp.com",
    projectId: "svelte-tree-93217",
    storageBucket: "svelte-tree-93217.firebasestorage.app",
    messagingSenderId: "638881205610",
    appId: "1:638881205610:web:bbafc7b1c04b6a19bd6913",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();
