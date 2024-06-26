const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.method, req.url);

  if (req.method === "POST") {
    console.log("post data");
    let body = "";
    req.on("end", () => {
      const userName = body.split("=")[1];
      res.end("<h1>" + userName + "</h1>");
    });
    req.on("data", (chunk) => {
      body += chunk;
    });
  } else {
    res.setHeader("Content-Type", "text/html");
    res.end(
      '<form method="POST"><input type="text" name="username"> </input> <button type="submit"> Create user </button> </form>'
    );
    console.log("take data from browser");
  }
});

server.listen(5001);
