import { NavLink } from "react-router-dom";
import { BiXCircle } from "react-icons/bi";

export default function BurgerMenu(props) {
  console.log(props.page);
  return (
    <nav className="burgerNav">
      <BiXCircle className="exit_icon hw40_icon" />
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
              src="../icons/restaurantIcon.svg"
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
              src="../icons/takeaway.svg"
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
              src="../icons/basketIcon.svg"
              alt="Basket icon."
              className="hw40_icon"
            ></img>
            Kurv
          </NavLink>
        </li>
      </ul>
      <div className="phone_number">
        <img src="../icons/monochromaticLogo.svg" className="hw30_icon"></img>
        <a href="tel:45 42 31 47 99">+45 42 31 47 99</a>
      </div>
    </nav>
  );
}
