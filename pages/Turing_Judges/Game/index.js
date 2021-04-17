import React from "react";
import Link from "next/link"
import { getAllDiscussions } from "../../../controller/data-utils"


const Form = ({discussionNameList}) => {
 
  return (
    <div id="max_body" className="container margin_sidebar">
      <h2 className="my-5 h1_turing_game large_size">Choose an investigation</h2>


      <div className="row">
      {discussionNameList.map( discussion => {
        return (
          <>
          {
            discussion.vote_status?
            <div className="col-12">
              <Link className="nav-link button" key={discussion.id} href={"Game/"+discussion.id}>
                <a className="my-2 Lato-bold align-items-center text-uppercase d-flex justify-content-between list-group-item list-group-item-action acc_button lead">
                  {discussion.name}
                  <button className="btn acc_button custom_button button-form-font acc_text">Play</button>
                </a>
              </Link>
            </div>:
            <div className="col-12">
              <Link className="nav-link button" key={discussion.id} href={"Results/"+discussion.id}>
                <a className="my-2 Lato-bold align-items-center d-flex justify-content-between list-group-item list-group-item lead">
                  {discussion.name} (Go to Results 🔗)
                  <button className="align-items-center cursor  mx-2 text-center custom_button button-form-font acc_button acc_text" disabled>Closed</button>
                </a>
              </Link>
            </div>
          }
          
          </>
        )
      })}
        <div className="col-12">
            <a className="d-flex justify-content-center lead">
          <Link href="Results" className="nav-link button">
              <div className="mx-5 btn border acc_button custom_button button-form-font acc_text my-3"> 
                <text className="mx-3 acc_text">See Results 🔗</text>
              </div>
          </Link>
            </a>
        </div>
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

