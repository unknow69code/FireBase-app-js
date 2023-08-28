import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js";
import { auth } from "./firebase.js";
import { message } from "./showmessage.js";


const SigninForm = document.querySelector('#Login-form')
SigninForm.addEventListener('submit',async e => {
    e.preventDefault();

    const email = SigninForm['login-email'].value
    const password = SigninForm['login-password'].value
    console.log(email,password);
    try {
        const UserCredentials = await signInWithEmailAndPassword(
            auth,
            email,
            password
        );
        console.log(UserCredentials)
        const modal = bootstrap.Modal.getInstance(document.querySelector("#signinmodal"))
        modal.hide();

        message("Welcome " + UserCredentials.user.email)
    } catch (error) {
        console.log(error.code)
       if (error.code === "auth/wrong-password") {
         message("Wrong Password", "error")
       } else if(error.code === "auth/user-not-found") {
         message("User not Found", "error")
       } else if (condition) {
         message(error.code, "error")
       }
    }
});