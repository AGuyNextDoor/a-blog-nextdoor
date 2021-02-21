import {TuringRadar} from "./radar.js"
import {TuringLine} from "./line.js"

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
                  <li class="list-group-item">Section 1 : {results.section1_final_mean.toFixed(3)}</li>
                  <li class="list-group-item">Section 2 : {results.section2_final_mean.toFixed(3)}</li>
                  <li class="list-group-item">Section 3 : {results.section3_final_mean.toFixed(3)}</li>
                  <li class="list-group-item">Section 4 : {results.section4_final_mean.toFixed(3)}</li>
                  <li class="list-group-item">Section 5 : {results.section5_final_mean.toFixed(3)}</li>
                  <li class="list-group-item">Section 6 : {results.section6_final_mean.toFixed(3)}</li>
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
                  <li class="list-group-item">Average vote per section : {parseInt(results.global_number_of_votes/6).toFixed(3)}</li>
                  <li class="list-group-item">Global Mean : {mean.toFixed(3)}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      {/* </div> */}
    </>
  )
}