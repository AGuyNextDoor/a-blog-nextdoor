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

export async function allVotes(){
  let client = await initDatabase()
  let db = await client.db()

  console.log({db});

  let result = await db.collection("votes").find().toArray()

  console.log(result);

  return db.collection("votes").find().toArray()
}

export async function voteOfDiscussion(discussion_id){
  let client = await initDatabase()
  let db = await client.db()

  return db.collection("votes").find({discussion_id: discussion_id}).toArray()
}