import React, { useState, useEffect } from "react";
import { getDiscussionsText, getDiscussionsName, getOrderDiscussionGame } from "../../../controller/data-utils"
import { ViewForm } from "../../../view/viewForm"
import Router, { useRouter } from 'next/router'
import { ModalMessage } from "../../../components/ModalMessage"
import { navigationButton } from "../../../components/navigationButton"
import Link from "next/link"

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array
}

const Form = ({finalDiscuss, name, error, discussion_id, order}) => {
  const router = useRouter()

  let type = null
  let message = null

  console.log({order});

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
    <>
        <div className="margin_sidebar">
          <div className="container">
          <h1 className="h1_turing_game mt-5">THE TURING GAME</h1>

            <div className="row my-3">
              {navigationButton(order[0], "before")}
                <div className="btn col-8 test-align text-center button-form-font uncursor border" disabled> 
                  {name}
                </div>
              {navigationButton(order[2], "after")}
            </div>
          </div>
        {
          message?
          <ModalMessage mess={message} type={type}/>:
          <></>
        }
        <div className="pb-2">
        {
          error?
          <></>:
          <ViewForm discussion_id={discussion_id} finalDiscuss={finalDiscuss} name={name}/>
          
        }
        </div>
      </div>
    </>
    
  )
}

export async function getServerSideProps(context){

  const dis_id = context.params.discussion_id
  
  let discuss = await getDiscussionsText(dis_id)
  let discussion_name = await getDiscussionsName(dis_id)
  let order = await getOrderDiscussionGame(dis_id)
  
  
  if(discuss[0] !== "error"){
    
    let firstEl = discuss.shift()
    let lastEl = discuss.pop()
    
    discuss = shuffleArray(discuss)
    
    let finalDiscuss = [firstEl, ...discuss, lastEl]
    
    return {
      props: {
        // results: JSON.parse(JSON.stringify(discussions))
        finalDiscuss: finalDiscuss,
        name: discussion_name,
        discussion_id: dis_id,
        error: false,
        order: order
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