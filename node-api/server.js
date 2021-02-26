const express = require("express");
const { c, cpp, node, python, java } = require("compile-run");
const { createFile } = require("./helper");
const bodyParser = require("body-parser");
const app = express();
const multer = require("multer");
const port = 8000;
var cors = require("cors");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors()); // Use this after the variable declaration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./codes/cpp");
  },
  filename: function (req, file, cb) {
    cb(null, "hello");
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1000000,
  },
  // fileFilter(req, file, cb) {
  //   if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
  //     return cb(new Error("Please provide an image!"));
  //   }
  //   cb(undefined, true);
  // },
});

app.post("/", (req, res) => {
  upload.single(req.query.name);
  // upload.single("avatar"),
  // res.setHeader("Access-Control-Allow-Origin", "http://localhost:3001");
  console.log(req.url);
  console.log("url");
  console.log(req.body.body);
  var language = req.query.lang;
  console.log(language);
  var code = req.body.body;
  var file = req.query.file;
  console.log(file);
  if (language === "cpp") {
    const { path, fileName } = createFile("cpp", code);
  } else if (language === "python") {
    const { path, fileName } = createFile("py", code);
  }

  // console.log(path);
  // console.log(fileName);

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

  //res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
});
app.listen(3004, () => {
  console.log("Server running on port 3004");
});
