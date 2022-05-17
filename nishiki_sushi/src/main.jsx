import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./style.scss";
import { Footer, Home, Takeaway, Kurv, Restaurant } from "./components";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/takeaway" element={<Takeaway />} />
        <Route path="/kurv" element={<Kurv />} />
        <Route path="/restaurant" element={<Restaurant />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
