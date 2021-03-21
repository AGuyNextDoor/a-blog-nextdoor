import Link from 'next/link'

export const ModalMessage = ({mess, type}) => {

  let color = "bg-danger"

  if(mess === "Votes are disabled"){
    color="bg-warning"
  } else if (mess === "Thank you!"){
    color="bg-success text-white"
  }

  return (
    <>
      <button type="button" class={"mt-2 btn "+color} data-toggle="modal" data-target="#exampleModal">
        More Info: {mess}
      </button>
      {
        type ==="error"?
        <ErrorModal mess={mess} color={color}/>:
        <MessageModal mess={mess} color={color}/>
      }
    </>
  )
}

const ErrorModal = ({mess, color}) => {

  let description = ""

  return(
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">{mess}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            ...
          </div>
          <div class={"modal-footer "+color}>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  )
}

const MessageModal = ({mess, color}) => {

 
  return(
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content ">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">{mess}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>Thank you for voting. Stay tuned on the <a href="https://twitter.com/JudgesTuring">Twitter page</a> or the <a href="https://www.reddit.com/user/TuringJudges">Reddit page</a> for the results or futur tests!</p>
            <p>Visit the <a href="/Turing_Judges/Results">RESULTS</a> page to see results from previous tests.</p>
          </div>
          <div class="modal-footer  bg-success">
            <button type="button" class="btn btn-success" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  )
}