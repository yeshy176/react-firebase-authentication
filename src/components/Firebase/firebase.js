// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  updatePassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {getFirestore, enablePersistence} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.React_APP_APP_ID,
};

// Initialize Firebase
class Firebase {
  constructor() {
    this.app = initializeApp(firebaseConfig);
    this.db = getFirestore(this.app);
    this.auth = getAuth();
  }

  // Auth API
  doCreateUserWithEmailAndPassword = (email, password) => {
    return createUserWithEmailAndPassword(this.auth, email, password);
  };

  doSignInWithEmailAndPassword = (email, password) => {
    return signInWithEmailAndPassword(this.auth, email, password);
  };

  doSignOut = () => signOut(this.auth);

  doPasswordReset = email => sendPasswordResetEmail(this.auth, email);

  doPasswordUpdate = password => updatePassword(this.auth, password);

  doOnAuthStateChanged = callback => onAuthStateChanged(this.auth, callback);
}

export default Firebase;
