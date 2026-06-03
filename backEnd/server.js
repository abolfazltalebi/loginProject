const http = require("http");
const url = require("url");

let database = {
  users: [
    { id: 1, username: "abolfazl", password: "abolfazl1231" },
    { id: 2, username: "mohadese", password: "mh1020" },
    { id: 3, username: "panah", password: "ph2020@" },
    { id: 4, username: "omid", password: "om112122@#" },
  ],
};

const server = http.createServer((req, res) => {
  const urlParams = url.parse(req.url, true);
  res.setHeader("Access-Control-Allow-Origin", "*");
  if (urlParams.pathname === "/api/users") {
    if (!urlParams.query.username) {
      res.statusCode = 400;
      return res.end(JSON.stringify({ message: "username is required" }));
    }

    const mainUser = database.users.find(
      (user) =>
        user.username.toLowerCase() === urlParams.query.username.toLowerCase(),
    );

    res.setHeader("Content-Type", "application/json");

    if (mainUser) {
      res.end(JSON.stringify(mainUser));
    } else {
      res.end(JSON.stringify(null));
    }
  }
});

server.listen(3300);
