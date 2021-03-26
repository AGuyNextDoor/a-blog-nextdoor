import React from "react";
import Link from "next/link"
import { getAllDiscussions } from "../../../controller/data-utils.js";

const Home = ({ discussionNameList }) => {

  return (
    <div className="margin_sidebar">
      <h2 className="ml-3 h1_turing_game text-wrap">Results of games</h2>


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
                        <button className="btn btn-outline-danger button-form-font custom_button acc_text ">Votes are not finished <span className="badge badge-light">{discussion.total} votes</span></button>
                      </a>
                    </Link>
                  </div>
                </div>:
                <div className="row">
                  <div className="col-11 ">
                    <Link className="nav-link button" key={discussion.id} href={"Results/"+discussion.id}>
                      <a className="mx-2 d-flex justify-content-between hover list-group-item list-group-item-action lead">
                        {discussion.name}
                        <button className=" btn acc_button custom_button button-form-font acc_text">Open <span className="badge badge-light">{discussion.total} votes</span></button>
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
              <div className="btn border acc_button custom_button button-form-font acc_text"> 
                  <text className="ml-2 acc_text">See all available games 🔗</text>
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
