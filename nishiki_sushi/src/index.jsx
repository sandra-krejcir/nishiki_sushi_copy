import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./main";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Main />
    </Router>
  </React.StrictMode>
);
