import React from "react";
import { allVotes, getDiscussionsText, getDiscussionsName } from "../../../controller/data-utils"
import { ViewForm } from "../../../view/viewForm"
import { useRouter } from 'next/router'
import { ModalMessage } from "../../../components/ModalMessage"

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array
}

const Form = ({results, finalDiscuss, name, error, discussion_id}) => {
  const router = useRouter()

  let type = null
  let message = null
  if(router.query.m){
    type = "info"
    message = router.query.m
  } 
  else if (router.query.e){
    type = "error"
    message = router.query.e
  }

  if(error){
    if(discussion_id){
      type = "error"
      message = "Wrong discussion id"
    } else {
      message = null
    }
  } 

  return(
    <div className="margin_sidebar">
      {
        message?
        <ModalMessage mess={message} type={type}/>:
        <></>
      }
      <div className="pb-2">
      {
        error?
        <></>:
        <ViewForm discussion_id={results} finalDiscuss={finalDiscuss} name={name}/>
        
      }
      </div>
    </div>
  )
}

export async function getServerSideProps(context){

  const dis_id = context.params.discussion_id
    
  let votes = await allVotes()
  
  let discuss = await getDiscussionsText(dis_id)
  let discussion_name = await getDiscussionsName(dis_id)
  
  if(discuss[0] !== "error"){
    
    let firstEl = discuss.shift()
    let lastEl = discuss.pop()
    
    discuss = shuffleArray(discuss)
    
    let finalDiscuss = [firstEl, ...discuss, lastEl]
    
    console.log({finalDiscuss});
    
    
    
    return {
      props: {
        // results: JSON.parse(JSON.stringify(discussions))
        results: JSON.parse(JSON.stringify(votes[0].discussion_id)),
        finalDiscuss: finalDiscuss,
        name: discussion_name,
        discussion_id: dis_id,
        error: false
      }
    }
  } else {
    return {
      props: {
        discussion_id: dis_id,
        error: true
      }
    }
  }
}

export default Form;