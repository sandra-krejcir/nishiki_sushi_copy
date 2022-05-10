export default function Footer() {
  return (
    <footer>
      <nav>
        <ul>
          <li>logotag goes here</li>
          <li>Some icon #1 goes here</li>
          <li>Some icon #2 goes here</li>
        </ul>
      </nav>
      <div>
        <iframe width="500" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=Jernbanegade%209D,%20&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
        <div>
          <h4>Nishiki Sushi</h4>
          <p>
            Jernbanegade 9D,<br></br>
            3600 Frederikssund
          </p>
        </div>
        <div>
          <p>Åbningstider</p>
          <div>
            <p>Mandag - Torsdag</p> <p>15 - 22</p>
          </div>
          <div>
            <p>Fredag - Søndag</p> <p>13 - 22</p>
          </div>
        </div>
        <nav>
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
    </footer>
  );
}
