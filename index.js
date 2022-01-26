const path = require("path");
const express = require("express");

const app = express();

app.use(express.static(path.join(__dirname, "dist")));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/dist/index.html");
});

app.listen(8000);
