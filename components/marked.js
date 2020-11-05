import React from "react";
import marked from "marked";

const Marked = (props) => {
  return marked(props.text);
};

export default Marked;
