
// capstone 25 info
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASc3etaKDMRoCqxB16NjztzaeFm_LcRfI",
  authDomain: "spring-25-capstone.firebaseapp.com",
  projectId: "spring-25-capstone",
  storageBucket: "spring-25-capstone.firebasestorage.app",
  messagingSenderId: "140091202007",
  appId: "1:140091202007:web:0fb32e15c891b70c175392",
  measurementId: "G-SFD1STFF04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);




