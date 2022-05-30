import { NavLink } from "react-router-dom";

export default function VisitUsSection() {
  const today = new Date().getDay();
  console.log("weekday" + today);

  return (
    <section className="side_row">
      <div className="side_picture"></div>
      <section className="visitUs_section">
        <h2 className="visitUs_title">
          Besøg <b>Os</b>
        </h2>
        <div className="openingTimes_container">
          <section className="times_container">
            <div className="times">
              <h3>Åbningtider</h3>
              <div className="line"></div>
              <div className="time_row weekday1">
                <p>Mondag</p>
                <p>15:00 - 22:00</p>
              </div>
              <div className="time_row weekday2">
                <p>Tirsdag</p>
                <p>15:00 - 22:00</p>
              </div>
              <div className="time_row weekday3">
                <p>Onsdag</p>
                <p>15:00 - 22:00</p>
              </div>
              <div className="time_row weekday4">
                <p>Torsdag</p>
                <p>15:00 - 22:00</p>
              </div>
              <div className="time_row weekday5">
                <p>Fridag</p>
                <p>13:00 - 22:00</p>
              </div>
              <div className="time_row weekday6">
                <p>Lørdag</p>
                <p>13:00 - 22:00</p>
              </div>
              <div className="time_row weekday7">
                <p>Sondag</p>
                <p>13:00 - 22:00</p>
              </div>
            </div>
          </section>
          <div className="openingTimes_button">
            <NavLink to="/restaurant">
              <button className="secondaryBtn">Book bord</button>
            </NavLink>
          </div>
        </div>
      </section>
    </section>
  );
}
