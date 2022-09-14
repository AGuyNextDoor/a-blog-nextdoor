const util = require("util");
const fs = require("fs");
const showdown = require("showdown")

const readFile = util.promisify(fs.readFile);
const readdir = util.promisify(fs.readdir);
const stat = util.promisify(fs.lstat);
const copyFile = util.promisify(fs.copyFile);

const converter = new showdown.Converter()

const researchPath = "/Users/martinvielvoye/Library/Mobile\ Documents/iCloud~md~obsidian/Documents/Zettelkasten/Thoughts"

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
const listObjectDef = {}
async function explore(explorePath, category) {

  return await seekResult(explorePath).then(async folderList => {
    folderList = folderList.filter(nameF => nameF !==".DS_Store")

    // if (folderList.includes("Definitions") || folderList.includes("Definition")){
    //   let lastIndex = folderList.lastIndexOf('Definitions')
    //   if(lastIndex === -1){
    //     lastIndex = folderList.lastIndexOf('Definition')
    //   }

    // }
    
    for (index in folderList) {
      const folderPathToCheck = explorePath + "/" + folderList[index]
      const statValue = await statFinder(folderPathToCheck)

      console.log({
        listObjectDef
      })

      if (await checkIfFile(statValue)) {
        if (folderPathToCheck.slice(folderPathToCheck.length - 3, folderPathToCheck.length) === '.md'){
          listPathCat.push({
            title: folderList[index].slice(0, folderList[index].length -3),
            category: category,
            path: folderPathToCheck,
            creationDate: statValue.mtime
          })
          listObjectDef[category].push(folderList[index].slice(0, folderList[index].length - 3))
        }
      } else {
        listObjectDef[folderList[index]] = []
        await explore(explorePath + "/" + folderList[index], folderList[index])
      }
    }
  })
}

explore(researchPath, null)
  .then(async () => {

    for (ind in listPathCat) {

      const pastePath = __dirname + "/public/api/reflections/" + listPathCat[ind].title + ".md"

      await copyFile(listPathCat[ind].path, pastePath)
      
    }

})
  .then(async () => {
    await fs.writeFile("./public/reflectionsURL.json", JSON.stringify(listObjectDef), (err) => {
      if (err) {
        console.log({
          err
        })
      } else {
        console.log("copied")
      }
    })
  })
