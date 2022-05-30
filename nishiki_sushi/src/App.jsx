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

localStorage.clear();

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
  const [cartcontents, setCartcontents] = useState([]);

  useEffect(() => {
    if (!cartcontents.current) {
      localStorage.setItem("Orders", JSON.stringify(cartcontents));
    }
  }, [cartcontents]);

  const onAdd = (product) => {
    const cartIndex = cartcontents.findIndex((ele) => ele.id === product.id);
    if (cartIndex === -1) {
      product.qty = 1;
      const newArr = [...cartcontents];
      newArr.push(product);
      console.log(cartIndex);
      setCartcontents([...newArr]);
      console.log(cartcontents);
    } else {
      const newArr = [...cartcontents];
      newArr[cartIndex].qty += 1;
      setCartcontents([...newArr]);
    }
  };

  const onRemove = (product) => {
    const cartItem = [...cartcontents].find((ele) => ele.id === product.id);
    if (cartItem.qty === 1) {
      const cartIndex = cartcontents.findIndex((ele) => ele.id === product.id);
      const newArr = [...cartcontents];
      newArr[cartIndex].qty = 0;
      newArr.splice(cartIndex, 1);
      setCartcontents([...newArr]);
      console.log(cartcontents);
    } else {
      const cartIndex = cartcontents.findIndex((ele) => ele.id === product.id);
      const newArr = [...cartcontents];
      newArr[cartIndex].qty--;
      setCartcontents([...newArr]);
    }
  };

  if (sushiData) {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home cartcontents={cartcontents} />} />
          <Route
            path="/takeaway"
            element={
              <Takeaway
                sushiData={sushiData}
                onAdd={onAdd}
                cartcontents={cartcontents}
                onRemove={onRemove}
              />
            }
          />
          <Route
            path="/restaurant"
            element={<RestaurantPage cartcontents={cartcontents} />}
          />
          <Route
            path="/kurv"
            element={
              <Kurv
                cartcontents={cartcontents}
                onAdd={onAdd}
                onRemove={onRemove}
              />
            }
          />
          <Route
            path="/oplysninger"
            element={<Oplysninger cartcontents={cartcontents} />}
          />
          <Route
            path="/betaling"
            element={<Betaling cartcontents={cartcontents} />}
          />
          <Route
            path="/bekraeftelse"
            element={
              <Bekraeftelse
                cartcontents={cartcontents}
                setCartcontents={setCartcontents}
              />
            }
          />
        </Routes>
        <Footer />
      </Router>
    );
  }
}
