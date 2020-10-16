// import { find } from "methods";

const path = require("path");
const fs = require("fs");
const util = require("util");

const readdir = util.promisify(fs.readdir);
const writeFile = util.promisify(fs.writeFile);

async function mainReadFile(path) {
  return await readdir(path);
}

async function mainWriteFile(path) {
  return await writeFile(path);
}

const readPath = (pathFolder) => {
  return path.join(__dirname, "../public/" + pathFolder);
};
// const writePath = path.join(__dirname, "../src/utils/all_articles.js");

async function find_list(pathFolder) {
  let realPath = readPath(pathFolder);
  return await mainReadFile(realPath);
}

module.exports = find_list;
