// mongodb+srv://alanTuring:<password>@clusterturing.qxwd3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
import mongo from "mongodb";

let databaseUrl = ""

if(process.env.ENV === "local"){
  databaseUrl = process.env.MONGODB_URI_LOCAL;
} else {
  databaseUrl = process.env.MONGODB_URI_DEV;
}

const options = { useNewUrlParser: true, useUnifiedTopology: true };


export function initDatabase(){
  return new Promise((resolve, reject) => {
    mongo.MongoClient.connect(databaseUrl, options, (error, client) => {
      if (error) {
        console.log("ERROR OUPS");
        reject(error);
      } else {
        resolve(client);
      }
    });
  });
}

export async function discussionStatus(discussion_id){
  let client = await initDatabase()
  let db = await client.db()
  
  let discussion = await db.collection("discussions").find({id: discussion_id}).toArray()

  return discussion[0].vote_status
}

export async function discussionName(discussion_id){
  let client = await initDatabase()
  let db = await client.db()
  
  let discussion = await db.collection("discussions").find({id: discussion_id}).toArray()

  return discussion[0].name
}


export async function allVotes(){
  let client = await initDatabase()
  let db = await client.db()
  
  return db.collection("votes").find().toArray()
}

export async function votesOfDiscussion(discussion_id){
  let client = await initDatabase()
  let db = await client.db()

  return db.collection("votes").find({discussion_id: discussion_id}).toArray()
}

export async function addVotes(data){
  let flag = true;
  let client = await initDatabase()
  let db = await client.db()

  let keysList = ['1','2', '3', '4', '5', '6']

  let updateList = []

  for(let i = 1; i < keysList.length; i++){
    let objKey = {}
    objKey[data[keysList[i]]] = 1
    updateList.push(objKey)
  }

  console.log({updateList});

  let results = "Votes Disabled"
  let idd = data.discussion_id

  
  if(flag){
    results = []

    
    for(let i = 0; i < updateList.length; i++){
      let j = String(i+1)
      
     
      
      results.push(await db.collection("votes").update(
        {discussion_id: idd, section:j},
        { $inc: updateList[i]}
        ))
      }
    }

  return results
};

export async function getAllDiscussions(){
  let client = await initDatabase()
  let db = await client.db()

  // let result = await db.collection("discussions").aggregate({ $project : { id : 1, name : 1 } }).findOne({"id": dis_id}).toArray()
  let result = await db.collection("discussions").find().toArray()

  let resultName = result.map(discussion => {return {name: discussion.name, id: discussion.id, status:discussion.vote_status}})

  return resultName

}

export async function getDiscussionsName(dis_id){
  let client = await initDatabase()
  let db = await client.db()

  // let result = await db.collection("discussions").aggregate({ $project : { id : 1, name : 1 } }).findOne({"id": dis_id}).toArray()
  let result = await db.collection("discussions").find({"id": dis_id}).toArray()
  if(result.length){

    console.log({result});
    
    let name = result[0].name
    
    
    return name
  } else {

    return ["error"]
  }

}

export async function getDiscussionsText(dis_id){
  let client = await initDatabase()
  let db = await client.db()

  let result = await db.collection("discussions").find({"id": dis_id}).toArray()

  console.log({result});
  
  if(result.length){
 
    let catList = ["intro", "objElemPhy", "agentGoalDir", "natuNum", "elemGeomTopo", "abilLearnSTM"]
    let allDiscussion = []
    for(let category in catList){
      let ind = category + 1
      
      let finalDiscussion = result[0][catList[category]].map( obj => {
        let returnVal;
        if(Object.keys(obj)[0] === "Judge"){
          returnVal = {message: obj.Judge, direction:"right"}
        } else {
          returnVal = {message: obj.Candidate, direction:"left"}
        }
        
        return returnVal
      })
      
      
      allDiscussion.push({section: ind[0], discussion: finalDiscussion})
      
    }
    
    
    return allDiscussion
  } else {
    return ["error"]
  }

}