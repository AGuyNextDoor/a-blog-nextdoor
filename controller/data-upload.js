import mongo from "mongodb";
import {initDatabase, discussionVoteStatus} from "./data-utils"

export async function addVotes(data){

  let client = await initDatabase()
  let db = await client.db()

  let vote_status = discussionVoteStatus(data.discussion_id)

  let isoDateString = new Date();

  const upData = {
    "discussion_id": data.discussion_id,
    "date": isoDateString,
    "section_1": parseInt(data["1"]),
    "section_2": parseInt(data["2"]),
    "section_3": parseInt(data["3"]),
    "section_4": parseInt(data["4"]),
    "section_5": parseInt(data["5"]),
    "section_6": parseInt(data["6"]),
  }

  let results = "Votes Disabled"

  if(vote_status){
    results = await db.collection("single_votes").insertOne(upData)
  }
  

  return results
};