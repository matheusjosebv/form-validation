const inputName = document.getElementById("name");
const inputPassword = document.getElementById("password");
const form = document.getElementById("form");
const error = document.getElementById("error");

form.addEventListener("submit", (e) => {
  let messages = [];

  if (inputName.value === "" || inputName.value == null) {
    messages.push("Name is required");
  }

  if (inputPassword.value.length <= 6) {
    messages.push("Password must be longer than 6 characters");
  }

  if (inputPassword.value.length >= 20) {
    messages.push("Password must be less than 20 characters");
  }

  if (messages.length > 0) {
    error.innerText = messages.join(", ");
    e.preventDefault();
  }
});
