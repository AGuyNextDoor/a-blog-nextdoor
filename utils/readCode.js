const fs = require("fs");

function readCode(path) {
  return new Promise(function (resolve, reject) {
    fs.readFile(path, "utf8", function (err, text) {
      if (err) {
        reject(err);
        return;
      }
      const code = text
        .replace(/\/\*([^]*?)\*\//gm, "") // multiline comments
        .replace(/\/\/[^]*?\n/g, "") // single line comments
        .trim();

      if (code.length) {
        resolve(code);
      } else {
        reject("File does not contain any code");
      }
    });
  });
}

module.exports = readCode;
