import React, { useEffect }  from "react";
import Router from "next/router"
import  {discussionResultStatus, discussionName, discussionIdentity, getOrderDiscussion} from "../../../controller/data-utils.js";
import {ViewCard} from "../../../view/viewCard.js"
import {queryResults} from "../../../controller/data-viz.js"
import Link from "next/link"

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

const navigationButton = (value, text) => {
  if(value !== "error"){
    return (
      <Link  href={value}>
      <button className="btn btn-secondary button-form-font col text-center border cursor"> 
        {text === "before"? "⬅️" : "➡️"}
      </button>
    </Link>
   )
  } else {
    return (
      <Link  href="">
        <button className="btn btn-outline-secondary col button-form-font text-center border uncursor" disabled> 
          {text === "before"? "⬅️" : "➡️"}
        </button>
      </Link>
    )
  }
}

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
    <div className="margin_sidebar">
       <div className="container">
            <div className="row my-3">
              {navigationButton(order[0], "before")}
              <div className="btn col-8 test-align text-center button-form-font uncursor border" disabled> 
                {name}
              </div>
              {navigationButton(order[2], "after")}
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
  let order = await getOrderDiscussion(dis_id)

  
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
