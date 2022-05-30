import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function VisitUsSection() {
  const today = new Date().getDay();
  console.log(today);

  const [day, setDay] = useState(today);

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
              <div className={`1 ${day ? "bold" : ""} time_row`}>
                <p>Mandag</p>
                <p>15:00 - 22:00</p>
              </div>
              <div className={`2 ${day ? "bold" : ""} time_row`}>
                <p>Tirsdag</p>
                <p>15:00 - 22:00</p>
              </div>
              <div className="time_row 3">
                <p>Onsdag</p>
                <p>15:00 - 22:00</p>
              </div>
              <div className="time_row 4">
                <p>Torsdag</p>
                <p>15:00 - 22:00</p>
              </div>
              <div className="time_row 5">
                <p>Fridag</p>
                <p>13:00 - 22:00</p>
              </div>
              <div className="time_row 6">
                <p>Lørdag</p>
                <p>13:00 - 22:00</p>
              </div>
              <div className="time_row 7">
                <p>Søndag</p>
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
