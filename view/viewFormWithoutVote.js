import Section from "./radio.js"
import ChatLayout from "./chat.js"
import Link from "next/link"
import Image from "next/image"
import React, { useState, useEffect, Component } from "react";

export const ViewFormWithoutVote = ({discussion_id, finalDiscuss, name}) => {

  const changeBinary = (index) => {
    let temp = showFlag.map(val => val)
    temp[index] = !temp[index]
    return temp
  }

  const changeAll = () => {
    return [true, true, true, true, true, true]
  }


  const [showFlag, setShowFlag] = useState([false, false, false, false, false, false])


  useEffect(() => {

  }, [...showFlag])


  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-8">


          <div className="font-weight-bold Lato-thin h3_turing_game align-items-center text-center">Can you guess if the mystery candidate is Human or an AI?</div>
          </div>
          <div className="col-4 align-self-center">
            <Image src="/logoTuringJudges.jpg" width="800" height="800"/>
          </div>
        </div>
       
    <div className="row justify-content-around"><h2>Investigation: {name}</h2></div>
    <div className="row justify-content-around "><h2 className="Lato-thin text-center">You have already voted on this conversation</h2></div>
    <hr/>
      <div className="needs-validation" method="POST" action="/api/submitForm" novalidate>
        {
          finalDiscuss.map(sectionDis => {
            return(
              <>
                <div className="row justify-content-center">
                  {/* <div className="col-1"></div> */}
                  <div className="col-xl-8 shadow border-left border-bottom-dark border-right border-bottom rounded-right">
                    <ChatLayout discussion_id={discussion_id} sectionDis={sectionDis}/>
                  </div>
                </div>
              </>
            )
          })
        }
      </div>
        </div>
    </>
  )
}
