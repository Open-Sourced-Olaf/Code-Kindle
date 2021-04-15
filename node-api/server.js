const express = require("express");
const { c, cpp, node, python, java } = require("compile-run");
const { createFile } = require("./helper");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");
const multer = require("multer");
const port = 8000;
var cors = require("cors");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors()); // Use this after the variable declaration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./codes");
  },
  filename: function (req, file, cb) {
    console.log("file storage", file);

    cb(null, "hello" + path.extname(file.originalname));
  },
});
const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 },
});

app.post("/upload", upload.single("myImage"), (req, res) => {
  console.log("file in server", req.file);
  return "ok";
});

app.post("/createFile", (req, res) => {
  //upload.single(req.query.name);
  // upload.single("avatar"),
  // res.setHeader("Access-Control-Allow-Origin", "http://localhost:3001");
  console.log(req.url);
  console.log("url");
  console.log(req.body.body);
  var language = req.query.lang;
  console.log(language);

  var code = req.body.body;

  if (code !== undefined) {
    if (language === "cpp") {
      const { path, fileName } = createFile("cpp", code);
    } else if (language === "python") {
      const { path, fileName } = createFile("py", code);
    }
  }
});
app.post("/convert", (req, res) => {
  var language = req.query.lang;
  console.log(language);

  const sourcecode = `print("Hell0 W0rld!")`;
  var CPPcode = `
#include<iostream>
using namespace std;
int main() {
cout << "Hello";
}
`;
  if (language === "python") {
    let resultPromise = python.runFile("generatePseudo.py");
    resultPromise
      .then((result) => {
        res.send(result);
        console.log(result);
      })
      .catch((err) => {
        res.send(result);
        console.log(err);
      });
  } else if (language === "cpp") {
    let resultPromise = cpp.runFile("main.cpp");
    resultPromise
      .then((result) => {
        res.send(result);
        console.log(result);
      })
      .catch((err) => {
        res.send(result);
        console.log(err);
      });
  } else {
    let resultPromise = python.runFile("generatePseudo.py");
    resultPromise
      .then((result) => {
        res.send(result);
        console.log(result);
      })
      .catch((err) => {
        res.send(result);
        console.log(err);
      });
  }
});

app.listen(3004, () => {
  console.log("Server running on port 3004");
});
