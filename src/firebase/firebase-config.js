import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

export const firebaseConfig = {
    apiKey: "AIzaSyB2Mznkm2KZWyfvvgzcQ4Qyar6TbvXxLQw",
    authDomain: "gafa-peugeot.firebaseapp.com",
    projectId: "gafa-peugeot",
    storageBucket: "gafa-peugeot.appspot.com",
    messagingSenderId: "609781926073",
    appId: "1:609781926073:web:1f86aadc6a53d2f61c3368"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// esto es BD
const db = firebase.firestore(); 

// autentication por google
const googleAuthProvide = new firebase.auth.GoogleAuthProvider();

export{
    db,
    googleAuthProvide,
    firebase
}
