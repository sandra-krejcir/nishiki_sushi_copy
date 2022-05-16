import { NavLink } from "react-router-dom";

export default function BurgerMenu() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Forside</NavLink>
        </li>
        <li>
          <NavLink to="/restaurant">Restaurant</NavLink>
        </li>
        <li>
          <NavLink to="/takeaway">TakeAway</NavLink>
        </li>
        <li>
          <NavLink to="/kurv">Kurv</NavLink>
        </li>
      </ul>
    </nav>
  );
}
