const express = require("express");
const path = require("path");
const find_list = require("./utils/fakeServer.js");
const encodeImageFileAsURL = require("./utils/imgConvert.js");
const marked = require("marked");
const fs = require("fs");
const util = require("util");
const showdown = require("showdown");
const bodyParser = require("body-parser");
const multer = require("multer");
const cors = require("cors");
// const markdownTest = require("./articles/_build/html/markdown.html");

const app = express();
const readFile = util.promisify(fs.readFile);
const readdir = util.promisify(fs.readdir);
const converter = new showdown.Converter();

const upload = multer({
  dest: "./images_temp",
  // you might also want to set some limits: https://github.com/expressjs/multer#limits
});

// Serve the static files from the React app
app.use(cors());
app.use(express.static(path.join(__dirname, "client/build")));
app.use(express.static(path.join(__dirname, "client/src/images/Drawings")));
app.use(express.static(path.join(__dirname, "client/pop/_build")));
// app.use(express.static(path.join(__dirname, "_build/html/_images")));
// app.use(express.static(path.join(__dirname, "_build/html/_sources")));
// app.use(express.static(path.join(__dirname, "_build/html/_static")));
// app.use(express.static(path.join(__dirname, "pop/_build")));
// app.use(express.static("images"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/api/getArticle/:articleId", (req, res) => {
  const newPath = __dirname + "/articles/" + req.params.articleId;
  readFile(newPath, "utf8", function (err, data) {
    if (err) {
      console.log(err);
      res.json(["error", "No data found"]);
    } else {
      res.json(["html", data]);
      // console.log("article sent", html);
    }
  });
});

app.get("/api/getArticles/:articleId", (req, res) => {
  const newPath = __dirname + "/articles/" + req.params.articleId;
  readFile(newPath, "utf8", function (err, data) {
    if (err) {
      console.log(err);
      res.json(["error", "No data found"]);
    } else {
      const html = converter.makeHtml(data);
      res.json(["markdown", html]);
      // console.log("article sent", html);
    }
  });
});

app.get("/api/getList", (req, res) => {
  find_list().then((list) => {
    res.json(list);
    console.log("Sent list of items");
  });
});

app.get("/api/getBaseImages", (req, res) => {
  let images = "./images";
  res.setHeader("Content-Type", "application/json");
  readdir(newFiles, (err, files) => {
    res.send(newFiles);
  });
});

app.get("/api/getImages", (req, res) => {
  const uploadsDirectory = path.join(__dirname, "/images/");

  readdir(uploadsDirectory, (err, files) => {
    if (err) {
      return res.json({ msg: err });
    }

    if (files.length === 0) {
      return res.json({ msg: "No images Found!" });
    }

    const newFiles = [];
    files.forEach((url) => {
      console.log(path.join(__dirname, "/images/", url));
      newFiles.push(path.join(__dirname, "/images/", url));
    });

    console.log("sent image :", newFiles);
    res.json({ newFiles });
  });
});

// Handles any requests that don't match the ones above
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log("App is listening on port " + port);
