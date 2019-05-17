import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyD5sSEi8-4P9e0sz927i3KOoN-WjwBzy_4",
    authDomain: "react-ace-card.firebaseapp.com",
    databaseURL: "https://react-ace-card.firebaseio.com",
    projectId: "react-ace-card",
    storageBucket: "react-ace-card.appspot.com",
    messagingSenderId: "504140008424",
    appId: "1:504140008424:web:795432249a09e5a4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore()

  export default firebase;