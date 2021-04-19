import React, { useState, useEffect } from "react";
import Router, { useRouter } from 'next/router'
import Head from "next/head"
import { checkIfAlreadyVotedSingle, getDiscussionsText, getDiscussionsName, getOrderDiscussionGame } from "../../../controller/data-utils"
import { ViewForm } from "../../../view/viewForm"
import { ViewFormWithoutVote } from "../../../view/viewFormWithoutVote"
import { ModalMessage } from "../../../components/ModalMessage"
import { NavigationBar } from "../../../components/navigationBar"
import { getSession } from 'next-auth/client';

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array
}

const Form = ({finalDiscuss, name, error, discussion_id, order, canVote}) => {
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
    <>
      <Head>
        <title>Turing Judges</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
        <div className="margin_sidebar">
          <div className="container">
          <h1 className="h1_turing_game mt-5">THE TURING GAME</h1>
            <NavigationBar name={name} valueLeft={order[0]} valueRight={order[2]}/>
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
          <>
            {
              canVote?
              <ViewForm discussion_id={discussion_id} finalDiscuss={finalDiscuss} name={name}/>:
              <ViewFormWithoutVote discussion_id={discussion_id} finalDiscuss={finalDiscuss} name={name}/>
            }
          </>
          
        }
        </div>
      </div>
    </>
    
  )
}

export async function getServerSideProps(context){

  const session = await getSession(context)
  
  
  
  if(!session){
    
    return {
      redirect: {
        destination: '/Turing_Judges/Game',
        permanent: false,
      },
    }
    
    
  } else {
    let canVote = await checkIfAlreadyVotedSingle(session.user.email, context.params.discussion_id)
    if(canVote){
      canVote = false
    } else {
      canVote = true
    }

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
          order: order,
          canVote: canVote
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
}

export default Form;
