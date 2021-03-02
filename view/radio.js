import slugify from "slugify"

const Section = ({section}) => {
  return (
    <>
    <h3>Up until now, what's your judgement?</h3>
      <div class="form-check">
        <input class="form-check-input" type="radio" name={slugify(section)} id="def_ai" value="def_ai" required/>
        <label class="form-check-label" for="definitelyAI">
          Definitely AI
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name={slugify(section)} id="may_ai" value="may_ai" required/>
        <label class="form-check-label" for="maybeAI">
          Maybe AI
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name={slugify(section)} id="cant_tell" value="cant_tell" required/>
        <label class="form-check-label" for="cantTell">
          Can't tell
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name={slugify(section)} id="may_hum" value="may_hum" required/>
          <label class="form-check-label" for="maybeHuman">
            Maybe Human
          </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name={slugify(section)} id="def_hum" value="def_hum" required/>
        <label class="form-check-label" for="definitelyHuman">
          Definitely Human
        </label>
      </div>
    </>
  )
}

export default Section