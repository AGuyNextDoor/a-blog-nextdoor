import React, {Component} from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import App from "./App";
import { StaticRouter } from "react-router-dom";
// import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";

export default class extends Component {
  render() {
    return(
      <StaticRouter>
        <App />
      </StaticRouter>
    )
  }
}

// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById("root"),
// );




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
