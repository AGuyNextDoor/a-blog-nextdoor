import React, { useState, useEffect } from "react";
import { getDiscussionsText, getDiscussionsName } from "../../../controller/data-utils"
import { ViewForm } from "../../../view/viewForm"
import Router, { useRouter } from 'next/router'
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

const Form = ({finalDiscuss, name, error, discussion_id}) => {
  const router = useRouter()
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const start = () => {
      setLoading(true);
    };

    const end = () => {
      setLoading(false);
    };

    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };

  }, [])

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
      {loading ? (
        <div className="margin_sidebar">
          <h1>Loading...</h1>
        </div>
      ) : (
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
          <ViewForm discussion_id={discussion_id} finalDiscuss={finalDiscuss} name={name}/>
          
        }
        </div>
      </div>
      )}
    </>
    
  )
}

export async function getServerSideProps(context){

  const dis_id = context.params.discussion_id
  
  let discuss = await getDiscussionsText(dis_id)
  let discussion_name = await getDiscussionsName(dis_id)
  
  if(discuss[0] !== "error"){
    
    let firstEl = discuss.shift()
    let lastEl = discuss.pop()
    
    discuss = shuffleArray(discuss)
    
    let finalDiscuss = [firstEl, ...discuss, lastEl]
    console.log(dis_id);
    
    return {
      props: {
        // results: JSON.parse(JSON.stringify(discussions))
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