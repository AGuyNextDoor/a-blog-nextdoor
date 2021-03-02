import Section from "./radio.js"
import ChatLayout from "./chat.js"

export const ViewForm = ({discussion_id, finalDiscuss, name}) => {
  return (
    <>
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