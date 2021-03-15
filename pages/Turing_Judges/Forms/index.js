import React from "react";
import Link from "next/link"
import { getAllDiscussions } from "../../../controller/data-utils"


const Form = ({discussionNameList}) => {
 
  return (
    <div className="margin_sidebar">
      <h2 className="ml-2 h1_turing_game">Which discussions do you want to vote on?</h2>


      <div class="ml-2 list-group">

      {discussionNameList.map( discussion => {
        return (
          <>
          {
            discussion.vote_status?
            <Link className="nav-link button" key={discussion.id} href={"Forms/"+discussion.id}>
              <a className="d-flex justify-content-between list-group-item list-group-item-action lead">
                {discussion.name} <text className="font-weight-light text-left">({discussion.date})</text>
                <button className="btn navbar_background" disabled>Voting is OPEN</button>
              </a>
            </Link>:
            <Link className="nav-link button" key={discussion.id} href={"Results/"+discussion.id}>
              <a className="d-flex justify-content-between list-group-item list-group-item-action lead">
                {discussion.name} (Click to see results)
                <button className="btn btn-danger" disabled>Votes are closed</button>
              </a>
            </Link>
          }
          </>
        )
      })}
      </div>
    </div>
  )
}

export async function getServerSideProps(context){

  let result = await getAllDiscussions()

  console.log({result});

  return {
    props: {
      discussionNameList: result
    }
  }
}

export default Form;