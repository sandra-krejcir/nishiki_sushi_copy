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
    </nav>
  );
}
