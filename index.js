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

const functionWithPromise = (item) => {
  return find_list(item);
};

const asyncFunction = async (item) => {
  return functionWithPromise(item);
};

// Serve the static files from the React app
app.use(cors());
app.use(express.static(path.join(__dirname, "client/build")));
app.use("/drawings", express.static(path.join(__dirname, "public/drawings")));
app.use(express.static(path.join(__dirname, "client/pop/_build")));
// app.use(express.static(path.join(__dirname, "_build/html/_images")));
// app.use(express.static(path.join(__dirname, "_build/html/_sources")));
// app.use(express.static(path.join(__dirname, "_build/html/_static")));
// app.use(express.static(path.join(__dirname, "pop/_build")));
// app.use(express.static("images"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/api/getTags", (req, res) => {
  readFile("utils/tags.json").then((file) => {
    res.send(file);
  });
});

app.post("/api/getTags", (req, res) => {
  const tags = readFile("utils/tags.json");

  tags[req.body.tag].push(req.body.article);

  console.log(tags);

  fs.writeFile("utils/tags.json", tags);
});

app.get("/api/getArticles", (req, res) => {
  find_list("articles").then((articles) => {
    res.json(articles);
  });
});

app.get("/api/getArticle/:articleId", (req, res) => {
  const newPath = __dirname + "/public/articles/" + req.params.articleId;
  readFile(newPath, "utf8", function (err, data) {
    if (err) {
      console.log(err);
      res.json(["error", "404 - Article not found"]);
    } else {
      const patt1 = /\.([0-9a-z]+)(?:[\?#]|$)/i;
      let fileArray = req.params.articleId.match(patt1);

      if (fileArray[0].includes("html")) {
        res.json(["html", data]);
      } else {
        const html = converter.makeHtml(data);
        res.json(["html", html]);
      }
    }
  });
});

app.get("/api/getReflectionList", (req, res) => {
  find_list("reflections").then((list) => {
    res.json(list);
  });
});

app.get("/api/getReflection/:reflectionId", (req, res) => {
  const newPath = __dirname + "/public/reflections/" + req.params.reflectionId;
  readFile(newPath, "utf8", function (err, data) {
    if (err) {
      console.log(err);
      res.json(["error", "404 - Reflection not found"]);
    } else {
      const html = converter.makeHtml(data);
      res.json(["markdown", html]);
    }
  });
});

app.get("/api/getImagesDir", (req, res) => {
  find_list("drawings/").then((files) => {
    res.json(files);
  });
});

app.get("/api/getImages", async (req, res) => {
  const result = await find_list("drawings/").then((list) => {
    return list;
  });

  const getResult = async () => {
    return Promise.all(result.map((item) => asyncFunction("drawings/" + item + "/full_images")));
  };

  getResult().then((imgGroup) => {
    let newResult = [];
    imgGroup.forEach((item, index) => {
      newResult.push([result[index], [...item]]);
    });
    res.json(newResult);
  });
});

app.get("/api/getThumbnails", async (req, res) => {
  const result = await find_list("drawings/").then((list) => {
    return list;
  });

  const getResult = async () => {
    return Promise.all(result.map((item) => asyncFunction("drawings/" + item + "/thumbnails")));
  };

  getResult().then((imgGroup) => {
    let newResult = [];
    imgGroup.forEach((item, index) => {
      newResult.push([result[index], [...item]]);
    });
    res.json(newResult);
  });
});

// Handles any requests that don't match the ones above
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

const port = process.env.PORT || 3000;
app.listen(port);

console.log("App is listening on port " + port);
