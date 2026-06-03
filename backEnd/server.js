const http = require("http");
const url = require("url");
let database = {
  users: [
    { id: 1, username: "abolfazl", password: "abolfazl111" },
    { id: 2, username: "mohadse", password: "abolfazl2222" },
    { id: 3, username: "panah", password: "abolfazl333333" },
    { id: 4, username: "omid", password: "abolfazl44444444" },
  ],
};
const server = http.createServer((req, res) => {
  const urlParams = url.parse(req.url, true);
  if (urlParams.pathname === "/api/users") {
    const mainUser = database.users.filter((user) => {
      user.id === Number(urlParams.query.id);
    });
    if (mainUser.length) {
      res.write(JSON.stringify(mainUser[0]));
      res.end();
    } else {
      res.write(JSON.stringify(null));
    }
  }
});
server.listen(3000);
