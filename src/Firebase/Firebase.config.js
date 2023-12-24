// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnYXOH0ZpZdBvpYCf1CCAx1muGmvxwZbQ",
  authDomain: "fir-password-email.firebaseapp.com",
  projectId: "fir-password-email",
  storageBucket: "fir-password-email.appspot.com",
  messagingSenderId: "32508467273",
  appId: "1:32508467273:web:b2aa8d8b80f32c3a2ac798"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;