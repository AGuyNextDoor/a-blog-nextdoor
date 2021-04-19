import React from "react";
import Link from "next/link"
import Image from "next/image"
import Head from "next/head"
import {ViewCard} from "../../view/viewCard.js"
import HomeIndex from "./index"

// console.log(process.env.ENV)

// initDatabase().then( db => {
//   console.log({db});
// })

// db.collection("users")
//   .findOne({ firstName: "Frida" })
//   .then((doc) => {
//     console.log(doc);
//     client.close();
//   });

const Home = () => {
  
  return (
    <>
    <Head>
      <title>Turing Judges</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className="margin_sidebar" >
      <h2 className="mx-2 h1_turing_game">WELCOME TO THE TURING JUDGES EXPERIMENT</h2>
      <hr/>
      <div className="mx-1 my-2">
        <div className="container">
        <div className="row">
        <h5 className="col ont text-center">Can you guess if the mystery candidate is Human or an AI?</h5>

        </div>
        </div>

        <div className="container">
          <div className="row"> 
            <Link href="Game" className="nav-link button">
              <div className="align-items-center acc_button acc_text cursor col mx-2 text-center custom_button button-form-font navbar_shadow"> 
                PLAY THE GAME
              </div>
            </Link>
            <Link href="Results" className="nav-link button">
              <div className=" align-items-center cursor col mx-2 text-center custom_button button-form-font acc_button acc_text navbar_shadow"> 
                SEE THE RESULTS
              </div>
            </Link>
          </div>
        </div>

        <h3>The Turing Test</h3>


        <p className="font">The Turing Test is an experiment created by Alan Turing in 1950.</p>
        <p>Two <text className="font-weight-bold">CANDIDATES</text> are hidden, 
        where one candidate is an artificial intelligence and the other one is a human but their identity is hidden. 
        A <text className="font-weight-bold">JUDGE</text> is able to ask "any" amount of questions to the candidates.
        The judge's objective is to find which of the two candidates is the human. If he isn't able to find the identity, we can assume that the AI has an intelligence comparable to the human.</p>

        <p><a href="https://www.youtube.com/watch?v=3wLqsRLvV-c&t=29s&ab_channel=TED-Ed">Here is a video from TED-Ed</a> on the Turing test</p>
        <p>For those interested in Alan Turing's original paper, <a href="https://www.youtube.com/watch?v=MGW_Qcqr9eQ&ab_channel=LexFridman">Here is a video of Lex Fridman,</a> an MIT professor, discussing the Turing test.</p>
        
        <h3>The "Turing Judges"</h3>
      
        <p className="">The Turing Judge is an experiment trying to apply a social dimension to the Imitation Game (aka. Turing Test).</p>
        <p>
          This experiment uses collective intelligence's emergent properties as a final judge for the Turing test.
          </p>
          <p>
          Complete conversations between a Judge and a mysterious Candidate are shown, where the Candidate randomly is a Human or an AI.
          Along the conversations, participants can vote and submit their impressions on the candidates on 5 distinct levels:
        </p>
        <ul>
          <li> Definitively an AI (-3 points)</li>
          <li> Maybe an AI (-1 points)</li>
          <li> Can't tell. (0 points)</li>
          <li> Maybe a Human (1 points)</li>
          <li> Definitively a Human (3 points)</li>
        </ul>

        <p>Different modern models of Natural Language Processing (<text className="font-weight-bold">NLP</text>) are being questionned on different form of behaviors and intelligence.</p>
        <p>Once the votes are finished, results are accessibled for each judgement, revealing the identity </p>
      </div>
        <div className="text-center align-self-end">
          <Image src="/logoTuringJudges.jpg" width="300" height="300"/>
        </div>
    </div>
    </>
  );
}

export default Home;
