import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

export const firebaseConfig = {
    apiKey: "AIzaSyDFODUtVN6Lkf_X1D_eHO2axYB1iaVezIA",
    authDomain: "chiletraders-e487d.firebaseapp.com",
    projectId: "chiletraders-e487d",
    storageBucket: "chiletraders-e487d.appspot.com",
    messagingSenderId: "881711685611",
    appId: "1:881711685611:web:ebe7405aee3a05996e83ae"
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
