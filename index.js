import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseApp = initializeApp({
    apiKey: "AIzaSyASc3etaKDMRoCqxB16NjztzaeFm_LcRfI",
    authDomain: "spring-25-capstone.firebaseapp.com",
    projectId: "spring-25-capstone",
    storageBucket: "spring-25-capstone.firebasestorage.app",
    messagingSenderId: "140091202007",
    appId: "1:140091202007:web:0fb32e15c891b70c175392",
    measurementId: "G-SFD1STFF04"
});

const db = getFirestore(firebaseApp);