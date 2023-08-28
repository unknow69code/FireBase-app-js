import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js";
import { auth } from "./firebase.js";
import { message } from "./showmessage.js";

const signupForm = document.querySelector("#signup-form");
signupForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = signupForm["email"].value;
  const password = signupForm["password"].value;
  console.log(email, password);
  try {
    const UserCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(UserCredentials);
    message("Welcome " + UserCredentials.user.email, "success") 
  

    /* Close the signup Modal */
    const signupModal = document.querySelector("#signupmodal");
    const Modal = bootstrap.Modal.getInstance(signupModal);
    Modal.hide();
  } catch (error) {
    /* The commented code `//console.log(error.message);` and `//console.log(error.code);` are used to
   log the error message and error code to the console. These statements are useful for debugging
   purposes, as they provide information about the specific error that occurred during the user
   signup process. By logging the error message and error code, you can identify and troubleshoot
   any issues that may arise during the signup process. */
    //console.log(error.message);
    //console.log(error.code);

    /* The code block is handling different 
    error scenarios that can occur during 
    the user signup process. */
    if (error.code === "auth/email-already-in-use") {
      message("Email alredy in use", "error");
    } else if (error.code === "auth/invalid-email") {
      message("Email invalido", "email");
    } else if (error.code === "auth/weak-password") {
      message("Password is too weak", "error");
    } else if (error.code) {
      message("Something went wrong", "error");
    }
  }
});
