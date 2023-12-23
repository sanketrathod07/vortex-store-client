// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8vXoyHIrgtE2g1ybtdWWElU5wbmn_7U8",
  authDomain: "vortex-storee.firebaseapp.com",
  projectId: "vortex-storee",
  storageBucket: "vortex-storee.appspot.com",
  messagingSenderId: "641544655931",
  appId: "1:641544655931:web:bd9f2ab97d6a7290a7781e",
  measurementId: "G-MDS2WTVDPR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);