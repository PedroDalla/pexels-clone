import {initializeApp} from 'firebase/app'
import {getAuth, signInWithPopup, FacebookAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth'
import {getDatabase} from 'firebase/database'

var firebaseConfiguration = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSENGER_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
  };


  let app = initializeApp(firebaseConfiguration);
  const auth = getAuth(app)
  const database = getDatabase(app)

  export {auth, database, signInWithPopup, FacebookAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword}

