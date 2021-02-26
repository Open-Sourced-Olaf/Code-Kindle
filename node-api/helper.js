const { existsSync, mkdirSync, writeFileSync } = require("fs");
const { resolve } = require("path");

function createFile(ext, content) {
  if (!existsSync("./codes")) {
    mkdirSync("./codes");
  } else {
    if (!existsSync(`./codes/${ext}`)) {
      mkdirSync(`./codes/${ext}`);
    }
  }
  const fileName = "hello";
  const filePath = `./codes/${ext}/`;
  writeFileSync(filePath + "/" + fileName + "." + ext, content);
  return { path: resolve(`./codes/${ext}`), fileName: fileName };
}
module.exports = { createFile };
