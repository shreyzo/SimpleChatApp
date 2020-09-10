import firebase from 'firebase';

// Copy from firebase 
const firebaseConfig = {
    apiKey: "AIzaSyA3Nk8TnQhxZ9dcUMZxvF90w6tCX_ZZXRM",
    authDomain: "chatty-9610a.firebaseapp.com",
    databaseURL: "https://chatty-9610a.firebaseio.com",
    projectId: "chatty-9610a",
    storageBucket: "chatty-9610a.appspot.com",
    messagingSenderId: "195363101639",
    appId: "1:195363101639:web:8a4176fa49ede8fc53d7e2",
    measurementId: "G-V317HR2EEZ"
  };

  firebase.initializeApp(config);
  export const auth = firebase.auth;
  export const db = firebase.database();