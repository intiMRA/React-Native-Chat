import firebase from "firebase";

let config = {
    apiKey: "AIzaSyCrws8eRzrkII1ENYMAWASxl9Vh143aPMQ",
    authDomain: "swen325a2.firebaseapp.com",
    databaseURL: "https://swen325a2.firebaseio.com",
    projectId: "swen325a2",
    storageBucket: "swen325a2.appspot.com",
    messagingSenderId: "344084334206"
};
firebase.initializeApp(config);

export default firebase;