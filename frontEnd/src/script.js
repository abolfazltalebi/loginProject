const userNameInput = document.querySelector("#username-input");

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event);
  let apiUrl = `http://localhost:3300/api/users?username=${userNameInput.value}`;
  fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => console.log(data));
});
