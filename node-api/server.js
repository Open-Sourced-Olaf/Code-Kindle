const express = require("express");
const { c, cpp, node, python, java } = require("compile-run");

const bodyParser = require("body-parser");
const app = express();
const port = 8000;
var cors = require("cors");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors()); // Use this after the variable declaration
app.get("/api/hello", (req, res) => {
  res.send({ express: "Hello From Express" });
});

app.post("/api/world", (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`
  );
});
app.get("/", (req, res) => {
  // res.setHeader("Access-Control-Allow-Origin", "http://localhost:3001");
  console.log(req.url);
  console.log("url");
  console.log(req.query.code);
  var code = req.query.code;

  /* let resultPromise = cpp.runFile("main.cpp");
  resultPromise
    .then((result) => {
      console.log(result); //result object
    })
    .catch((err) => {
      console.log(err);
    }); */
  const sourcecode = `print("Hell0 W0rld!")`;
  let resultPromise = python.runFile("");
  resultPromise
    .then((result) => {
      res.send(result);
      console.log(result);
    })
    .catch((err) => {
      res.send(result);
      console.log(err);
    });

  //res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
});
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
