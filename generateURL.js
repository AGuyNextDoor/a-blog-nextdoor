const util = require("util");
const fs = require("fs");

const readFile = util.promisify(fs.readFile);
const readdir = util.promisify(fs.readdir);
const stat = util.promisify(fs.stat);

// console.log(__dirname)

fs.stat(__dirname + "/public/api/articles/markdown copy.md", (err, stats) => {
  console.log(stats);
  console.log(stats.birthtime);
});

const categoriesFinder = async (topic) => {
  return await readdir(__dirname + "\/public\/api\/" + topic);
};

const dateFinder = async (topic, file) => {
  return await stat(__dirname + "/public/api/" + topic + "/" + file);
}

const findFullImages = async (category) => {
  return await readdir(__dirname + "\/public\/api\/drawings\/" + category + "\/full_images\/");
}

const findThumbnails = async (category) => {
  return await readdir(__dirname + "\/public\/api\/drawings\/" + category + "\/thumbnails\/");
};

const returnFiles = async (categories, flag = true) => {
  if(flag){
    return Promise.all(categories.map(async (result) => await findFullImages(result)))
  } else {
    return Promise.all(categories.map(async (result) => await findThumbnails(result)));
  }
}

const returnDates = async (topic, files) => {
  return Promise.all(files.map(async (file) => await dateFinder(topic, file)));
};

const constructObject = async (topic, topicOut) => {
  let obj = {};

  let categories = await categoriesFinder(topic);

  if(topic === "drawings"){

    let files = await returnFiles(categories);

    if (topicOut === "drawingsURLThumb"){
      files = await returnFiles(categories, false);
    }
    
    files.forEach((file, index) => {
      obj = {
        ...obj,
        [categories[index]]: file,
      };
    });
  } else if (topic === "articles" || topic === "reflections"){

    let dates = await returnDates(topic, categories)
    let mods = dates.map(fi => fi.mtime)
    dates = dates.map((fi) => fi.birthtime);

    obj = {
      [topic]: categories,
      dates,
      mods
    }
  } else {
    obj = {
      [topic]: categories,
    }
  }
    
    fs.writeFile(__dirname + "\/public/" + topicOut + ".json", JSON.stringify(obj), (err) => {
      if (err) {
        return console.log(err);
      }
    console.log("File created:", "/public/" + topicOut);
  });
};

constructObject("drawings", "drawingsURL");
constructObject("drawings", "drawingsURLThumb");
constructObject("articles", "articlesURL");
constructObject("reflections", "reflectionsURL");


// console.log({categories})
