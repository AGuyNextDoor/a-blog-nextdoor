import React from "react";
import Link from "next/link"
import Head from "next/head"
import { getAllDiscussions, checkIfAlreadyVoted } from "../../../controller/data-utils"
import Header from "../../../components/header"
import { getSession } from 'next-auth/client';


const Form = ({discussionNameList, user, logged}) => {

  if(logged){
    return (
      <>
      <Head>
        <title>Turing Judges</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div id="max_body" className="container margin_sidebar">
      <h2 className="my-5 h1_turing_game large_size">Choose an investigation</h2>


      <div className="row">
      {discussionNameList.map( discussion => {
        return (
          <>
          {
            discussion.vote_status?
            <div className="col-12">
              {
                discussion.can_vote?
                <Link className="nav-link button" key={discussion.id} href={"Game/"+discussion.id}>
                  <a className="my-2 Lato-bold align-items-center text-uppercase d-flex justify-content-between list-group-item list-group-item-action acc_button lead">
                    {discussion.name}
                    <button className="btn acc_button custom_button button-form-font acc_text">Play</button>
                  </a>
                </Link>:
                <Link className="nav-link button" key={discussion.id} href={"Game/"+discussion.id}>
                  <a className="my-2 Lato-bold align-items-center text-uppercase d-flex justify-content-between list-group-item list-group-item-action acc_button disabled">
                    {discussion.name}
                    <button className="btn btn-danger custom_button button-form-font acc_text">You Already Voted</button>
                  </a>
                </Link> 
              }
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
    </>
    )
  } else {
    return (
      <>
      <div id="max_body" className="container margin_sidebar">
      <h2 className="my-5 h1_turing_game large_size">Choose an investigation</h2>


      <div className="row">

        <div className="col-12">
          <Link className="nav-link button"  href={"Results"}>
            <div className="my-2 Lato-bold align-items-center d-flex justify-content-around list-group-item list-group-item lead Lato-bold">
              <text className="text-center">You need to be logged in to play!<Header ></Header></text>
            </div>
          </Link>
        </div>

        {discussionNameList.map( discussion => {
          return (
            <>

                <div className="col-12">
                  {
                    <Link className="nav-link button" key={discussion.id} href={"Game/"+discussion.id}>
                      <a id="color-light-grey" className="my-2 Lato-bold align-items-center text-dark text-uppercase d-flex justify-content-center list-group-item list-group-item-action acc_button disabled">
                        Investigation : {discussion.name}
                      </a>
                    </Link> 
                  }
                </div>
              </>
            )
          })
        }

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
    </>
    )
  }
}

export async function getServerSideProps(context){

  const session = await getSession(context)

  let result = await getAllDiscussions()
  if(session){
    let alreadyVoted = await checkIfAlreadyVoted(session.user.email, result)
    
    return {
      props: {
        user: session.user,
        discussionNameList: alreadyVoted,
        logged: true
      }
    }
  } else {
    return {
      props: {
        user: false,
        discussionNameList: result,
        logged: false
      }
    }
  }
}

export default Form;

