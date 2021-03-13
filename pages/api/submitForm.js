import {addVotes} from "../../controller/data-upload.js"

export default async function handler(req, res) {

  console.log(req.body);

  if (req.method === 'POST') {
    let result = await addVotes(req.body)

    console.log({result});

    const urlDiscussionID = String("/Turing_Judges/Forms/"+encodeURIComponent(req.body.discussion_id))
    
    let flag = false

    if(result === "Votes Disabled"){
      res.redirect(urlDiscussionID +"?e="+encodeURIComponent("Votes are disabled"))
    } else {

      if(result.result.n === 1){
        flag = true;
      }
      
      if(flag){
        res.redirect(urlDiscussionID+"?e="+encodeURIComponent("Error no answer submitted contact host"))
      } else {
        res.redirect(urlDiscussionID+"?m="+encodeURIComponent("Thank you!"))
      }
    }
   } else {
      res.redirect(urlDiscussionID+"?e="+encodeURIComponent("Error no answer submitted contact host"))
    }
}