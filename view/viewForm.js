import Section from "./radio.js"
import ChatLayout from "./chat.js"
import Link from "next/link"
import Image from "next/image"
import React, { useState, useEffect, Component } from "react";

export const ViewForm = ({discussion_id, finalDiscuss, name}) => {

  const changeBinary = (index) => {
    let temp = showFlag.map(val => val)
    temp[index] = !temp[index]
    return temp
  }

  const changeAll = () => {
    return [true, true, true, true, true, true]
  }


  const [showFlag, setShowFlag] = useState([false, false, false, false, false, true])


  useEffect(() => {

  }, [...showFlag])


  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-8">


          <h1 className="h1_turing_game">THE TURING GAME</h1>
          <h3 className="font-weight-bold text-center">Can you guess if the mystery candidate is Human or an AI?</h3>
          </div>
         <div className="col-4 align-self-end">
          <Image src="/logoTuringJudges.jpg" width="800" height="800"/>
        </div>
        <div class="container">
          
          <button class="btn btn-outline-danger visible-xs" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
            📜 Rules
          </button>
          
          <div class="collapse dont-collapse-sm" id="collapseExample">
            <p>
              <ul>
                <li>The candidate has 50% chance of being a <text className="font-italic">HUMAN</text> or an <text className="font-italic">AI</text>.</li>
                <li>For each section, judge the possible identity of the candidate.</li>
                <li>You need to answer ALL forms to be able submit.</li>
                <li>All the following messages are part of the SAME conversation.</li>
              </ul>
            <div className="font-italic">If you want more information about the Turing Judge experiment: <Link href="/Turing_Judges">click here</Link></div>
            </p>
          </div>
        </div>

        </div>
    </div>
       
    <h2>{name}</h2>
          <form className="needs-validation" method="POST" action="/api/submitForm" novalidate>
            {/* <label class="form-check-label" for="discussion_id">{discussion_id}</label> */}
            {/* <div class="container"> */}
            {
              finalDiscuss.map(sectionDis => {
                return(
                  <>
                  <div classname="container">

                  <div className="row">
                    {/* <div className="col-1"></div> */}
                    <div className="col-xl-8 shadow border-left border-bottom-dark border-right border-bottom rounded-right">
                      <ChatLayout discussion_id={discussion_id} sectionDis={sectionDis}/>
                      <div className="bg-light p-2 d-flex justify-content-center ">

                        <button onClick={() => setShowFlag(changeBinary(parseInt(sectionDis.section)))} className="shadow border-dark border sidebar_background button-form btn border-3 hidden visible-xs" type="button" data-toggle="collapse" data-target={"#collapse-"+sectionDis.section} aria-expanded="false" aria-controls={"collapse-"+sectionDis.section}>
                            {showFlag[parseInt(sectionDis.section)]?
                              <text className="button-form-font text-dak">⬆️ Close vote ⬆️</text>:
                              <text className="second_color button-form-font text-dark">↘️ Up until now, what's your hypothesis? 🕵️ ↙️</text>
                            
                            }
                        </button>
                      </div>
                    </div>

                    {
                      showFlag[parseInt(sectionDis.section)]?
                      <div className="col-xl align-self-end collapse show dont-collapse-sm"  id={"collapse-"+sectionDis.section}>
                        <div className="d-flex justify-content-center">
                          <div class="py-2 form-check">
                          <Section section={String(parseInt(sectionDis.section) + 1)}/>
                          </div>
                        </div>
                      </div>:
                      <div className="col-xl align-self-end collapse dont-collapse-sm"  id={"collapse-"+sectionDis.section}>
                        <div className="d-flex justify-content-center">
                          <div class="py-2 form-check">
                          <Section section={String(parseInt(sectionDis.section) + 1)}/>
                          </div>
                        </div>
                      </div>
                    }
                  </div>
                  </div>
                  </>
                )
              })
            }
            {/* </div> */}
            <input class="form-check-input" name="discussion_id" type="radio" value={discussion_id} checked required/>
            <div className="row justify-content-md-center">
              <div className="col-md-auto m-4">
                {/* <input class="form-check-input cursor" type="radio" name="1" required/>
                <input class="form-check-input cursor" type="radio" name="2" required/>
                <input class="form-check-input cursor" type="radio" name="3" required/>
                <input class="form-check-input cursor" type="radio" name="4" required/>
                <input class="form-check-input cursor" type="radio" name="5" required/>
                <input class="form-check-input cursor" type="radio" name="6" required/> */}
                <button onClick={() => setShowFlag(changeAll())} type="submit" class="btn rounded-pill button-form-font border-5 btn-warning btn-lg navbar_shadow sidebar_background">
                  <text className="">
                    Submit your investigation 🔍
                  </text>
                </button>
                <p></p>
                <p className="font-italic">Be sure to have answered all 6 forms!</p>
              </div>
            </div>
          </form>
    </>
  )
}