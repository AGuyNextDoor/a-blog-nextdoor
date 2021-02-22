import {TuringRadar} from "./radar.js"
import {TuringLine} from "./line.js"

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
  let result = "text-white "

  if(val < 0){
    if(val < -0.5) {
      result += "bg-primary"
    }
  } else {
    if(val > 0.5){
      result += "bg-success"
    }
  }

  return result
}


export const ViewCard = ({results, mean, means, name}) => {

  return (
    <>
      {/* <div class="card"> */}
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <div class="container">
            <div class="row">
              <div class="col">
                <TuringRadar means={means} name={name}/>
              </div>
              <div class="col">
                <ul>
                  <li class="list-group-item text-justify">1 - Intro : <text class={textColorPicker(results.section1_final_mean)}>{results.section1_final_mean.toFixed(3)}</text></li>
                  <li class="list-group-item">2 - Objects and Physics : <text class={textColorPicker(results.section2_final_mean)}>{results.section2_final_mean.toFixed(3)}</text></li>
                  <li class="list-group-item">3 - Agent and Goal : <text class={textColorPicker(results.section3_final_mean)}>{results.section3_final_mean.toFixed(3)}</text></li>
                  <li class="list-group-item">4 - Natural Number : <text class={textColorPicker(results.section4_final_mean)}>{results.section4_final_mean.toFixed(3)}</text></li>
                  <li class="list-group-item">5 - Geometry/Topology : <text class={textColorPicker(results.section5_final_mean)}>{results.section5_final_mean.toFixed(3)}</text></li>
                  <li class="list-group-item">6 - ShortTermMemory : <text class={textColorPicker(results.section6_final_mean)}>{results.section6_final_mean.toFixed(3)}</text></li>
                </ul>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <TuringLine mean={mean} name={name}/> 
              </div>
              <div class="col">
                <ul>
                  <li class="list-group-item">Number of Votes : {results.global_number_of_votes}</li>
                  <li class="list-group-item">Average vote per section : {parseFloat(results.global_number_of_votes/6).toFixed(3)}</li>
                  <li class={"list-group-item " + backgroundColorPicker(mean)}>Global Mean : {mean.toFixed(3)}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      {/* </div> */}
    </>
  )
}