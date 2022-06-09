import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
export default function Footer() {
  return (
    <footer>
      <div id="footerContent">
        <nav className="logo_nav">
          <ul>
            <li>
              <NavLink to="/">
                <img
                  src="../icons/logo.svg"
                  alt="The logo icon."
                  className="footer_logo"
                />
              </NavLink>
            </li>

            <li>
              <a href="https://www.instagram.com/" target="_blank">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  whileTap={{
                    scale: 0.8,
                  }}
                  src="../icons/instagram.svg"
                  alt="Instagram SoMe icon."
                  className="footer_insta"
                />
              </a>
            </li>

            <li>
              <a
                href="https://www.facebook.com/changshengfrederikssund"
                target="_blank"
              >
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  whileTap={{
                    scale: 0.8,
                  }}
                  src="../icons/facebook.svg"
                  alt="Facebook SoMe icon."
                  className="footer_facebook"
                />
              </a>
            </li>
          </ul>
        </nav>
        <div className="map_container">
          <iframe
            id="gmap_canvas"
            alt="GoogleMaps"
            title="GoogleMaps"
            src="https://maps.google.com/maps?q=Jernbanegade%209D,%20&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
          ></iframe>
          <div className="contact_info">
            <div>
              <div>
                <h4>
                  Nishiki <b>Sushi</b>
                </h4>
                <p>
                  Jernbanegade 9D,<br></br>
                  3600 Frederikssund
                  <br></br>
                  tlf: 42 31 47 99
                  <br></br>
                  mail: info@nishikisushi.dk
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_times">
          <p>
            <b>Åbningstider</b>
          </p>
          <div>
            <p>Mandag - Torsdag</p> <p>15 - 22</p>
          </div>
          <div>
            <p>Fredag - Søndag</p> <p>13 - 22</p>
          </div>
        </div>
        <nav className="mini_nav">
          <ul>
            <li>
              <NavLink to="/">
                <p className="remove_1rem">Events & Catering</p>
              </NavLink>
            </li>
            <li>
              <a
                style={{ fontSize: "1.1rem" }}
                className="remove_1rem"
                href="https://www.findsmiley.dk/517952"
                target="_blank"
              >
                Smiley Raport
              </a>
            </li>
            <li>
              <NavLink to="takeaway">
                <p className="remove_1rem">TakeAway</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="restaurant">
                <p className="remove_1rem">Restaurant</p>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
