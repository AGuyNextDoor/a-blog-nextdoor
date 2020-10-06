import React, { useState, useEffect } from "react";

function PropButton(props) {
  return (
    <div class="list-group">
      <button
        type="button"
        class="btn btn-primary list-group-item list-group-item-action"
        onClick={() => props.function(props.value)}
      >
        {props.text}
      </button>
    </div>
  );
}

const Buttons = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <PropButton function={setCount} text="Reset" value={0}></PropButton>
      <PropButton function={setCount} text="Increment" value={count + 1} />
      <a href="">{count}</a>
    </div>
  );
};

export default Buttons;
