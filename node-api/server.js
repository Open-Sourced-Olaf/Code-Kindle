const express = require("express");
const { c, cpp, node, python, java } = require("compile-run");
const { createFile } = require("./helper");
const bodyParser = require("body-parser");
const app = express();
const port = 8000;
var cors = require("cors");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors()); // Use this after the variable declaration

app.post("/", (req, res) => {
  // res.setHeader("Access-Control-Allow-Origin", "http://localhost:3001");
  console.log(req.url);
  console.log("url");
  console.log(req.body.body);
  var language = req.query.lang;
  console.log(language);
  var code = req.body.body;
  var file = req.query.file;
  console.log(file);
  const { path, fileName } = createFile("py", code);
  console.log(path);
  console.log(fileName);

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
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
