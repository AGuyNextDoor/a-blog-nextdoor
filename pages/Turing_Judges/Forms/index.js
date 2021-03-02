import React from "react";
import Link from "next/Link"
import { getAllDiscussions } from "../../../controller/data-utils"


const Form = ({discussionNameList}) => {
 
  return (
    <div className="margin_sidebar">
      <h2>Which discussions do you want to vote on?</h2>


      <div class="list-group">

      {discussionNameList.map( discussion => {
        return (
          <>
          {
            discussion.status?
            <Link className="nav-link button" key={discussion.id} href={"Forms/"+discussion.id}>
              <a className="d-flex justify-content-between list-group-item list-group-item-action lead">
                {discussion.name}
                <button className="btn btn-success" disabled>Votes are open</button>
              </a>
            </Link>:
            <Link className="nav-link button" key={discussion.id} href={"Results/"+discussion.id}>
              <a className="d-flex justify-content-between list-group-item list-group-item-action lead">
                {discussion.name} (Results)
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

  return {
    props: {
      discussionNameList: result
    }
  }
}

export default Form;