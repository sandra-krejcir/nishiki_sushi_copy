import { NavLink } from "react-router-dom";
import { BiXCircle } from "react-icons/bi";
import React, { useState } from "react";

export default function BurgerMenu(props) {
  console.log(props.page);
  const [visible, setVisible] = useState(false);
  return (
    <nav className="burgerNav">
      <button onClick={() => setVisible(!visible)}>
        {visible ? "Hide" : "Show"}
        {">"}
        <BiXCircle className="exit_icon hw40_icon" />
      </button>
      {visible && (
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
              <svg
                src="../icons/homeIcon.svg"
                alt="Home icon."
                className={
                  props.page === "home"
                    ? "selected hw40_icon"
                    : "non-selected hw40_icon"
                }
              ></svg>
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
              <svg
                src="../icons/restaurantIcon.svg"
                alt="Restaurant icon."
                className={
                  props.page === "restaurant"
                    ? "selected hw40_icon"
                    : "non-selected hw40_icon"
                }
              ></svg>
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
                fill={props.page === "kurv" ? "#30404f" : "#c4c4c4"}
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
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="hw40_icon"
              >
                <path
                  d="M36.798 14H26.784L23.16 17.624C22.7154 18.0705 21.6045 18.6655 21.6045 18.6655C21.6045 18.6655 20.3981 19.0297 19.768 19.028C18.484 19.028 17.28 18.528 16.372 17.622C15.9256 17.1776 15.5715 16.6493 15.3302 16.0675C15.0889 15.4857 14.9651 14.8618 14.966 14.232C14.966 14.154 14.986 14.078 14.988 14H3.2C2.88174 14 2.57652 14.1264 2.35147 14.3514C2.12643 14.5765 2 14.8817 2 15.2V20H38V15.2C38 15.0422 37.9689 14.886 37.9085 14.7403C37.848 14.5946 37.7595 14.4622 37.6478 14.3507C37.5362 14.2393 37.4037 14.1509 37.2578 14.0907C37.112 14.0306 36.9558 13.9997 36.798 14ZM21.536 15.998L31.646 5.88798C31.7578 5.77679 31.8467 5.64466 31.9074 5.49912C31.9681 5.35359 31.9996 5.19751 31.9999 5.03981C32.0003 4.88211 31.9696 4.72588 31.9096 4.58006C31.8495 4.43424 31.7613 4.30169 31.65 4.18998L29.81 2.34998C29.5841 2.1255 29.2785 1.99951 28.96 1.99951C28.6415 1.99951 28.3359 2.1255 28.11 2.34998L18 12.462C17.5311 12.9309 17.2677 13.5668 17.2677 14.23C17.2677 14.8931 17.5311 15.5291 18 15.998C18.4689 16.4669 19.1049 16.7303 19.768 16.7303C20.4311 16.7303 21.0671 16.4669 21.536 15.998ZM7.646 34.542C7.84 35.344 8.676 36 9.5 36H30.5C31.324 36 32.16 35.344 32.354 34.542L35.4 22H4.6L7.646 34.542Z"
                  fill={props.page === "kurv" ? "#30404f" : "#c4c4c4"}
                />
                <path
                  d="M22.761 29.749H19.992V32.557H18.887V29.749H16.131V28.748H18.887V25.927H19.992V28.748H22.761V29.749Z"
                  fill="white"
                />
              </svg>
              Kurv
            </NavLink>
          </li>
          <ul>
            <li>
              <NavLink to="/Oplysninger">Oplysninger</NavLink>
            </li>
            <li>
              <NavLink to="/Betaling">Betaling</NavLink>
            </li>
            <li>
              <NavLink to="/Bekraeftelse">Bekræftelse</NavLink>
            </li>
          </ul>
        </ul>
      )}
      <div className="phone_number">
        <img src="../icons/monochromaticLogo.svg" className="hw30_icon"></img>
        <a href="tel:45 42 31 47 99">+45 42 31 47 99</a>
      </div>
    </nav>
  );
}
