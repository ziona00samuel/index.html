let button = document.getElementById("button");

button.addEventListener("click", function (e) {
  e.preventDefault();
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  // let error = document.getElementById("error");
  let mail = document.getElementById("mail");
  let correctPassword = document.getElementById("correctPassword");
  let confirmPassword = document.getElementById("confirmPassword");
  let confirmPass = document.getElementById("confirmPass");
  let userEmail = localStorage.getItem("email");
  // let userPassword = localStorage.getItem("password");
  if (email.value === "") {
    mail.style.display = "block";
    email.style.border = "1px solid red";
    mail.innerText = "Email is Required!!";
    setTimeout(() => {
      email.style.border = "1px solid black";
      mail.style.display = "none";
    }, 5000);
  } else if (userEmail !== email.value) {
    mail.style.display = "block";
    mail.innerText = "User doesn't exist";
    email.style.border = "1px solid red";

    if (!email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      mail.style.display = "block";
      mail.innerText = "Email is Invalid";
      email.style.border = "1px solid red";
    }

    setTimeout(() => {
      email.style.border = "1px solid black";
      mail.style.display = "none";
    }, 5000);
  } else if (password.value === "") {
    correctPassword.style.display = "block";
    password.style.border = "1px solid red";
    correctPassword.innerText = "password is Required!!";
    setTimeout(() => {
      password.style.border = "1px solid black";
      correctPassword.style.display = "none";
    }, 5000);
  } else if (password.value !== confirmPass.value) {
    confirmPassword.style.display = "block";
    confirmPass.style.border = "1px solid red";
    confirmPassword.innerText =
      "New password and Confirm Pasword doesn't match!!";
    setTimeout(() => {
      confirmPass.style.border = "1px solid black";
      confirmPassword.style.display = "none";
    }, 5000);
  } else {
    if (password.value === confirmPass.value) {
      localStorage.setItem("password", password.value);
      setTimeout(() => {
        window.location.replace("todo.html");
      }, 3000);
    }
  }
});
