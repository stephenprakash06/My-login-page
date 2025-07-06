// script.js
function handleLogin() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const message = document.getElementById("message");

  if (username === "249XA05235" && password === "Bean7878!") {
    message.textContent = "Login successful!";
    message.className = "success";
    setTimeout(() => {
  window.location.href = "home2.html"; } , 1000 );
  } else {
    alert(`username: 249XA05235
    password: Bean7878!`);
    message.textContent = "Invalid username or password";
    message.className = "error";
  }
}

