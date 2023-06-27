const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", function (req, res) {
  let firstName = req.body.firstName;
  let lastName = req.body.lastName;
  const email = req.body.email;

  console.log(firstName + lastName + " " + email);
  res.send("received");
});

app.listen(3000, function () {
  console.log("Server is running on port 3000");
});
