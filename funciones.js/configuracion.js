//import { initializeApp } from "firebase/app";
//import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyBu-b-ZH846VT8vEBy7TcvCOEKqj_HMO8Y",
    authDomain: "calculo-4618d.firebaseapp.com",
    projectId: "calculo-4618d",
    storageBucket: "calculo-4618d.appspot.com",
    messagingSenderId: "884145599008",
    appId: "1:884145599008:web:e65646aa0d6f692ed08245"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();
