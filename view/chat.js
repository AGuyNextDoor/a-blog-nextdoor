import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { withTheme } from "@material-ui/core";



const useStyles = makeStyles(theme => ({
  container: {
    bottom: 0,
    ["min-width"]: "30em",
    // ["max-width"]: "70%"
    // position: "fixed" // remove this so we can apply flex design
  },
  bubbleContainer: {
    width: "100%",
    display: "flex" //new added flex so we can put div at left and right side
    //check style.css for left and right classnaeme based on your data
  },
  bubble: {
    ["background-color"]: "white",
    border: "0.5px solid black",
    borderRadius: "10px",
    margin: "5px",
    padding: "10px",
    display: "inline-block",
    // ["max-width"]: "40em"
  }
}));

const ChatLayout = ({ results , sectionDis}) => {
  const classes = useStyles();
  const dummyData = results

  const chatBubbles = sectionDis.discussion.map((obj, i = 0) => (
        <div className={`p-2 ${classes.bubbleContainer} ${obj.direction}`} key={i}>
            <div key={i++} className={classes.bubble}>
              <div className={classes.button}>
                {
                  String(obj.direction) === "left"?
                  <p className="font-weight-bold">{"Candidate:"}</p>:
                  <p className="font-weight-bold">{"Judge:"}</p>
                }
                {obj.message}
              </div>
            </div>
          </div>
          ) 
        );

  return <div className={`bg-light d-flex flex-column border-right rounded-bottom ${classes.container}`}>{chatBubbles}</div>;
};

// export async function getServerSideProps(context){
//   // let client = await initDatabase()
//   // let db = await client.db()

//   let discuss = await getDiscussionsText()

//   let firstEl = discuss.shift()
//   let lastEl = discuss.pop()

//   discuss = shuffleArray(discuss)

//   let finalDiscuss = [firstEl, ...discuss, lastEl]

//   console.log({finalDiscuss});

  
//   return {
//     props: {
//       // results: JSON.parse(JSON.stringify(discussions))
//       results: finalDiscuss,

//     }
//   }
// }

export default ChatLayout;
