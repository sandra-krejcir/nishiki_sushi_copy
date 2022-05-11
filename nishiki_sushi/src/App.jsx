import React from "react";
import "./style.scss";
/* import { useState } from "react"; */
import Takeaway from "./components/Takeaway";
import Kurv from "./components/Kurv";
import Oplysninger from "./components/Oplysninger";
import Betaling from "./components/Betaling";
import Bekræftelse from "./components/Bekræftelse";
import LandingPage from "./components/LandingPage";

export default function App() {
  return (
    <div className="App">
      <Takeaway />
      <Kurv />
      <Oplysninger />
      <Betaling />
      <Bekræftelse />
      <LandingPage />
    </div>
  );
}
