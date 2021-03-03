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
            <li>The candidate has 50% chance of being a human or an AI.</li>
            <li>For each section, vote how much you are convinced about the identity of the candidate.</li>
            <li>Candidates message are in white on the left of the screen. </li>
            <li>All the messages are part of the same conversation.</li>
          </ul>
        </p>
        If you want more information about the Turing Judge experiment: <Link href="/Turing_Judges">click here</Link>
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