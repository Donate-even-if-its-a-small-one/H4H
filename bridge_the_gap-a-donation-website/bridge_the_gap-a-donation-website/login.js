const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
var submitButton = document.getElementById("#login-submit-btn");


sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

var username = document.getElementById("#username");
var password = document.getElementById("#password");



const login = () => {
  fetch('http://localhost:3001/login', {
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      username: username.value,
      password: password.value
    })
  })
  .then(response => response.json())
  .then(user => {
    console.log(user);
    alert("You have successfully logged in");
  })
}

submitButton.addEventListener("click", () => {
  login();
  console.login("CLick");
})

