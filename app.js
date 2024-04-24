const express = require("express");

const app = express();

app.use((req, res, next) => {
  let body = "";
  console.log(1);
  req.on("end", () => {
    console.log(2);
    const userName = body.split("=")[1];
    if (userName) {
      console.log(4);
      req.body = { name: userName };
    }

    next();
    //res.end("<h1> User =" + userName + "</h1>");
  });
  req.on("data", (chunk) => {
    body += chunk;
  });
});

app.use((req, res, next) => {
  if (req.body) {
    console.log(5);
    return res.send("<h1> User =" + req.body.name + "</h1>");
  }
  console.log(3);
  res.send(
    '<form method="POST"><input type="text" name="username"> </input> <button type="submit"> Create user </button> </form>'
  );
});
app.listen(5001);
