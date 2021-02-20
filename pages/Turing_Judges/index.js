import React from "react";
import { Radar} from "react-chartjs-2"
import { initDatabase, allVotes, voteOfDiscussion } from "../../controller/data-utils.js";
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

  console.log({results});

  console.log(results.section1_final_mean, results.section2_final_mean, results.section3_final_mean, results.section4_final_mean, results.section5_final_mean, results.section6_final_mean);

  const data = {
    labels:['section 1', 'section 2', 'section 3', 'section 4', "section 5", "section 6"],
    datasets: [results.section1_final_mean, results.section2_final_mean, results.section3_final_mean, results.section4_final_mean, results.section5_final_mean, results.section6_final_mean]
  }
  
  return (
    <div>
      <h2>Home</h2>
      <div id="target"></div>
      <Radar
        data={data}
      />
      {console.log(typeof result)}
      {console.log(results[0])}
      {/* <h2>{result.map(val => <li>{val}</li>)}</h2> */}
      <ul>{results.map(result => {
        return <p>{Object.keys(result).map(val => <li>{val}: {result[val]}</li>)}</p>
      })}
      </ul>
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
  let data = extractData(discuss)

  
  return {
    props: {
      // results: JSON.parse(JSON.stringify(discussions))
      results: data
    }
  }
}

export default Home;
