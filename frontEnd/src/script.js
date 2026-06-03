// selectors
const userNameInput = document.querySelector("#username-input");
const form = document.querySelector("form");

// event listener
form.addEventListener("submit", handleForm);

// functions
function handleForm(event) {
  event.preventDefault();

  const username = userNameInput.value.trim();

  if (!username) {
    console.log("Username is required");
    return;
  }

  const apiUrl = `http://localhost:3300/api/users?username=${username}`;

  fetch(apiUrl)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Server Error: ${res.status}`);
      }

      return res.json();
    })
    .then((data) => {
      if (data) {
        console.log("User Found:", data);
      } else {
        console.log("User Not Found");
      }
    })
    .catch((err) => {
      console.error("Fetch Error:", err.message);
    });
}
