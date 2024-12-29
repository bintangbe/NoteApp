import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

firebase.initializeApp({
    apiKey: "AIzaSyDICS7PldgEI2RUvNtqtnGMZrcHyKoFdbA",
    authDomain: "noteapp-9bd25.firebaseapp.com",
    projectId: "noteapp-9bd25",
    storageBucket: "noteapp-9bd25.firebasestorage.app",
    messagingSenderId: "868529540338",
    appId: "1:868529540338:web:c57c110330542baab5946b"
});

const FIREBASE = firebase;

export default FIREBASE;        