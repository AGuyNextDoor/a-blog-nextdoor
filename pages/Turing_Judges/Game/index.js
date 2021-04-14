import React from "react";
import Link from "next/link"
import { getAllDiscussions } from "../../../controller/data-utils"


const Form = ({discussionNameList}) => {
 
  return (
    <div className="margin_sidebar">
      <h2 className="ml-3 mb-5 h1_turing_game col-12 large_size">Choose an investigation</h2>


      <div class="ml-2 list-group">
        <div className="container">


      {discussionNameList.map( discussion => {
        return (
          <>
          {
            discussion.vote_status?
          <div className="row">
          <div className="col-12">
            <Link className="nav-link button" key={discussion.id} href={"Game/"+discussion.id}>
              <a className="text-uppercase d-flex justify-content-between list-group-item list-group-item-action lead">
                {discussion.name}
                <button className="btn acc_button custom_button button-form-font acc_text">Play</button>
              </a>
            </Link>
            </div>
            </div>:
            <div className="row">
              <div className="col-12">
                <Link className="nav-link button" key={discussion.id} href={"Results/"+discussion.id}>
                  <a className="text-uppercase d-flex justify-content-between list-group-item list-group-item-action lead">
                    {discussion.name} (Results)
                    <button className="align-items-center cursor  mx-2 text-center custom_button button-form-font acc_button acc_text" disabled>Closed</button>
                  </a>
                </Link>
              </div>
            </div>
          }
          
          </>
        )
      })}
      </div>
        <hr/>
        <Link href="Results" className="nav-link button">
          <div className="btn border acc_button custom_button button-form-font acc_text"> 
              <text className="ml-2 acc_text">See results 🔗</text>
          </div>
        </Link>
      </div>
    </div>
  )
}

export async function getServerSideProps(context){

  let result = await getAllDiscussions()

  return {
    props: {
      discussionNameList: result
    }
  }
}

export default Form;

