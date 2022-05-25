import { NavLink } from "react-router-dom";
import { BiXCircle } from "react-icons/bi";
import { CgMenu } from "react-icons/cg";
import React, { useState } from "react";
import useWindowDimensions from "./screenResize_hook";

export default function BurgerMenu(props) {
  const screenSize = useWindowDimensions();
  /*  console.log(props.page); */
  const [visible, setVisible] = useState(false);
  return (
    <>
      {!visible && (
        <CgMenu
          onClick={() => setVisible(!visible)}
          className="exit_icon hw40_icon"
        ></CgMenu>
      )}
      {screenSize.width > 799 && (
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
      )}
      {visible && (
        <nav className="burgerNav">
          <BiXCircle
            onClick={() => setVisible(!visible)}
            className="exit_icon hw40_icon"
          />
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
                TakeAway
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
          <div className="phone_number">
            <img
              src="../icons/monochromaticLogo.svg"
              className="hw30_icon"
            ></img>
            <a href="tel:45 42 31 47 99">+45 42 31 47 99</a>
          </div>
        </nav>
      )}
    </>
  );
}
