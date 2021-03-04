import {addVotes} from "../../controller/data-utils.js"

export default async function handler(req, res) {
  console.log({req});
  console.log(req.params);
  if (req.method === 'POST') {
    let result = await addVotes(req.body)

    const urlDiscussionID = String("/Turing_Judges/Forms/"+encodeURIComponent(req.body.discussion_id))
    console.log({urlDiscussionID});
    console.log({result});

    let flag = 0

    if(result === "Votes Disabled"){
      res.redirect(urlDiscussionID +"?e="+encodeURIComponent("Votes are disabled"))
    } else {

      for(const val in result){
        if(result[val].result.nModified === 0){
          flag += 1
        }
      }
      
      if(flag === 6){
        res.redirect(urlDiscussionID+"?e="+encodeURIComponent("Error no answer submitted contact host"))
      } else {
        res.redirect(urlDiscussionID+"?m="+encodeURIComponent("Thank you!"))
      }
    }
   } else {
      res.redirect(urlDiscussionID+"?e="+encodeURIComponent("Error no answer submitted contact host"))
    }
}