import firebase from 'firebase/app'
import 'firebase/firestore'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDJe8RsMG8qqEiO7kg-joY5Hg7zfrWC7EE",
    authDomain: "todo-ninja-2222a.firebaseapp.com",
    databaseURL: "https://todo-ninja-2222a.firebaseio.com",
    projectId: "todo-ninja-2222a",
    storageBucket: "todo-ninja-2222a.appspot.com",
    messagingSenderId: "691783778374"
  };
  firebase.initializeApp(config);
  const db = firebase.firestore();

  export default db;