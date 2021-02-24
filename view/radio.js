import slugify from "slugify"
import { useForm } from "react-hook-form"

let sectionList = ["Section 1", "Section 2", "Section 3", "Section 4", "Section 5", "Section 6"]

const Section = (sectionNumber) => {
  return (
    <>
    <h3>{sectionNumber}</h3>
      <div class="form-check">
        <input class="form-check-input" type="radio" name={slugify(sectionNumber)} id="def_ai" value="def_ai" required/>
        <label class="form-check-label" for="definitelyAI">
          Definitely AI
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name={slugify(sectionNumber)} id="may_ai" value="may_ai" required/>
        <label class="form-check-label" for="maybeAI">
          Maybe AI
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name={slugify(sectionNumber)} id="cant_tell" value="cant_tell" required/>
        <label class="form-check-label" for="cantTell">
          Can't tell
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name={slugify(sectionNumber)} id="may_hum" value="may_hum" required/>
          <label class="form-check-label" for="maybeHuman">
            Maybe Human
          </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name={slugify(sectionNumber)} id="def_hum" value="def_hum" required/>
        <label class="form-check-label" for="definitelyHuman">
          Definitely Human
        </label>
      </div>
    </>
  )
}

const HookSection = (sectionNumber, register) => {
  return (
    <>
      <h3>{sectionNumber}</h3>
      <div>
      <input type="radio" name={slugify(sectionNumber)} id="def_ai" value="def_ai"/>
      <label class="form-check-label" for="definitelyAI">
        Definitely AI
      </label>
      </div>
      <div>
      <input type="radio" name={slugify(sectionNumber)} id="may_ai" value="may_ai"/>
      <label class="form-check-label" for="maybeAI">
        Maybe AI
      </label>
      </div>
      <div>
      <input type="radio" name={slugify(sectionNumber)} id="cant_tell" value="cant_tell"/>
      <label class="form-check-label" for="cantTell">
        Can't tell
      </label>
      </div>
      <div>
      <input type="radio" name={slugify(sectionNumber)} id="may_hum" value="may_hum"/>
        <label class="form-check-label" for="maybeHuman">
          Maybe Human
        </label>
        </div>
      <div>
      <input type="radio" name={slugify(sectionNumber)} id="def_hum" value="def_hum"/>
      <label class="form-check-label" for="definitelyHuman">
        Definitely Human
      </label>
      </div>
    </>
  )
}



export const Radio = ({discussion_id}) => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);




  // const registerUser = async (event) => {
    
  //   event.preventDefault()

  //   console.log("event :", event.target.radio);

  //   const res = await fetch('/api/submitForm', {
  //     body: JSON.stringify({
  //       name: event.target.name.value
  //     }),
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     method: 'POST'
  //   })

  //   const result = await res.json()
  // }

  return (
    <form method="POST" action="/api/submitForm">
      <div class="form-check">
        <input class="form-check-input" name="discussion_id" type="radio" value={discussion_id} checked required/>
        <label class="form-check-label" for="discussion_id">{discussion_id}</label>
      </div>
        {sectionList.map(Section)}
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
  )
}