// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "@firebase/auth";
import { FacebookAuthProvider } from "@firebase/auth";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCBrx6ngcN_jV8jprBRGz37NczJ0R3xdf0",
  authDomain: "pruebatecnicaarus.firebaseapp.com",
  projectId: "pruebatecnicaarus",
  storageBucket: "pruebatecnicaarus.appspot.com",
  messagingSenderId: "90081468314",
  appId: "1:90081468314:web:09d3be121509fb08fe2423",
  measurementId: "G-8BWGKG4DGE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const google= new GoogleAuthProvider();
const facebook= new FacebookAuthProvider();
const db= new getFirestore()

export{
    app,
    google,
    facebook,
    db
}