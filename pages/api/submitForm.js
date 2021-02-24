import {addVotes} from "../../controller/data-utils.js"

export default async function handler(req, res) {
  if (req.method === 'POST') {
    let result = await addVotes(req.body)
    console.log({result});
    res.json(result)
  } else {
    console.log("need to be a POST");
  }
}