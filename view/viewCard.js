import {TuringRadar} from "./radar.js"
import {InvestigationRecap} from "./investigationRecap.js"
import Image from "next/image"

const textColorPicker = (val) => {
  let result = "font-weight-bold text-right "

  if(val < 0){
    if(val < -0.5) {
      result += "text-primary"
    }
  } else {
    if(val > 0.5){
      result += "text-success"
    }
  }

  return result
}

const backgroundColorPicker = (val) => {
  let result = ""

  if(val < 0){
    if(val < -0.5) {
      result += "text-white bg-primary"
    }
  } else {
    if(val > 0.5){
      result += "text-white bg-success"
    }
  }

  return result
}


export const ViewCard = ({results, name, identity}) => {

  let iden = " Human"
  if(identity){
    iden = " AI"
  }

  return (
    <>
      {/* <div class="card"> */}
        {/* <div class="card-body"> */}
          <div class="container Lato pb-4">
            <div className="row justify-content-center align-items-center">

                {/* {
                  identity? 
                  <div className="row justify-content-center align-items-center">
                  <div className="col-6">
                  <div class="Lato h3_turing_game">{`IDENTITY OF ${name.toUpperCase()} `}</div>
                  <div className="text-center"> <text  className="Lato h3_turing_game">{"is ... "}</text>
                  <text className="h2_turing_game_ai">{iden.toUpperCase()}</text></div>
                  </div>
                  <div class="col-4 justify-content-center">
                  <Image src="/AILogo.jpg" width="500" height="500"></Image>
                  </div>
                  </div>:
                  <div className="row justify-content-center align-items-center">
                  <div className="col-6">
                  <div class="Lato h3_turing_game">{`IDENTITY OF ${name.toUpperCase()} `}</div>
                  <div className="text-center"> 
                  <text class="Lato h3_turing_game">{` is ... `}</text><text className="h2_turing_game_human"> {iden.toUpperCase()}</text>
                  </div>
                  </div>
                  <div class="col-4 justify-content-center">
                  <Image src="/humanLogo.jpg" width="500" height="500"></Image>
                  </div>
                  </div>
                  
                } */}
                <div id="card-item-3" className='col-lg-5 col-8 m-3 '>
                    <div className="text-center">
                      <text className="Lato h3_turing_game_size">{name.toUpperCase()} is ... {iden === " AI"?<text className="h3_turing_game_ai">AI</text>:<text className="h3_turing_game_human">HUMAN</text>}</text>
                      {
                        iden === " AI"?
                        <div className="row justify-content-center align-items-center">
                            <div class="justifiy-content-center">
                              <Image src="/AILogo.jpg" width="500" height="500"></Image>
                            </div>
                          </div>:
                          <div className="row justify-content-center align-items-center">
                            <div class="justifiy-content-center">
                              <Image src="/humanLogo.jpg" width="500" height="500"></Image>
                            </div>
                          </div>
                      }
                      </div>
                  </div>
                </div>
            <div class="border rounded">
              <div class="Lato h3_turing_game">Global Score</div>
                <div class="row justify-content-center">
                  <div id="turingLine" class="col-md-6 col-11 my-5">
                    <InvestigationRecap scoreOne={results.totalAverage.toFixed(3)}/>
                    {/* <TuringLine mean={results.totalAverage} name={name}/>  */}
                  </div>
                  <div class="col-md-5 col-10 my-5 align-self-center">
                    <ul className="container list-group">
                      <li class="list-group-item d-flex justify-content-between"><text>Number of Votes : </text><text>{results.totalVotes}</text></li>
                      <li class={"list-group-item d-flex justify-content-between" + backgroundColorPicker(results.totalAverage)}>Global Mean : <text className={"font-weight-bold"}>{results.totalAverage.toFixed(3)}</text></li>
                    </ul>
                  </div>
                </div>
                <hr/>
                <div class="Lato h3_turing_game mx-1">Score per Ability</div>

                <div class="row justify-content-center ">
                  <div class="col-l-6 my-5 mx-3">
                    <TuringRadar means={results} name={name}/>
                  </div>
                   <div class="col-l-6 col-sm-6 col-10 my-5 mx-3 align-self-center">
                      <ul className="list-group">
                        <li class="list-group-item d-flex justify-content-between">S1 - Introduction : <text class={textColorPicker(results.section1Sum)}>{results.section1Sum.toFixed(3)}</text></li>
                        <li class="list-group-item d-flex justify-content-between">S2 - Objects and Physics : <text class={textColorPicker(results.section2Sum)}>{results.section2Sum.toFixed(3)}</text></li>
                        <li class="list-group-item d-flex justify-content-between">S3 - Agent and Goal : <text class={textColorPicker(results.section3Sum)}>{results.section3Sum.toFixed(3)}</text></li>
                        <li class="list-group-item d-flex justify-content-between">S4 - Natural Number : <text class={textColorPicker(results.section4Sum)}>{results.section4Sum.toFixed(3)}</text></li>
                        <li class="list-group-item d-flex justify-content-between">S5 - Geometry : <text class={textColorPicker(results.section5Sum)}>{results.section5Sum.toFixed(3)}</text></li>
                        <li class="list-group-item d-flex justify-content-between">S6 - ShortTermMemory : <text class={textColorPicker(results.section6Sum)}>{results.section6Sum.toFixed(3)}</text></li>
                      </ul>
                    </div>
                  </div>
            </div>
          </div>
        {/* </div> */}
    </>
  )
}
