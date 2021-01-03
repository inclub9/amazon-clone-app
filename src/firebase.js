import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDyvj9370jP9mvwhtI5j3lS0cH6jhmtpoY",
    authDomain: "clone-a8c5d.firebaseapp.com",
    projectId: "clone-a8c5d",
    storageBucket: "clone-a8c5d.appspot.com",
    messagingSenderId: "1046819164591",
    appId: "1:1046819164591:web:7b1fb78737acf822fe9f5a"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};