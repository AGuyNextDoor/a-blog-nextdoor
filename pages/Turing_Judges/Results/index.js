import React from "react";
import Link from "next/link"
import { getAllDiscussions } from "../../../controller/data-utils.js";

const Home = ({ discussionNameList }) => {

  return (
    <div id="max_body" className="container margin_sidebar">
      <div className=" my-5 h1_turing_game large_size">Results of investigations</div>


      <div className="row">
          {discussionNameList.map( discussion => {
            return (
              <>
              {
                discussion.result_status?
                  <div className="col-12 ">
                    <Link className="nav-link button" key={discussion.id} href={"Results/"+discussion.id}>
                      <a className="my-2 d-flex Lato-bold align-items-center justify-content-between hover list-group-item list-group-item-action acc_button lead">
                        {discussion.name}
                        <span className="badge badge-light">{discussion.total} votes</span>
                      </a>
                    </Link>
                  </div>:
                  <div className="col-12">
                    <Link className="nav-link button" key={discussion.id} href={"Game/"+discussion.id}>
                      <a className="my-2 d-flex Lato-bold align-items-center justify-content-between list-group-item list-group-item lead">
                        {discussion.name} (Go to Form 🔗)
                          <button className="btn btn-ouline-danger disabled button-form-font custom_button acc_text ">Close</button>
                      </a>
                    </Link>
                </div>
                  
                
              } 
            </>
          )
        })}
        <div className="col-12">
                <a className="d-flex justify-content-center lead">
            <Link href="Game" className="nav-link button">
              <div className="mx-5 btn border acc_button custom_button button-form-font acc_text my-3"> 
                <text className="mx-3 acc_text">See Games 🔗</text>
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

export default Home;
