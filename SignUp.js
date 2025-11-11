// Most of the code is taken from the Firebase documentation and modified to suit my needs. The code is used to authenticate users using email and password, Google, and Facebook. The code also includes a reset password feature.
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyBU8-47Xof4jzLTustckH13Y4klGpk_I-o",
  authDomain: "login-cf378.firebaseapp.com",
  projectId: "login-cf378",
  storageBucket: "login-cf378.appspot.com",
  messagingSenderId: "514341270319",
  appId: "1:514341270319:web:f7ffb8f3333d53baa4a7da",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
var toastTrigger = document.getElementById("liveToastBtn");
var toastLiveExample = document.getElementById("liveToast");
if (toastTrigger) {
  toastTrigger.addEventListener("click", function () {
    var toast = new bootstrap.Toast(toastLiveExample);
    toast.show();
  });
}
const submit = document.getElementById("submit");
submit.addEventListener("click", function (event) {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  if (!email || !password) {
    alert("Please fill in both email and password fields.");
    return;
  }
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      window.location.href = "login.html";
    })
    .catch((error) => {
      alert("Error Occured Please Try Again");
    });
});
