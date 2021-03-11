import React, { useEffect }  from "react";
import Router from "next/router"
import { votesOfDiscussion, discussionResultStatus, discussionName, discussionIdentity } from "../../../controller/data-utils.js";
import {ViewCard} from "../../../view/viewCard.js"
import {extractData} from "../../../controller/data-calc.js"

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

const Home = ({ results, status, name, identity }) => {

  useEffect(() => {
    if(!status){
      Router.push('/Turing_Judges/Forms?e='+encodeURIComponent("Results not yet available"))
    }
  })
  const means = results.sections_final_mean.map(val => val.toFixed(3))
  
  console.log(means);
  
  return (
    <div className="margin_sidebar">
    <ViewCard identity={identity} results={results} means={means} mean={results.global_all_final_mean} name={name}/>
    </div>
  );
}

export async function getServerSideProps(context){

  const dis_id = context.params.discussion_id

  let status = await discussionResultStatus(dis_id)
  let name = await discussionName(dis_id)
  let identity = await discussionIdentity(dis_id)
  let discuss = await votesOfDiscussion(dis_id)
  let data = await extractData(discuss)
  
  return {
    props: {
      results: data,
      status: status,
      name,
      identity
    }
  }
}

export default Home;
