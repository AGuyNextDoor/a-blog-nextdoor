import React from "react";
import Image from "next/image"
import { userSession, getSession } from 'next-auth/client';
import { getUserResult } from "../../../controller/data-utils.js"

const rankingTitle = (score) => {
  if(score === 0){
    return "Glass"
  } else if (score < 2){
    return "Bronze"
  } else if (score < 4){
    return "Silver"
  } else if (score < 6){
    return "Coin Flip"
  } else if (score < 8){
    return "Gold"
  } else if (score < 10){
    return "Diamond"
  } else if (score === 10){
    return "Alan Turing"
  }
}

const cardGenerator = (title, data) => {
  return (
    <div className="col-lg-4 col-6-md">
      <div className="report-card-section-color report-card-section border-dark border">
          <div className="h2_report_card mx-2">{title}:</div>
          <h4 className="card-title ml-4 report-card-body">
            {data}
          </h4>
        </div>
    </div>
  )
}

const ProfilePage = ({user_result, all_result_discussion, all_result_user, user}) => {

  return (
    <div className="margin_sidebar col-12 mt-5 justify-content-center">

      <div className="container border border-dark rounded p-4 report-card">
          <hr/>
        <div className="row ">
          <h1 className="ml-3 mb-3 h1_report_card">
            {"< Investigator Card >"}
          </h1>
        </div>
        <div className="row my-2">
          {cardGenerator("Investigations", user_result.length)}
          {cardGenerator("Average Score", `${averageScore(user_result)} / 10`)}
          <div className="col-lg-4 ">
            <div className="report-card-section">
                <div className="h2_report_card mx-2 text-white">Rank: {rankingTitle(averageScore(user_result))}</div>
                <h5 className="card-title ml-4">
                  <img src="" alt=""/>
                </h5>
              </div>
          </div>
        </div>
        <div className="row my-2">
          {cardGenerator("Average Investigations", (all_result_user.reduce(( p, c ) => p + c.number_of_votes, 0 ) / all_result_user.length).toFixed(2))}
          {cardGenerator("Global Average Score", ((all_result_discussion.reduce(( p, c ) => p + c.average_score, 0 ) / all_result_discussion.length)/3.6).toFixed(2))}
          {/* {cardGenerator("Rank", rankingTitle(averageScore(all_result)))} */}
        </div>

      </div>

    <h2>
      Investigation's Scores
    </h2>

    <div class="accordion">
      {
        user_result.map((val, index) => {

          console.log("id here:",val);

          let all_disc = all_result_discussion.filter(result => result.discussion_id === val.vote.discussion_id)

          return (
            <>
            <div className="card">
              <div className="btn btn-link" type="button" data-toggle="collapse" data-target={`#collapse${index}`} aria-expanded="false" aria-controls={`collapse${index}`}>
                <div className="card-header" id={"heading"+index}>
                  <div className="mb-0">
                        <h4>{val.name}</h4>
                  </div>
                </div>
              </div>
      
            <div className="collapse" id={`collapse${index}`}>
              <div className="card-body">
                
              <ul class="list-group list-group-flush">
                  <li className="list-group-item ">Identity: {val.ai? "AI": "Human"}</li>
                  <li className="list-group-item ">Your score: {(val.total_value/3.6).toFixed(2)}/10</li>
                  <li className="list-group-item ">Vote recap: {(val.total_value/3.6).toFixed(2)}/10</li>
                  <li className="list-group-item ">Average Score: {(all_disc[0].average_score/3.6).toFixed(2)}</li>
              </ul>
              </div>
            </div>
            </div>
            </>
          )
        })
      }
      </div>
    </div>
  );
};

export async function getServerSideProps (context) {
  // Get the user's session based on the request
  const session = await getSession(context)

  
  if (!session) {
    return {
      props: {logged: false},
    }
  }
  let results = await getUserResult(session.user.email)

  console.log({results});
  console.log(results[0]);
                       
  return {
    props: { 
      user: session.user, 
      user_result: JSON.parse(JSON.stringify(results[0])),
      all_result_discussion: JSON.parse(JSON.stringify(results[1])).discussionsSummary,
      all_result_user: JSON.parse(JSON.stringify(results[1])).userSummary,
      logged:true 
    },
  }
}

const averageScore = (resultList) => {
  const sum = resultList.reduce((a,b) => {
    return a + (b.total_value/3.6)
  }, 0)
  return (sum/resultList.length).toFixed(2)
}

export default ProfilePage;
