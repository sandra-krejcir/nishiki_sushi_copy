import React from "react";
import "./style.scss";
/* import { useState } from "react"; */
import Takeaway from "./components/Takeaway";
import Kurv from "./components/Kurv";
import Oplysninger from "./components/Oplysninger";
import Betaling from "./components/Betaling";
import Bekræftelse from "./components/Bekræftelse";
import LandingPage from "./components/LandingPage";
import RestaurantPage from "./components/RestaurantPage";

export default function App() {
  return (
    <div className="App">
      <RestaurantPage />
      <Takeaway />
      <Kurv />
      <Oplysninger />
      <Betaling />
      <Bekræftelse />
      <LandingPage />
    </div>
  );
}
