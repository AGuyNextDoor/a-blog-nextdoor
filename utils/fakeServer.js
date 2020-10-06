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

const readPath = path.join(__dirname, "../articles");
// const writePath = path.join(__dirname, "../src/utils/all_articles.js");

async function find_list() {
  return await mainReadFile(readPath);
}

module.exports = find_list;
