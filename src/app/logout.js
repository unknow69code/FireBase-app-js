import { signOut } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js";
import { message } from './showmessage.js';
import { auth } from './firebase.js';

const logout = document.querySelector("#Logout")
logout.addEventListener('click',async () => {
  await signOut(auth);
  await message("Sesion closed")
})