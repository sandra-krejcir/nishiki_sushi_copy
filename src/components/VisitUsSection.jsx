import { NavLink } from "react-router-dom";

export default function VisitUsSection() {
  const date = new Date();
  const day = date.getDay();
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
              <div className="time_row">
                <p style={{ fontWeight: day == 1 ? 800 : 400 }}>Mandag</p>
                <p style={{ fontWeight: day == 1 ? 800 : 400 }}>15:00 - 22:00</p>
              </div>
              <div className="time_row">
                <p style={{ fontWeight: day == 2 ? 800 : 400 }}>Tirsdag</p>
                <p style={{ fontWeight: day == 2 ? 800 : 400 }}>15:00 - 22:00</p>
              </div>
              <div className="time_row">
                <p style={{ fontWeight: day == 3 ? 800 : 400 }}>Onsdag</p>
                <p style={{ fontWeight: day == 3 ? 800 : 400 }}>15:00 - 22:00</p>
              </div>
              <div className="time_row">
                <p style={{ fontWeight: day == 4 ? 800 : 400 }}>Torsdag</p>
                <p style={{ fontWeight: day == 4 ? 800 : 400 }}>15:00 - 22:00</p>
              </div>
              <div className="time_row">
                <p style={{ fontWeight: day == 5 ? 800 : 400 }}>Fridag</p>
                <p style={{ fontWeight: day == 5 ? 800 : 400 }}>13:00 - 22:00</p>
              </div>
              <div className="time_row">
                <p style={{ fontWeight: day == 6 ? 800 : 400 }}>Lørdag</p>
                <p style={{ fontWeight: day == 6 ? 800 : 400 }}>13:00 - 22:00</p>
              </div>
              <div className="time_row">
                <p style={{ fontWeight: day == 0 ? 800 : 400 }}>Søndag</p>
                <p style={{ fontWeight: day == 0 ? 800 : 400 }}>13:00 - 22:00</p>
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
