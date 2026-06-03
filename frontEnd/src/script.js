const userNameInput = document.querySelector("#username-input");
const form = document.querySelector("form");
const passwordInput = document.querySelector("#password-input");
form.addEventListener("submit", handleForm);

function handleForm(event) {
  event.preventDefault();

  const username = userNameInput.value.trim();

  if (userNameInput.value.length > 4 && passwordInput.value.length > 8) {
    fetch(`http://localhost:3300/api/users?username=${username}`)
      .then((res) => res.json())
      .then((user) => {
        if (user) {
          localStorage.setItem("user", JSON.stringify(user));

          window.location.href = "./pages/panel.html";
        } else {
          alert("کاربر پیدا نشد");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    alert("input values are invalid");
  }
}
