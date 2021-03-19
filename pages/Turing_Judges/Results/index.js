import React from "react";
import Link from "next/link"
import { getAllDiscussions } from "../../../controller/data-utils.js";

const Home = ({ discussionNameList }) => {

  return (
    <div className="margin_sidebar">
      <h2 className="ml-3 h1_turing_game">List of results for Investigations</h2>


      <div class="ml-2 list-group ">
        <div className="container">

          {discussionNameList.map( discussion => {
            return (
              <>
              {
                !discussion.result_status?
                <div className="row">
                  <div className="col-11">
                    <Link className="nav-link button" key={discussion.id} href={"Game/"+discussion.id}>
                      <a className="mx-2 d-flex justify-content-between list-group-item list-group-item-action lead">
                        {discussion.name} (Go to Form)
                        <button className="btn btn-outline-danger button-form-font custom_button">Votes are not finished <span className="badge badge-light">{discussion.total} votes</span></button>
                      </a>
                    </Link>
                  </div>
                </div>:
                <div className="row">
                  <div className="col-11">
                    <Link className="nav-link button" key={discussion.id} href={"Results/"+discussion.id}>
                      <a className="mx-2 d-flex justify-content-between hover list-group-item list-group-item-action lead">
                        {discussion.name}
                        <button className=" btn redirect_background custom_button button-form-font text-dark">Results are open <span className="badge badge-light">{discussion.total} votes</span></button>
                      </a>
                    </Link>
                  </div>
                </div>
                
              } 
            </>
          )
        })}
      </  div>
        <hr/>
            <Link href="Game" className="nav-link button">
              <div className="my-5 cursor mx-2 text-center navbar_background custom_button button-form-font text-dark navbar_shadow"> 
                  <h2 className="ml-2">See all available games 🔗</h2>
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

export default Home;
