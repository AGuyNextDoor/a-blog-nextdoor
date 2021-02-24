import React from "react";
import { allVotes, voteOfDiscussion } from "../../controller/data-utils"
import {ViewForm} from "../../view/viewForm"

const Form = ({results}) => {
  return(
    <ViewForm discussion_id={results}/>
  )
}

export async function getServerSideProps(context){
  // let client = await initDatabase()
  // let db = await client.db()
  
  let votes = await allVotes()

  let discuss = await voteOfDiscussion(votes[0].discussion_id)

  
  return {
    props: {
      // results: JSON.parse(JSON.stringify(discussions))
      results: JSON.parse(JSON.stringify(votes[0].discussion_id))
    }
  }
}

export default Form;