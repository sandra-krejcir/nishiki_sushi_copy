import React from "react";
/* import { useState } from "react"; */
import Takeaway from "./Takeaway";
import Kurv from "./Kurv";
import Oplysninger from "./oplysninger";
import Betaling from "./Betaling";
import Bekræftelse from "./Bekræftelse";
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
