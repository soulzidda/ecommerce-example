import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDhSl2OVEF7PEJY8CbNkXiTTS7eiuI-k3A",
  authDomain: "ecommerce-prac.firebaseapp.com",
  databaseURL: "https://ecommerce-prac.firebaseio.com",
  projectId: "ecommerce-prac",
  storageBucket: "ecommerce-prac.appspot.com",
  messagingSenderId: "940457827508",
  appId: "1:940457827508:web:ccde1a20d121ab65ba4be1",
  measurementId: "G-XN4H9HMDZD"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
