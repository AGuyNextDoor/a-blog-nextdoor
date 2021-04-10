import {addVotes} from "../../controller/data-upload.js"
import { getSession } from 'next-auth/client';

export default async function handler(req, res) {

  const session= await getSession({req})

  if (req.method === 'POST') {

    let submitResult = req.body
    if(session){
      submitResult["user"] = session.user.email
    } else {
      submitResult["user"] = null
    }
    console.log(submitResult);
    let result = await addVotes(submitResult)

    const urlDiscussionID = String("/Turing_Judges/Game")

    if(result === "Votes Disabled"){
      res.redirect(urlDiscussionID +"?e="+encodeURIComponent("Votes are disabled"))
    } else {
      res.redirect(urlDiscussionID+"?m="+encodeURIComponent("Thank you!"))
    }
   } else {
      res.redirect(urlDiscussionID+"?e="+encodeURIComponent("Request Not a POST"))
    }
}
