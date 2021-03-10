import Section from "./radio.js"
import ChatLayout from "./chat.js"
import Link from "next/link"
import Image from "next/image"

export const ViewForm = ({discussion_id, finalDiscuss, name}) => {
  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-8">


        <h1><span>THE TURING GAME</span></h1>
            <text className="text-center">Can you guess if the mystery candidate is Human or a Robot?</text>
            <p><h4>RULES:</h4>
              <ul>
                <li>The candidate has 50% chance of being a <text className="font-italic">HUMAN</text> or an <text className="font-italic">AI</text>.</li>
                <li>For each section, judge the possible identity of the candidate.</li>
                <li>You need to answer ALL forms to be able submit.</li>
                <li>All the following messages are part of the SAME conversation.</li>
              </ul>
            </p>
            <div className="font-italic">If you want more information about the Turing Judge experiment: <Link href="/Turing_Judges">click here</Link></div>
        </div>
        <div className="col-4 align-self-end">
          <Image src="/logoTuringJudges.jpg" width="800" height="800"/>
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

                        <button className="navbar_background button-form btn btn-light border hidden visible-xs" type="button" data-toggle="collapse" data-target={"#collapse-"+sectionDis.section} aria-expanded="false" aria-controls={"collapse-"+sectionDis.section}>
                          <text className="second_color button-form-font">
                            Up until now, what's your hypothesis? 🕵️
                          </text>
                        </button>
                      </div>
                    </div>
          
                    <div className="col-xl align-self-end collapse dont-collapse-sm"  id={"collapse-"+sectionDis.section}>
                      <div className="d-flex justify-content-center">
                        <div class="form-check">
                         <Section section={String(parseInt(sectionDis.section) + 1)}/>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                  </>
                )
              })
            }
            {/* </div> */}
            <input class="form-check-input" name="discussion_id" type="radio" value={discussion_id} checked required/>
            <div class="invalid-tooltip">
              Please answer all 6 forms to submit!
            </div>
            <div className="row justify-content-md-center">
              <div className="col-md-auto m-4">
                {/* <input class="form-check-input cursor" type="radio" name="1" required/>
                <input class="form-check-input cursor" type="radio" name="2" required/>
                <input class="form-check-input cursor" type="radio" name="3" required/>
                <input class="form-check-input cursor" type="radio" name="4" required/>
                <input class="form-check-input cursor" type="radio" name="5" required/>
                <input class="form-check-input cursor" type="radio" name="6" required/> */}
                <button type="submit" class="btn button-form-font border btn-light btn-lg navbar_shadow sidebar_background">
                  <text className="">
                    Submit your investigation 🔍
                  </text>
                </button>
                <p></p>
                <p className="font-italic">Be sure to have answered all 6 forms!</p>
                <text className="font-italic">Otherwise the button won't work.</text>
              </div>
            </div>
            
          </form>
    </>
  )
}