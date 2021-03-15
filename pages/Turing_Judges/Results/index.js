import React from "react";
import Link from "next/link"
import { getAllDiscussions } from "../../../controller/data-utils.js";

const Home = ({ discussionNameList }) => {

  return (
    <div className="margin_sidebar">
      <h2 className="ml-3 h1_turing_game">List of results for Candidates</h2>


      <div class="list-group ">
        <div className="container form-position">

          {discussionNameList.map( discussion => {
            return (
              <>
              {
                !discussion.result_status?
                <div className="row">
                  <div className="col-12">
                    <Link className="nav-link button" key={discussion.id} href={"Forms/"+discussion.id}>
                      <a className="mx-2 d-flex justify-content-between list-group-item list-group-item-action lead">
                        {discussion.name} (Results)
                        <button className="btn btn-danger" disabled>Votes are not finished</button>
                      </a>
                    </Link>
                  </div>
                </div>:
                <div className="row">
                  <div className="col-12">
                    <Link className="nav-link button" key={discussion.id} href={"Results/"+discussion.id}>
                    <a className="mx-2 d-flex justify-content-between list-group-item list-group-item-action lead">
                      {discussion.name}
                      <button className="btn navbar_background" disabled>Results are open</button>
                    </a>
                    </Link>
                  </div>
                </div>
                
              }
            </>
          )
        })}
      </  div>
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
