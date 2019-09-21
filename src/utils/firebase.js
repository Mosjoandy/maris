// import firebase from 'firebase/app';

// // Initialize Firebase
// var config = {
//     apiKey: process.env.REACT_APP_API_KEY,
//     authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//     databaseURL: process.env.REACT_APP_DATABASE_URL,
//     projectId: process.env.REACT_APP_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_APP_ID
// };
// firebase.initializeApp(config);
// console.log("start your engines!");

// // export const googleProvider = new firebase.auth.GoogleAuthProvider();
// // export const auth = firebase.auth();
// export default firebase



import firebase from 'firebase/app';
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyDTIAYP0HBXWwJysY67EI3Z8icR-fKIq2Q",
    authDomain: "marisafranco-d995d.firebaseapp.com",
    databaseURL: "https://marisafranco-d995d.firebaseio.com",
    projectId: "marisafranco-d995d",
    storageBucket: "",
    messagingSenderId: "687549428443",
    appId: "1:687549428443:web:cf7640157c5cc1da"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);