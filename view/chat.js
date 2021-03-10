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
  bubbleLeft: {
    ["background-color"]: "white",
    border: "0.5px solid black",
    borderRadius: "10px 10px 10px 0px",
    margin: "5px",
    padding: "10px",
    display: "inline-block",
    // ["max-width"]: "40em"
  },
  bubbleRight: {
    ["background-color"]: "#ea907a",
    border: "0.5px solid black",
    borderRadius: "10px 10px 0px 10px",
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
          {
            String(obj.direction) === "left"?
            <div key={i++} className={classes.bubbleLeft}>
              <div className={classes.button}>
                <p className="font-weight-bold">{"??? 🥸 :"}</p>
                {obj.message}
              </div>
            </div>:
            <div key={i++} className={classes.bubbleRight}>
              <div className={"text-white "+classes.button}>
                <p className="font-italic">{"Investigator 🔍 :"}</p>
                {obj.message}
              </div>
            </div>
          }
          </div>
          ) 
        );

  return (
    <div className={`bg-light d-flex flex-column border-right rounded-bottom ${classes.container}`}>
      {
        parseInt(sectionDis.section) === 0?
        <text className="text-center font-italic font-weight-light">Beginning of discussion</text>:
        <></>
      }
      {chatBubbles}
      {
        parseInt(sectionDis.section) === 5?
        <text className="text-center font-italic font-weight-light">End of discussion</text>:
        <></>
      }
    </div>
  )
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
