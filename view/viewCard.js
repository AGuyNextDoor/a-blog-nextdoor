import {TuringRadar} from "./radar.js"
import {TuringLine} from "./line.js"
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

  let iden = "Human"
  if(identity){
    iden = "AI"
  }

  return (
    <>
      {/* <div class="card"> */}
        <div class="card-body">
          <div class="container">
            <div className="row justify-content-center">
              <text class="card-title h2_turing_game">{name} - {iden}</text>
            </div>
          <hr/>
            <div class="row">
              <div class="col-8">
                <div class="row">
                  <div class="col-6">
                    <TuringRadar means={results} name={name}/>
                  </div>
                   <div class="col-6">
                      <ul>
                        <li class="list-group-item">S1 - Intro : <text class={textColorPicker(results.section1Sum)}>{results.section1Sum.toFixed(3)}</text></li>
                        <li class="list-group-item">S2 - Objects and Physics : <text class={textColorPicker(results.section2Sum)}>{results.section2Sum.toFixed(3)}</text></li>
                        <li class="list-group-item">S3 - Agent and Goal : <text class={textColorPicker(results.section3Sum)}>{results.section3Sum.toFixed(3)}</text></li>
                        <li class="list-group-item">S4 - Natural Number : <text class={textColorPicker(results.section4Sum)}>{results.section4Sum.toFixed(3)}</text></li>
                        <li class="list-group-item">S5 - Geometry : <text class={textColorPicker(results.section5Sum)}>{results.section5Sum.toFixed(3)}</text></li>
                        <li class="list-group-item">S6 - ShortTermMemory : <text class={textColorPicker(results.section6Sum)}>{results.section6Sum.toFixed(3)}</text></li>
                      </ul>
                    </div>
                  </div>
                <div class="row">
                <div class="col-6">
                  <TuringLine mean={results.totalAverage} name={name}/> 
                </div>
                <div class="col-6">
                  <ul>
                    <li class="list-group-item">Number of Votes : {results.totalVotes}</li>
                    <li class="list-group-item">Average vote per section : {parseFloat(results.totalVotes/6).toFixed(3)}</li>
                    <li class={"list-group-item " + backgroundColorPicker(results.totalAverage)}>Global Mean : <text className={"font-weight-bold"}>{results.totalAverage.toFixed(3)}</text></li>
                  </ul>
                </div>
                </div>
                </div>
              <div class="col-4">
                {
                  identity? 
                  <Image src="/AILogo.png" width="500" height="500"></Image>:
                  <Image src="/humanLogo.jpg" width="500" height="500"></Image>
                }
              </div>
            </div>
          </div>
        </div>
    </>
  )
}