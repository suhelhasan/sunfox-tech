import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDvinGReO7Ha0eFVUrARFbDAOWqFqgZB3c",
    authDomain: "need-assesment.firebaseapp.com",
    databaseURL: "https://need-assesment.firebaseio.com",
    projectId: "need-assesment",
    storageBucket: "need-assesment.appspot.com",
    messagingSenderId: "474330668382",
    appId: "1:474330668382:web:84cc6efa07ffe9537943cf",
    measurementId: "G-CH9C2TBNEN"
  };

  firebase.initializeApp(firebaseConfig);
  export default firebase;