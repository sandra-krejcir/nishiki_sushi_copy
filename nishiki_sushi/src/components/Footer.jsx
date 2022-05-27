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
            <img
              src="../icons/instagram.svg"
              alt="Instagram SoMe icon."
              className="footer_insta"
            />
          </li>
          <li>
            <img
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
                <a href="">Events & Catering</a>
              </li>
              <li>
                <a href="">Smiley Raport</a>
              </li>
              <li>
                <a href="">TakeAway</a>
              </li>
              <li>
                <a href="">Restaurant</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
