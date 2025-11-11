// Firebase authentication from the Firebase console and some of the code is taken from the Firebase documentation.
const firebaseConfig = {
  apiKey: "AIzaSyBhLdP5xOK-Un2Jzq7cASfWdh7EVM-CWF4",
  authDomain: "contactform-connectlocal.firebaseapp.com",
  databaseURL: "https://contactform-connectlocal-default-rtdb.firebaseio.com",
  projectId: "contactform-connectlocal",
  storageBucket: "contactform-connectlocal.appspot.com",
  messagingSenderId: "992382628098",
  appId: "1:992382628098:web:9c75a41cbb5b229467d21b",
};
firebase.initializeApp(firebaseConfig);
var contactFormDB = firebase.database().ref("contactForm");
document.getElementById("contactForm").addEventListener("submit", submitForm);
function submitForm(e) {
  e.preventDefault();
  var firstname = getElementVal("firstname");
  var lastname = getElementVal("lastname");
  var emailInfo = getElementVal("emailInfo");
  var PhoneNumber = getElementVal("PhoneNumber");
  var Comments = getElementVal("Comments");
  saveMessages(firstname, lastname, emailInfo, PhoneNumber, Comments);
  showToast("successToast");
  document.getElementById("contactForm").reset();
  setTimeout(() => {
    window.location.href = "index.html";
  }, 5000);
}
const saveMessages = (
  firstname,
  lastname,
  emailInfo,
  PhoneNumber,
  Comments
) => {
  var newContactForm = contactFormDB.push();
  newContactForm.set({
    FirstName: firstname,
    LastName: lastname,
    EmailId: emailInfo,
    PhoneNumber: PhoneNumber,
    Comments: Comments,
  });
};
const getElementVal = (id) => {
  return document.getElementById(id).value;
};
const showToast = (id) => {
  const toast = document.getElementById(id);
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
};
