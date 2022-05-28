import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import {
  Footer,
  Home,
  Takeaway,
  Kurv,
  Oplysninger,
  Betaling,
  Bekraeftelse,
  RestaurantPage,
} from "./components";

export default function App() {
  const [cartContents, setCartContents] = useState([]);
  let sushiData;
  async function fetchSushiData() {
    const restSushi = await fetch(
      "https://kea21s-6eb0.restdb.io/rest/nishiki-sushi-products?fetchchildren=true",
      { headers: { "x-apikey": "606d606af55350043100752e" } }
    );
    const dataSushi = await restSushi.json();
    sushiData = dataSushi;
  }
  fetchSushiData();
  if (sushiData) {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/takeaway"
            element={<Takeaway sushiData={sushiData} />}
          />
          <Route path="/restaurant" element={<RestaurantPage />} />
          <Route path="/kurv" element={<Kurv cartContents={cartContents} />} />
          <Route path="/oplysninger" element={<Oplysninger />} />
          <Route path="/betaling" element={<Betaling />} />
          <Route path="/bekraeftelse" element={<Bekraeftelse />} />
        </Routes>
        <Footer />
      </Router>
    );
  }
}
