import Section from "./radio.js"
import ChatLayout from "./chat.js"
import Link from "next/link"

export const ViewForm = ({discussion_id, finalDiscuss, name}) => {
  return (
    <>
    <h3>Welcome to the Turing Judges</h3>
        Read the following conversations between me and a "Turing Candidate".
        <p><h4>Rules:</h4>
          <ul>
            <li>The candidate has 50% chance of being a <text className="font-italic">HUMAN</text> or an <text className="font-italic">AI</text>.</li>
            <li>For each section, judge the possible identity of the AI.</li>
            <li>Candidates' messages are in blue on the left of the screen. Orange for the judge's messages. </li>
            <li>All the following messages are part of the same conversation.</li>
          </ul>
        </p>
        <div className="font-italic">If you want more information about the Turing Judge experiment: <Link href="/Turing_Judges">click here</Link></div>
    <h2>{name}</h2>
          <form method="POST" action="/api/submitForm">
            {/* <label class="form-check-label" for="discussion_id">{discussion_id}</label> */}
            {
              finalDiscuss.map(sectionDis => {
                return(
                  <>
                  <div className="row">
                    <div className="col-1"></div>
                    <div className="col-7 border-right border-bottom rounded-right">
                      <ChatLayout discussion_id={discussion_id} sectionDis={sectionDis}/>
                    </div>
                    <div className="col-3 form-container">
                      <div className="form-position">
                      
                        <div class="form-check">
                         <Section section={String(parseInt(sectionDis.section) + 1)}/>
                        </div>
                      </div>
                    </div>
                    <div className="col-1"></div>
                  </div>

                  </>
                )
              })
            }
            <input class="form-check-input" name="discussion_id" type="radio" value={discussion_id} checked required/>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
    </>
  )
}