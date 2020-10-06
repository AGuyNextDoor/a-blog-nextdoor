const path = require("path");
const fs = require("fs");
const util = require("util");

const readFile = util.promisify(fs.readFile);

async function mainReadFile(path, encoding, callback) {
  console.log("ploop");
  return await readFile(path, encoding, callback);
}

async function findArticle(name) {
  const path = __dirname + "/../articles/" + name;
  return await mainReadFile(path, "utf8", async function (err, data) {
    if (err) {
      console.log(err);
    }
    console.log("searched for : ", name);
    return await "poop";
  }).then((result) => {
    console.log({ result });
    return result;
  });
  // console.log({ result });
}

module.exports = findArticle;
