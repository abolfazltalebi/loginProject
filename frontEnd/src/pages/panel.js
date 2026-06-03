const user = JSON.parse(localStorage.getItem("user"));

if (!user) {
  window.location.href = "../index.html";
}

document.querySelector(
  "#welcome"
).textContent = `Hi ${user.username}`;
const logoutBtn = document.querySelector("#logout-btn");

logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("user");
  window.location.href = "../index.html";
});