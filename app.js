const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.post("/user", (req, res, next) => {
  console.log(1);
  res.send("<h1> User =" + req.body.username + "</h1>");
});

app.get("/", (req, res, next) => {
  console.log(2);
  res.send(
    '<form action="/user" method="POST"><input type="text" name="username"> </input> <button type="submit"> Create user </button> </form>'
  );
});
app.listen(5001);
