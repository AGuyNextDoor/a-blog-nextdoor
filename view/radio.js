import slugify from "slugify"

const Section = ({section}) => {
  return (
    <div className="card p-2 shadow border-secondary">
      <div className="card-header acc_button">
        <h4 class="card-title text-white">Until now, what do you think? 🕵️</h4>
      </div>
      <div className="card-body">

      <ul className="list-group">
        <li class="list-group-item">

        <div class="form-check">
          <input class="form-check-input cursor" type="radio" name={slugify(section)} id="def_ai" value="-3" required/>
          <label class="form-check-label" for="definitelyAI">
            ??? is definitely an AI
          </label>
        </div>
        </li>
        <li class="list-group-item">

        <div class="form-check">
          <input class="form-check-input cursor" type="radio" name={slugify(section)} id="may_ai" value="-1" required/>
          <label class="form-check-label" for="maybeAI">
            ??? is maybe an AI
          </label>
        </div>
        </li>
        <li class="list-group-item">
        <div class="form-check">
          <input class="form-check-input cursor" type="radio" name={slugify(section)} id="cant_tell" value="0" required/>
          <label class="form-check-label" for="cantTell">
            I can't tell
          </label>
        </div>
        </li>
          <li class="list-group-item">

        <div class="form-check">
          <input class="form-check-input cursor" type="radio" name={slugify(section)} id="may_hum" value="1" required/>
            <label class="form-check-label" for="maybeHuman">
              ??? is maybe a Human
            </label>
        </div>
          </li>
          <li class="list-group-item">

        <div class="form-check">
          <input class="form-check-input cursor" type="radio" name={slugify(section)} id="def_hum" value="3" required/>
          <label class="form-check-label" for="definitelyHuman">
            ??? is definitely a Human
          </label>
        </div>
          </li>
      </ul>
      </div>
    </div>
  )
}

export default Section