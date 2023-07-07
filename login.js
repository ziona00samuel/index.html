let button = document.getElementById("button");

button.addEventListener("click", function (e) {
  e.preventDefault();
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  let error = document.getElementById("error");
  let mail = document.getElementById("mail");
  let correctPassword = document.getElementById("correctPassword");

  let userEmail = localStorage.getItem("email");
  let userPassword = localStorage.getItem("password");

  if (userEmail !== email.value && userPassword !== password.value) {
    error.style.display = "block";
    password.style.border = "1px solid red";
    email.style.border = "1px solid red";
    setTimeout(() => {
      email.style.border = "1px solid black";
      password.style.border = "1px solid black";
      error.style.display = "none";
    }, 5000);
  } else if (email.value === "") {
    mail.style.display = "block";
    email.style.border = "1px solid red";
    mail.innerText = "Email is Required!!";
  } else if (userEmail !== email.value) {
    mail.style.display = "block";
    mail.innerText = "Email is Incorrect";
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
  } else if (userPassword !== password.value) {
    correctPassword.style.display = "block";
    password.style.border = "1px solid red";
    setTimeout(() => {
      password.style.border = "1px solid black";
      correctPassword.style.display = "none";
    }, 5000);
  } else {
    setTimeout(() => {
      window.location.replace("todo.html");
    }, 3000);
  }
});
