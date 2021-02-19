// mongodb+srv://alanTuring:<password>@clusterturing.qxwd3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
import mongo from "mongodb";

const databaseUrl = process.env.MONGODB_URI || "";
console.log("database url:", {databaseUrl});
const options = { useNewUrlParser: true, useUnifiedTopology: true };


export function initDatabase(){

  return new Promise((resolve, reject) => {
    mongo.MongoClient.connect(databaseUrl, options, (error, client) => {
      if (error) {
        reject(error);
      } else {
        resolve(client);
      }
    });
  });
}
