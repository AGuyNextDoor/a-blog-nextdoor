import Section from "./radio.js"
import ChatLayout from "./chat.js"
import Link from "next/link"
import Image from "next/image"
import { BarInvestigation } from "./bar"
import { DoughnutChart } from "./doughnut"
import React, { useState, useEffect, Component } from "react";

export const ViewInvestigation = ({user_result, all_result_discussion, all_result_user, user}) => {
    
  return(

    <div id="card" className="container border border-dark rounded p-4 report-card">
          <hr/>
        <div className="row">
          <h1 className="ml-3 mb-3 h1_report_card">
            {"< Investigator Card >"}
          </h1>
        </div>
        <div className="row justifiy-content-md-center p-2 w-100">
          <div id="card-item" className='col-xlg-4 col-4 my-5'>
            <BarInvestigation label={"Investigations"} scoreOne={user_result.length} scoreTwo={(all_result_user.reduce(( p, c ) => p + c.number_of_votes, 0 ) / all_result_user.length).toFixed(2)} />
          </div>
          <div id="card-item" className='col-xlg-3  col-4 my-5'>
            <DoughnutChart userScore={averageScore(user_result)} averageScore={((all_result_discussion.reduce(( p, c ) => p + c.average_score, 0 ) / all_result_discussion.length)/3.6).toFixed(2)}></DoughnutChart>
          </div>
          <div id="card-item" className="col-xlg-1 col my-5">
            <div className="report-card-section-color report-card-section">
              <div className="h2_report_card mx-2">Ranking:</div>
                <h4 className="card-title ml-4 report-card-body">
                  {rankingTitle(averageScore(user_result))}
                </h4>
              </div>
          </div>
          {/* <div className="col-lg-2"></div> */}
        </div>
        <div className="row my-2">
          {/* {cardGenerator("Average Investigations", (all_result_user.reduce(( p, c ) => p + c.number_of_votes, 0 ) / all_result_user.length).toFixed(2))}
          {cardGenerator("Global Average Score", ((all_result_discussion.reduce(( p, c ) => p + c.average_score, 0 ) / all_result_discussion.length)/3.6).toFixed(2))} */}
          {/* {cardGenerator("Rank", rankingTitle(averageScore(all_result)))} */}
        </div>
      </div>
    )

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

const averageScore = (resultList) => {
  const sum = resultList.reduce((a,b) => {
    return a + (b.total_value/3.6)
  }, 0)
  return (sum/resultList.length).toFixed(2)
}

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
