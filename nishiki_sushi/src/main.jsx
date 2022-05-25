import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./style.scss";
import { BurgerMenu, Footer, Home, Takeaway, Kurv, Oplysninger, Betaling, Bekraeftelse, RestaurantPage } from "./components";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/takeaway" element={<Takeaway />} />
        <Route path="/restaurant" element={<RestaurantPage />} />
        <Route path="/kurv" element={<Kurv />} />
        <Route path="/oplysninger" element={<Oplysninger />} />
        <Route path="/betaling" element={<Betaling />} />
        <Route path="/bekraeftelse" element={<Bekraeftelse />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
