import React, { useEffect }  from "react";
import Router from "next/router"
import Head from "next/head"
import Link from "next/link"
import  {discussionResultStatus, discussionName, discussionIdentity, getOrderDiscussionResult} from "../../../controller/data-utils.js";
import {ViewCard} from "../../../view/viewCard.js"
import {queryResults} from "../../../controller/data-viz.js"
import { NavigationBar } from "../../../components/navigationBar"

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

const Home = ({ results, status, name, identity, order }) => {

  useEffect(() => {
    if(!status){
      Router.push('/Turing_Judges/Game?e='+encodeURIComponent("Results not yet available"))
    }
  })
  // const means = results.sections_final_mean.map(val => val.toFixed(3))
  
  // console.log(means);
  
  return (
    <>
    <Head>
      <title>Turing Judges</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className="margin_sidebar">
       <div className="container">
         <div className="mt-5">
          <NavigationBar name={name} valueLeft={order[0]} valueRight={order[2]}/>
         </div>
        </div>
      <ViewCard identity={identity} results={results} name={name}/>
    </div>
    </>
  );
}

export async function getServerSideProps(context){

  const dis_id = context.params.discussion_id

  let allResult = await queryResults(dis_id)
  let status = await discussionResultStatus(dis_id)
  let name = await discussionName(dis_id)
  let identity = await discussionIdentity(dis_id)
  let order = await getOrderDiscussionResult(dis_id)

  
  return {
    props: {
      results: allResult,
      status: status,
      name,
      identity,
      order
    }
  }
}

export default Home;
