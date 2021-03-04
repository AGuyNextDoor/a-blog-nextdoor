import React from "react";
import {ViewCard} from "../../view/viewCard.js"

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
    <div className="margin_sidebar" >
      <h2 className="mx-2">WELCOME TO THE TURING JUDGES EXPERIMENT</h2>
      <div className="mx-4 my-2">
        <p className="font">The Turing Judge is an experiment trying to apply a social dimension to the Imitation Game (aka. Turing Test).</p>

        <h3>The Turing Test</h3>

        <p className="font">The Turing Test is an experiment created by Alan Turing in 1950.</p>
        <p>Two <text className="font-weight-bold">CANDIDATES</text> are hidden, 
        where one candidate is an artificial intelligence and the other one is a human but their identity is hidden. 
        A <text className="font-weight-bold">JUDGE</text> is able to ask "any" amount of questions to the candidates.
        The judge's objective is to find which of the two candidates is the human. If he isn't able to find the identity, we can assume that the AI has an intelligence comparable to the human.</p>

        <p>Here is a <a href="https://www.youtube.com/watch?v=3wLqsRLvV-c&t=29s&ab_channel=TED-Ed">video from TED-Ed on the Turing test</a></p>
        <p>For those interested in Alan Turing's original paper, <a href="https://www.youtube.com/watch?v=MGW_Qcqr9eQ&ab_channel=LexFridman">Here is a video of Lex Fridman, an MIT professor</a> discussing the Turing test.</p>
        
        <h3>The "Turing Judges"</h3>
      
        <p>
          This experiment uses collective intelligence's emergent property as a final judge for the Turing test.
          Complete conversations between a Judge and a Candidate are shown, where the candidate has 50% chance of being a human or an AI.
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
    </div>
  );
}

export default Home;