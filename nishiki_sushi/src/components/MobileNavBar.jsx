import { NavLink } from "react-router-dom";
import React from "react";
import AnimatedPage2 from "./AnimatedPage2";

export default function MobileNavBar(props) {
  return (
    <AnimatedPage2>
      <>
        <nav className="mobile_nav">
          <ul>
            <li>
              <NavLink
                className={
                  props.page === "home"
                    ? "selected column_flex"
                    : "non-selected column_flex"
                }
                to="/"
              >
                <img
                  src={
                    props.page === "home"
                      ? "../icons/homeColored.svg"
                      : "../icons/homeUncolored.svg"
                  }
                  alt="Home icon."
                  className="hw40_icon"
                ></img>
                Forside
              </NavLink>
            </li>
            <li>
              <NavLink
                className={
                  props.page === "restaurant"
                    ? "selected column_flex"
                    : "non-selected column_flex"
                }
                to="/restaurant"
              >
                <img
                  src={
                    props.page === "restaurant"
                      ? "../icons/restaurantColored.svg"
                      : "../icons/restaurantUncolored.svg"
                  }
                  alt="Restaurant icon."
                  className="hw40_icon"
                ></img>
                Restaurant
              </NavLink>
            </li>
            <li>
              <NavLink
                className={
                  props.page === "takeaway"
                    ? "selected column_flex"
                    : "non-selected column_flex"
                }
                to="/takeaway"
              >
                <img
                  src={
                    props.page === "takeaway"
                      ? "../icons/takeawayColored.svg"
                      : "../icons/takeawayUncolored.svg"
                  }
                  alt="Takeaway icon."
                  className="hw40_icon"
                ></img>
                Takeaway
              </NavLink>
            </li>
            <li>
              <NavLink
                className={
                  props.page === "kurv"
                    ? "selected column_flex"
                    : "non-selected column_flex"
                }
                to="/kurv"
              >
                <img
                  src={
                    props.page === "kurv"
                      ? "../icons/basketColored.svg"
                      : "../icons/basketUncolored.svg"
                  }
                  alt="Basket icon."
                  className="hw40_icon"
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
