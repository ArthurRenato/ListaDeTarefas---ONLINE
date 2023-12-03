// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBklu9_Flg4tgPpsM8_JLY2aoEnzckrpgw",
  authDomain: "lista-de-tarefas-98120.firebaseapp.com",
  projectId: "lista-de-tarefas-98120",
  storageBucket: "lista-de-tarefas-98120.appspot.com",
  messagingSenderId: "135766933426",
  appId: "1:135766933426:web:b78562d1b628ffd8956eab",
  measurementId: "G-2475HHVZE1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
