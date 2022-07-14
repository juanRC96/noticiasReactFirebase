// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgDa280XI6qcfW8FndF5YJNiT3k5bzqtM",
  authDomain: "tecnonews-ab3f7.firebaseapp.com",
  projectId: "tecnonews-ab3f7",
  storageBucket: "tecnonews-ab3f7.appspot.com",
  messagingSenderId: "1063544282571",
  appId: "1:1063544282571:web:d77752b0905c45b81d2a4e"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const storage = getStorage(app);

export default app
