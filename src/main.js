import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js"
import { auth } from './app/firebase.js'
import { logincheck } from "./app/loginCheck.js";

import './app/signupformm.js';
import './app/logout.js';
import './app/signinForm.js';
import './app/authGoogle.js';

onAuthStateChanged(auth, async (user) =>{
    logincheck(user)
//    if (user) {
//      logincheck(user)
//    } else {
//     logincheck(user)
//    }
});