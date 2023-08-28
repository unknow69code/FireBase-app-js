// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCicDGE_79XoK9G0Av2sXKtqUI13jRPjd0",
  authDomain: "fir-app-js.firebaseapp.com",
  projectId: "fir-app-js",
  storageBucket: "fir-app-js.appspot.com",
  messagingSenderId: "850930851604",
  appId: "1:850930851604:web:03ed73227d09a8917d6c01",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
