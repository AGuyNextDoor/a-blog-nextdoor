import React from "react";
import { allVotes, voteOfDiscussion } from "../../controller/data-utils.js";
import {ViewCard} from "../../view/viewCard.js"
import {extractData} from "../../controller/data-calc.js"

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

const Home = ({ results }) => {

  const means = results.sections_final_mean.map(val => val.toFixed(3))

  console.log(means);

  
  
  
  return (
    <div>
      <h2>Home</h2>
      <div id="target"></div>
      <ViewCard results={results} means={means} mean={results.global_all_final_mean} name="test 01"/>
      
      {/* <h2>{result.map(val => <li>{val}</li>)}</h2> */}
      {/* <ul>{results.map(result => {
        return <p>{Object.keys(result).map(val => <li>{val}: {result[val]}</li>)}</p>
      })}
      </ul> */}
    </div>
  );
}

export async function getServerSideProps(context){
  // let client = await initDatabase()
  // let db = await client.db()
  
  let votes = await allVotes()
  
  // let results = await db.collection("votes").find({id: "1"}).toArray()
  // let discussions = await db.collection("votes").find({discussion_id: results[0].discussion_id}).toArray()
  
  // let listResult = results.map(val => val.toString())
  // console.log({discussions});

  let discuss = await voteOfDiscussion(votes[0].discussion_id)
  let data = await extractData(discuss)

  
  return {
    props: {
      // results: JSON.parse(JSON.stringify(discussions))
      results: data
    }
  }
}

export default Home;
