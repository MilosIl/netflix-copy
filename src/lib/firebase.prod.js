import Firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from "../seed";

const firebaseConfig = {
  apiKey: "AIzaSyAF-0aMOPi1Eb-Hzf9uJgaRmBw3wSjN7XM",
  authDomain: "clone-netflix-811dd.firebaseapp.com",
  databaseURL: "https://clone-netflix-811dd.firebaseio.com",
  projectId: "clone-netflix-811dd",
  storageBucket: "clone-netflix-811dd.appspot.com",
  messagingSenderId: "560054981646",
  appId: "1:560054981646:web:a127e1636b4cabda36d85f",
};

const firebase = Firebase.initializeApp(firebaseConfig);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export  { firebase };


