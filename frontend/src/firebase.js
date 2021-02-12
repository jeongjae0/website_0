import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDITfQGcrMFIZiX9gaOdmYG8bnwXtvnGhQ",
  authDomain: "contact-form-b0233.firebaseapp.com",
  projectId: "contact-form-b0233",
  storageBucket: "contact-form-b0233.appspot.com",
  messagingSenderId: "19745381830",
  appId: "1:19745381830:web:579c8d571f7694c3f626c7",
});

var db = firebaseApp.firestore();

export { db };
