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
      <h2>Welcome to the Turing Judge experiment</h2>
    </div>
  );
}

export default Home;