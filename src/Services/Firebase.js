// import firebase from 'firebase/firestore';
import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/database'


var firebaseConfig = {
    apiKey: "AIzaSyDvinGReO7Ha0eFVUrARFbDAOWqFqgZB3c",
    authDomain: "need-assesment.firebaseapp.com",
    databaseURL: "https://need-assesment.firebaseio.com",
    projectId: "need-assesment",
    storageBucket: "need-assesment.appspot.com",
    messagingSenderId: "474330668382",
    appId: "1:474330668382:web:84cc6efa07ffe9537943cf",
    measurementId: "G-CH9C2TBNEN"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const auth = firebase.auth();
export const db = firebase.firestore();

export default firebase