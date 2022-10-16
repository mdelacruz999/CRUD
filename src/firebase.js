
import firebase from "firebase/app";
import 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYFVfcnRuurYneJnF7KHdGAZWkUMajWjk",
  authDomain: "segundocrud-30dee.firebaseapp.com",
  projectId: "segundocrud-30dee",
  storageBucket: "segundocrud-30dee.appspot.com",
  messagingSenderId: "928428576041",
  appId: "1:928428576041:web:439d27d181c919b367bb38"
};

firebase.initializeApp(firebaseConfig);
export {firebase};