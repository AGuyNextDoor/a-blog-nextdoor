const util = require("util");
const fs = require("fs");
const showdown = require("showdown")

const readFile = util.promisify(fs.readFile);
const readdir = util.promisify(fs.readdir);
const stat = util.promisify(fs.lstat);

const converter = new showdown.Converter()

const researchPath = "/Users/martinvielvoye/Library/Mobile\ Documents/iCloud~md~obsidian/Documents/Zettelkasten/Research"

const statFinder = async (pathToVerify) => {
  return await stat(pathToVerify);
}

const checkIfFile = async (folderStat) => {
  return folderStat.isFile()
}

const seekResult = async (pathFolder) => {
  return await readdir(pathFolder);
};

// const exploreFolder = async (pathFolder, category, flag = true) => {
//   if (flag) {
//     return Promise.all(categories.map(async (result) => await findFullImages(result)))
//   }
// }

const listPathCat = []
const listObjectDef = []
async function explore(explorePath, category) {

  return await seekResult(explorePath).then(async folderList => {
    folderList = folderList.filter(nameF => nameF !==".DS_Store")

    if (folderList.includes("Definitions") || folderList.includes("Definition")){
      let lastIndex = folderList.lastIndexOf('Definitions')
      if(lastIndex === -1){
        lastIndex = folderList.lastIndexOf('Definition')
      }

      listPathCat.push({
        category: category,
        path: explorePath + "/" + folderList[lastIndex]
      })
    }

    for (index in folderList) {
      const folderPathToCheck = explorePath + "/" + folderList[index]
      const statValue = await statFinder(folderPathToCheck)
      if (await checkIfFile(statValue)) {

      } else {
        await explore(explorePath + "/" + folderList[index], folderList[index])
      }
    }
  })
}



explore(researchPath, null).then(async () => {
  // console.log({listPathCat})
  for (ind in listPathCat){
    let topicObject = {...listPathCat[ind]}
    // console.log({topicObject})

    let folderFiles = await readdir(topicObject.path);

    folderFiles = folderFiles.filter(async (f) => {
      return await checkIfFile(await statFinder(topicObject.path + "/" + f))
    })

    folderFiles = await Promise.all(folderFiles.map(async (f) => {
      let text = await readFile(topicObject.path + "/" + f, 'utf-8')
      text = text.split("Back:")[1];
      text = text.split("<!--ID")[0];
      text = converter.makeHtml(text)
      listObjectDef.push({
        Category: topicObject.category,
        Definition: text,
        Words: f.replace('.md','')
      })
    }))

  }
}).then(async () => {
  const finalArray = listObjectDef.filter(obj => obj.Definition !== '')
  const res = "const def = \n" + JSON.stringify(finalArray) + "\n\nexport default def;"
  await fs.writeFile("./components/definitionsJS.js", res, (err) => {
    if(err){
      console.log({err})
    }
  })
})
