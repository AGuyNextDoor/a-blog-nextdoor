import Link from "next/link"
import {navigationButton} from "./navigationButton"

export const NavigationBar = ({name, valueLeft, valueRight}) => {
  return(

    <div className="row my-3">
      {navigationButton(valueLeft, "before")}
        <div className="d-flex btn col-8 test-align align-items-center justify-content-center button-form-font uncursor border" disabled> 
          {name}
        </div>
      {navigationButton(valueRight, "after")}
    </div>
  )
}
