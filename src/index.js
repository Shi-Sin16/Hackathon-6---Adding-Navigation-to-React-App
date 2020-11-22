// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./components/App";
// function generateCodeFromObject(obj){
//     //return a code generated string
//    }
   
// module.exports=generateCodeFromObject;


// ReactDOM.render(<App />, document.getElementById("root"));

import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
function generateCodeFromObject(obj) {
  //return a code generated string
}

module.exports = generateCodeFromObject;

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
