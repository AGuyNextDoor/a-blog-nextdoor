import {addVotes} from "../../controller/data-upload.js"

export default async function handler(req, res) {

  if (req.method === 'POST') {
    let result = await addVotes(req.body)

    const urlDiscussionID = String("/Turing_Judges/Game/"+encodeURIComponent(req.body.discussion_id))

    if(result === "Votes Disabled"){
      res.redirect(urlDiscussionID +"?e="+encodeURIComponent("Votes are disabled"))
    } else {
      res.redirect(urlDiscussionID+"?m="+encodeURIComponent("Thank you!"))
    }
   } else {
      res.redirect(urlDiscussionID+"?e="+encodeURIComponent("Request Not a POST"))
    }
}