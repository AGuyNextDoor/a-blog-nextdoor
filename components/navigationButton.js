import Link from "next/link"

export const navigationButton = (value, text) => {
  if(value !== "error"){
    return (
      <Link  href={value}>
      <button className="btn btn-secondary button-form-font col text-center acc_button acc_text border cursor"> 
        {text === "before"? "👈" : "👉"}
      </button>
    </Link>
   )
  } else {
    return (
      <Link  href="">
        <button className="btn btn-outline-secondary col button-form-font text-center acc_button border uncursor" disabled> 
          {text === "before"? "👈" : "👉"}
        </button>
      </Link>
    )
  }
}
