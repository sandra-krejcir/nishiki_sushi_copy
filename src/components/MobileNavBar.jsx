import { NavLink, useLocation } from "react-router-dom";
import React from "react";
import AnimatedPage2 from "./AnimatedPage2";
import { useState, useEffect } from "react";

export default function MobileNavBar(props) {
  const { page, resetPage, setCartContents, cartContents } = props;
  const itemCartCount = cartContents.reduce((a, c) => a + c.qty, 0);

  function resetBasket() {
    localStorage.clear();
    setCartContents([]);
  }

  return (
    <AnimatedPage2>
      <>
        <nav className="mobile_nav">
          <ul>
            <li>
              <NavLink
                className={
                  page === "home"
                    ? "selectedMobile column_flex"
                    : "non-selectedMobile column_flex"
                }
                to="/"
                onClick={() => {
                  if (resetPage === "bekræftelse") {
                    resetBasket();
                  }
                }}
              >
                <img
                  src={
                    page === "home"
                      ? "/icons/homeDarkbrown.svg"
                      : "/icons/homeLightbrown.svg"
                  }
                  alt="Home icon."
                  className="hw30_icon"
                ></img>
                Forside
              </NavLink>
            </li>
            <li>
              <NavLink
                className={
                  page === "restaurant"
                    ? "selectedMobile column_flex"
                    : "non-selectedMobile column_flex"
                }
                to="/restaurant"
                onClick={() => {
                  if (resetPage === "bekræftelse") {
                    resetBasket();
                  }
                }}
              >
                <img
                  src={
                    page === "restaurant"
                      ? "/icons/restaurantDarkbrown.svg"
                      : "/icons/restaurantLightbrown.svg"
                  }
                  alt="Restaurant icon."
                  className="hw30_icon"
                ></img>
                Restaurant
              </NavLink>
            </li>
            <li>
              <NavLink
                className={
                  page === "takeaway"
                    ? "selectedMobile column_flex"
                    : "non-selectedMobile column_flex"
                }
                to="/takeaway"
                onClick={() => {
                  if (resetPage === "bekræftelse") {
                    resetBasket();
                  }
                }}
              >
                <img
                  src={
                    page === "takeaway"
                      ? "/icons/takeawayDarkbrown.svg"
                      : "/icons/takeawayLightbrown.svg"
                  }
                  alt="Takeaway icon."
                  className="hw30_icon"
                ></img>
                Takeaway
              </NavLink>
            </li>

            <li>
              {cartContents !== "[object Object]" && (
                <>
                  {itemCartCount > 0 && (
                    <p
                      className={
                        resetPage === "bekræftelse"
                          ? "hidden"
                          : "in_basket_number_mobilenav"
                      }
                    >
                      {itemCartCount}
                    </p>
                  )}
                </>
              )}
              <NavLink
                className={
                  page === "kurv"
                    ? "selectedMobile column_flex"
                    : "non-selectedMobile column_flex"
                }
                to="/kurv"
              >
                <img
                  src={
                    page === "kurv"
                      ? "/icons/basketDarkbrown.svg"
                      : "/icons/basketLightbrown.svg"
                  }
                  alt="Basket icon."
                  className="hw30_icon"
                ></img>
                Kurv
              </NavLink>
            </li>
          </ul>
        </nav>
      </>
    </AnimatedPage2>
  );
}
