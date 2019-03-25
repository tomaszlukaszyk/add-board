import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var config = {
  apiKey: "AIzaSyBFa8hdzUfC-MF_HZAqXIDVTMu6riwtNaA",
  authDomain: "add-board.firebaseapp.com",
  databaseURL: "https://add-board.firebaseio.com",
  projectId: "add-board",
  storageBucket: "",
  messagingSenderId: "731506680199"
};
firebase.initializeApp(config);

export default firebase;
