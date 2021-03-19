import React from "react";
import Link from "next/link"
import { getAllDiscussions } from "../../../controller/data-utils"


const Form = ({discussionNameList}) => {
 
  return (
    <div className="margin_sidebar">
      <h2 className="ml-2 h1_turing_game">Which discussions do you want to investigate on?</h2>


      <div class="ml-2 list-group">
        <div className="container">


      {discussionNameList.map( discussion => {
        return (
          <>
          {
            discussion.vote_status?
          <div className="row">
          <div className="col-11">
            <Link className="nav-link button" key={discussion.id} href={"Game/"+discussion.id}>
              <a className="d-flex justify-content-between list-group-item list-group-item-action lead">
                {discussion.name} <text className="font-weight-light text-left">({discussion.date})</text>
                <button className="btn redirect_background custom_button button-form-font text-dark" disabled>Voting is OPEN</button>
              </a>
            </Link>
            </div>
            </div>:
            <div className="row">
              <div className="col-11">
                <Link className="nav-link button" key={discussion.id} href={"Results/"+discussion.id}>
                  <a className="d-flex justify-content-between list-group-item list-group-item-action lead">
                    {discussion.name} (Click to see results)
                    <button className="btn btn-outline-danger button-form-font custom_button" disabled>Votes are closed</button>
                  </a>
                </Link>
              </div>
            </div>
          }
          </>
        )
      })}
      </div>
      <div className="relative fixed-bottom ">

        <Link href="Results" className="nav-link button">
          <div className="my-5 cursor mx-2 text-center navbar_background custom_button button-form-font text-dark navbar_shadow"> 
              <h2 className="ml-2 ">See results of investigation 🔗</h2>
          </div>
        </Link>
      </div>
        <hr/>
      <div>
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

