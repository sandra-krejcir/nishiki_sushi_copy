import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
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

let sushiData;
await fetchSushiData();
async function fetchSushiData() {
  const restSushi = await fetch(
    "https://kea21s-6eb0.restdb.io/rest/nishiki-sushi-products?fetchchildren=true",
    { headers: { "x-apikey": "606d606af55350043100752e" } }
  );
  const dataSushi = await restSushi.json();
  sushiData = dataSushi;
  /* console.log(sushiData); */
}

console.log(sushiData);

export default function App() {
  const [cartContents, setCartContents] = useState([]);
  const onAdd = (product) => {
    const cartIndex = cartContents.findIndex((ele) => ele.id === product.id);
    if (cartIndex === -1) {
      product.qty = 1;
      const newArr = [...cartContents];
      newArr.push(product);
      console.log(cartIndex);
      setCartContents([...newArr]);
      console.log(cartContents);
    } else {
      const newArr = [...cartContents];
      newArr[cartIndex].qty += 1;
      setCartContents([...newArr]);
    }
  };

  const onRemove = (product) => {
    const cartItem = [...cartContents].find((ele) => ele.id === product.id);
    if (cartItem.qty === 1) {
      const cartIndex = cartContents.findIndex((ele) => ele.id === product.id);
      const newArr = [...cartContents];
      newArr[cartIndex].qty = 0;
      newArr.splice(cartIndex, 1);
      setCartContents([...newArr]);
      console.log(cartContents);
    } else {
      const cartIndex = cartContents.findIndex((ele) => ele.id === product.id);
      const newArr = [...cartContents];
      newArr[cartIndex].qty--;
      setCartContents([...newArr]);
    }
  };

  if (sushiData) {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/takeaway"
            element={
              <Takeaway
                sushiData={sushiData}
                onAdd={onAdd}
                cartContents={cartContents}
                onRemove={onRemove}
              />
            }
          />
          <Route path="/restaurant" element={<RestaurantPage />} />
          <Route
            path="/kurv"
            element={
              <Kurv
                cartContents={cartContents}
                onAdd={onAdd}
                onRemove={onRemove}
              />
            }
          />
          <Route path="/oplysninger" element={<Oplysninger />} />
          <Route path="/betaling" element={<Betaling />} />
          <Route path="/bekraeftelse" element={<Bekraeftelse />} />
        </Routes>
        <Footer />
      </Router>
    );
  }
}
