import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
export default function Footer() {
  return (
    <footer>
      <nav className="logo_nav">
        <ul>
          <li>
            <img
              src="../icons/logo.svg"
              alt="The logo icon."
              className="footer_logo"
            />
          </li>
          <li>
            <motion.img
              whileHover={{ scale: 1.1 }}
              whileTap={{
                scale: 0.8,
              }}
              src="../icons/instagram.svg"
              alt="Instagram SoMe icon."
              className="footer_insta"
            />
          </li>
          <li>
            <motion.img
              whileHover={{ scale: 1.1 }}
              whileTap={{
                scale: 0.8,
              }}
              src="../icons/facebook.svg"
              alt="Facebook SoMe icon."
              className="footer_facebook"
            />
          </li>
        </ul>
      </nav>
      <div className="map_container">
        <iframe
          width="500"
          height="500"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=Jernbanegade%209D,%20&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
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
              </p>
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
          </div>
          <nav className="mini_nav">
            <ul>
              <li>
                <NavLink to="/">
                  <a>Events & Catering</a>
                </NavLink>
              </li>
              <li>
                <a href="https://www.findsmiley.dk/517952" target="_blank">
                  Smiley Raport
                </a>
              </li>
              <li>
                <NavLink to="takeaway">
                  <a>TakeAway</a>
                </NavLink>
              </li>
              <li>
                <NavLink to="restaurant">
                  <a>Restaurant</a>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
