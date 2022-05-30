import { NavLink, useLocation } from "react-router-dom";
import React from "react";
import AnimatedPage2 from "./AnimatedPage2";
import { useState, useEffect } from "react";

export default function MobileNavBar(props) {
  const itemCartCount = props.cartContents.reduce((a, c) => a + c.qty, 0);

  return (
    <AnimatedPage2>
      <>
        <nav className="mobile_nav">
          <ul>
            <li>
              <NavLink className={props.page === "home" ? "selectedMobile column_flex" : "non-selectedMobile column_flex"} to="/">
                <img src={props.page === "home" ? "../icons/homeDarkbrown.svg" : "../icons/homeLightbrown.svg"} alt="Home icon." className="hw30_icon"></img>
                Forside
              </NavLink>
            </li>
            <li>
              <NavLink className={props.page === "restaurant" ? "selectedMobile column_flex" : "non-selectedMobile column_flex"} to="/restaurant">
                <img src={props.page === "restaurant" ? "../icons/restaurantDarkbrown.svg" : "../icons/restaurantLightbrown.svg"} alt="Restaurant icon." className="hw30_icon"></img>
                Restaurant
              </NavLink>
            </li>
            <li>
              <NavLink className={props.page === "takeaway" ? "selectedMobile column_flex" : "non-selectedMobile column_flex"} to="/takeaway">
                <img src={props.page === "takeaway" ? "../icons/takeawayDarkbrown.svg" : "../icons/takeawayLightbrown.svg"} alt="Takeaway icon." className="hw30_icon"></img>
                Takeaway
              </NavLink>
            </li>
            <li>
              {props !== "[object Object]" && <>{itemCartCount > 0 && <p className="in_basket_number_mobilenav">{itemCartCount}</p>}</>}
              <NavLink className={props.page === "kurv" ? "selectedMobile column_flex" : "non-selectedMobile column_flex"} to="/kurv">
                <img src={props.page === "kurv" ? "../icons/basketDarkbrown.svg" : "../icons/basketLightbrown.svg"} alt="Basket icon." className="hw30_icon"></img>
                Kurv
              </NavLink>
            </li>
          </ul>
        </nav>
      </>
    </AnimatedPage2>
  );
}
