const fs = require("fs");

const userName = "math";

fs.writeFile("user-data.txt", "Name " + userName, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("WROTE FILE");
});

fs.writeFile("user-data.txt", "Name " + userName, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("WROTE FILE");
});
