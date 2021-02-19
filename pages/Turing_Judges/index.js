import React from "react";
import { initDatabase } from "../../controller/data-utils.js";

// initDatabase().then( db => {
//   console.log({db});
// })

// db.collection("users")
//   .findOne({ firstName: "Frida" })
//   .then((doc) => {
//     console.log(doc);
//     client.close();
//   });

const Home = ({ db }) => (
  <div>
    <h2>Home</h2>
    plop
    <div id="target"></div>
  </div>
);

export async function getServerSideProps(context){
  let client = await initDatabase()
  let db = client.db()

  console.log(db);

  let result = await db.collection("votes").findOne({id: "1"})

  console.log(result);
  return {
    props: {
      result
    }
  }
}

export default Home;
