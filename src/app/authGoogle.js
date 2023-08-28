import { GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js"
import { auth } from "./firebase.js"
import { message } from "./showmessage.js"

const buttonGoogle = document.querySelector("#googlelogin")

buttonGoogle.addEventListener('click',async () => {

 const provadier = new GoogleAuthProvider()
    try {
        const credentialsUser = await signInWithPopup(auth, provadier)
        const modal = bootstrap.Modal.getInstance(document.querySelector("#signupmodal"))
        modal.hide()

        message("Welcome " + credentialsUser.user.displayName, "success")

    } catch (error) { 
        console.log(error)
    }
})