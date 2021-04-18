// mongodb+srv://alanTuring:<password>@clusterturing.qxwd3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
import mongo from "mongodb";
import {calcUserScore, calcAllScore} from "./data-calc"

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

export async function addUser(name, email, image){
  const client = await initDatabase();
  const usersCollection = await client.db().collection("users");

  try {
    let user = await usersCollection.findOne({ email });

    if (user) {
      console.log("user already exist");
    } else {
      await usersCollection.insertOne({ name, email, image });
    }
  } catch (err) {
    console.log("Server error");
    console.log(err);
  }
}



export async function discussionVoteStatus(discussion_id){
  let client = await initDatabase()
  let db = await client.db()
  
  let discussion = await db.collection("discussions").find({id: discussion_id}).toArray()

  return discussion[0].vote_status
}

export async function discussionResultStatus(discussion_id){
  let client = await initDatabase()
  let db = await client.db()
  
  let discussion = await db.collection("discussions").find({id: discussion_id}).toArray()

  return discussion[0].result_status
}

export async function discussionName(discussion_id){
  let client = await initDatabase()
  let db = await client.db()
  
  let discussion = await db.collection("discussions").find({id: discussion_id}).toArray()

  return discussion[0].name
}

export async function discussionIdentity(discussion_id){
  let client = await initDatabase()
  let db = await client.db()
  
  let discussion = await db.collection("discussions").find({id: discussion_id}).toArray()

  return discussion[0].AI
}


// export async function allVotes(){
//   let client = await initDatabase()
//   let db = await client.db()
  
//   return db.collection("votes").find().toArray()
// }

export async function votesOfDiscussion(discussion_id){
  let client = await initDatabase()
  let db = await client.db()

  return db.collection("single_votes").find({discussion_id: discussion_id}).toArray()
}





export async function getAllDiscussions(){
  let client = await initDatabase()
  let db = await client.db()

  // let result = await db.collection("discussions").aggregate({ $project : { id : 1, name : 1 } }).findOne({"id": dis_id}).toArray()
  let result = await db.collection("discussions").find().toArray()

  let total = await db.collection("single_votes").aggregate(
    [
      {
        '$group': {
          '_id': '$discussion_id', 
          'total': {
            '$sum': 1
          }
        }
      }
    ]
  ).toArray()

  function createResult(discussion){
    let coutnResult = total.filter((countObject) => countObject._id === discussion.id )

    if(coutnResult[0]){
      return {name: discussion.name, date: discussion.date.toDateString(), id: discussion.id, vote_status:discussion.vote_status, result_status:discussion.result_status, total: coutnResult[0].total}
    } else {
      return {name: discussion.name, date: discussion.date.toDateString(), id: discussion.id, vote_status:discussion.vote_status, result_status:discussion.result_status, total: 0}
    }
  }

  let resultName = result.map(createResult)

  return resultName
}

function orderIdResult(discussionList, diss_id){

  let beforeId = "error"
  let currentId = "error"
  let afterId = "error"

  for(let i = 0; i < discussionList.length; i++){
    if(discussionList[i].id === diss_id){
      beforeId = (discussionList[i-1] && discussionList[i-1].result_status)? discussionList[i-1].id: "error"
      currentId = discussionList[i].id
      afterId = (discussionList[i+1] && discussionList[i+1].result_status)? discussionList[i+1].id: "error"
    }
  }
  //finish this function 
  return [beforeId, currentId, afterId]
}

function orderIdGame(discussionList, diss_id){

  let beforeId = "error"
  let currentId = "error"
  let afterId = "error"

  for(let i = 0; i < discussionList.length; i++){
    if(discussionList[i].id === diss_id){
      beforeId = (discussionList[i-1] && discussionList[i-1].vote_status)? discussionList[i-1].id: "error"
      currentId = discussionList[i].id
      afterId = (discussionList[i+1] && discussionList[i+1].vote_status)? discussionList[i+1].id: "error"
    }
  }
  //finish this function 
  return [beforeId, currentId, afterId]
}

export async function getOrderDiscussionGame(dis_id){
  let client = await initDatabase()
  let db = await client.db()



  let result = await db.collection("discussions").aggregate([
    {
      '$sort': {
        '_id': 1, 
        'date': 1
      }
    }
  ]).toArray()

  let finalResult = orderIdGame(result, dis_id)

  return finalResult

}

export async function getOrderDiscussionResult(dis_id){
  let client = await initDatabase()
  let db = await client.db()



  let result = await db.collection("discussions").aggregate([
    {
      '$sort': {
        '_id': 1, 
        'date': 1
      }
    }
  ]).toArray()

  let finalResult = orderIdResult(result, dis_id)

  console.log({finalResult});

  return finalResult

}

export async function getDiscussionsName(dis_id){
  let client = await initDatabase()
  let db = await client.db()

  // let result = await db.collection("discussions").aggregate({ $project : { id : 1, name : 1 } }).findOne({"id": dis_id}).toArray()
  let result = await db.collection("discussions").find({"id": dis_id}).toArray()
  if(result.length){
    
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

export async function getUserResult(email){                         
  let client = await initDatabase();
  const db = await client.db();

  let allVotes = await db.collection("single_votes").find({}).toArray()
  let allUserVotes = allVotes.filter(val => val.user === email)

  let discussions_ids_all = allUserVotes.map(val => val.discussion_id)
  let identities_all = await Promise.all(discussions_ids_all.map(async (val) => {
    return await db.collection("discussions").find({id: val}).toArray()
  }))
  identities_all = identities_all.filter(val => val[0])
  identities_all = identities_all.map((val) => [val[0].AI, val[0].id, val[0].name])

  let discussions_ids_user = allUserVotes.map(val => val.discussion_id)
  let identities_user = await Promise.all(discussions_ids_user.map(async (val) => {
    return await db.collection("discussions").find({id: val}).toArray()
  }))

  identities_user = identities_user.filter(val => val[0])
  identities_user = identities_user.map((val) => [val[0].AI, val[0].id, val[0].name])

  let result_user = calcUserScore(allUserVotes, identities_user)
  let result_all = calcAllScore(allVotes, identities_all)

  return [result_user, result_all];
}

export async function checkIfAlreadyVoted(userEmail, listOfInvestigation){
  let client = await initDatabase();
  const db = await client.db();

  let allUserVotes = await db.collection("single_votes").find({user: userEmail}).toArray()
  let finalResult = listOfInvestigation.map(investigation => {
    if(allUserVotes.find(vote => vote.discussion_id === investigation.id)){
      investigation.can_vote = false;
    } else {
      investigation.can_vote = true;
    }
    return investigation
  })

  return finalResult
}


export async function checkIfAlreadyVotedSingle(userEmail, investigationID){
  let client = await initDatabase();
  const db = await client.db();

  const result = await db.collection("single_votes").find({user: userEmail, discussion_id: investigationID}).toArray()

  return result[0]

}
