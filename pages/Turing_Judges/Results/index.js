import React from "react";
import Link from "next/link"
import { getAllDiscussions } from "../../../controller/data-utils.js";

const Home = ({ discussionNameList }) => {

  return (
    <div className="margin_sidebar">
      <h2>List of results</h2>


      <div class="list-group ">

        {discussionNameList.map( discussion => {
        return (
          <>
            {
              !discussion.result_status?
              <Link className="nav-link button" key={discussion.id} href={"Forms/"+discussion.id}>
                <a className="mx-2 d-flex justify-content-between list-group-item list-group-item-action lead">
                  {discussion.name} (Results)
                  <div className="btn btn-danger" disabled>Votes are not finished</div>
                </a>
              </Link>:
              <Link className="nav-link button" key={discussion.id} href={"Results/"+discussion.id}>
              <a className="mx-2 d-flex justify-content-between list-group-item list-group-item-action lead">
                {discussion.name}
                <div className="btn btn-success" disabled>Results are open</div>
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

export default Home;
