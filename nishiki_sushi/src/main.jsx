import React from "react";
/* import ReactDOM from "react-dom/client"; */
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import "./style.scss";
import {
  BurgerMenu,
  Footer,
  Home,
  Takeaway,
  Kurv,
  Oplysninger,
  Betaling,
  Bekraeftelse,
  RestaurantPage,
} from "./components";
import { AnimatePresence } from "framer-motion";

/* ReactDOM.createRoot(document.getElementById("root")).render( */
function Main() {
  const location = useLocation();

  return (
    <>
      <main>
        <AnimatePresence exitBeforeEnter>
          <Routes key={location.pathname} location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/takeaway" element={<Takeaway />} />
            <Route path="/restaurant" element={<RestaurantPage />} />
            <Route path="/kurv" element={<Kurv />} />
            <Route path="/oplysninger" element={<Oplysninger />} />
            <Route path="/betaling" element={<Betaling />} />
            <Route path="/bekraeftelse" element={<Bekraeftelse />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
}

export default Main;

/* ); */
