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
    let result = await addVotes(submitResult)

    const urlDiscussionID = String("/Turing_Judges/Game")

    if(result === "Votes Disabled"){
      res.redirect(urlDiscussionID +"?status="+encodeURIComponent("401"))
    } else {
      res.redirect(urlDiscussionID+"?status="+encodeURIComponent("201"))
    }
   } else {
    res.redirect(urlDiscussionID+"?status="+encodeURIComponent("405"))
  }
}
