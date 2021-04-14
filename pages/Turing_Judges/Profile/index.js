import React from "react";
import Image from "next/image"
import { ViewInvestigation } from "../../../view/viewInvestigation"
import { userSession, getSession } from 'next-auth/client';
import { getUserResult } from "../../../controller/data-utils.js"
import { InvestigationRecap } from "../../../view/investigationRecap"
import { BarInvestigation } from "../../../view/bar"
import { DoughnutChart } from "../../../view/doughnut"

const ProfilePage = ({user_result, all_result_discussion, all_result_user, user}) => {

  return (
    <div className="margin_sidebar col-12 mt-5 justify-content-center">

      <div id="card" className="col-12">
        <ViewInvestigation user_result={user_result}  all_result_discussion={all_result_discussion} all_result_user={all_result_user} user={user}/>
      </div>
    <h2>
      Investigation's Scores
    </h2>

    <div class="accordion">
      {
        user_result.map((val, index) => {

          console.log("id here:",val);
          console.log("average score here:",index, ":", averageScore(val.vote));

          let all_disc = all_result_discussion.filter(result => result.discussion_id === val.vote.discussion_id)

          return (
            <>
            <div className="card p-2">
              <div className="btn btn-link" type="button" data-toggle="collapse" data-target={`#collapse${index}`} aria-expanded="false" aria-controls={`collapse${index}`}>
                <div className="card-header" id={"heading"+index}>
                  <div className="mb-0">
                        <h4>{val.name}</h4>
                  </div>
                </div>
              </div>
      
            <div className="collapse" id={`collapse${index}`}>
              <div className="container">
                <div className="row justify-content-center">
                  <div id="card-item" className='col-lg-3 p-5'>
                    <div className="">
                      <h3>{val.name} is ... <div className="justify-text-bold">{val.ai?"AI":"HUMAN"}</div></h3>
                      {
                        val.ai?
                        <div className="row justify-content-center align-items-center">
                            <div class="justifiy-content-center">
                              <Image src="/AILogo.png" width="500" height="500"></Image>
                            </div>
                          </div>:
                          <div className="row justify-content-center align-items-center">
                            <div class="justifiy-content-center">
                              <Image src="/humanLogo.jpg" width="500" height="500"></Image>
                            </div>
                          </div>
                      }
                      </div>
                  </div>
                  <div className='col-lg-3  p-5'>
                    <h3 id="doughnut_number_you">Score</h3>
                    <DoughnutChart userScore={(val.total_value/3.6).toFixed(2)} averageScore={(all_disc[0].average_score/3.6).toFixed(2)}></DoughnutChart>
                  </div>

                  </div>

                  <div className="row justify-content-md-center">
                    <div id="card" className="col-8">
                      <h3>Your investigation : {averageScore(val.vote).toFixed(2)}</h3>
                      <div>
                        <InvestigationRecap scoreOne={averageScore(val.vote)}/>
                      </div>
                    </div>
                  </div>
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

function averageScore(val) {
  return ((val.section_1 + val.section_2 + val.section_3 + val.section_4 + val.section_5 + val.section_6)/6)
}

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

export default ProfilePage;
