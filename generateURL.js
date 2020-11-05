const util = require("util");
const fs = require("fs");

const readFile = util.promisify(fs.readFile);
const readdir = util.promisify(fs.readdir);

console.log(__dirname)


const categoriesFinder = async (topic) => {
  return await readdir(__dirname + "\/public\/api\/" + topic);
};

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
  } else {
    obj = {
      [topic]: categories
    }
  }
    
    fs.writeFile(__dirname + "\/public/" + topicOut + ".json", JSON.stringify(obj), (err) => {
      if (err) {
        return console.log(err);
      }
    console.log("File created");
  });
};

constructObject("drawings", "drawingsURL");
constructObject("drawings", "drawingsURLThumb");
constructObject("articles", "articlesURL");
constructObject("reflections", "reflectionsURL");


// console.log({categories})
