import { NavLink } from "react-router-dom";
import React from "react";

export default function MobileNavBar(props) {
  return (
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
                src="../icons/homeIcon.svg"
                alt="Home icon."
                fill={props.page === "home" ? "#30404f" : "#c4c4c4"}
                className="hw30_icon"
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
                src="../icons/restaurantIcon.svg"
                alt="Restaurant icon."
                fill={props.page === "restaurant" ? "#30404f" : "#c4c4c4"}
                className="hw30_icon"
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
                src="../icons/takeaway.svg"
                alt="Takeaway icon."
                fill={props.page === "takeaway" ? "#30404f" : "#c4c4c4"}
                className="hw30_icon"
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
                src="../icons/basketIcon.svg"
                alt="Kurv icon."
                fill={props.page === "kurv" ? "#30404f" : "#c4c4c4"}
                className="hw30_icon"
              ></img>
              Kurv
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
