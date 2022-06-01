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
                <p
                  style={{
                    fontWeight: day == 1 ? 800 : 400,
                    fontSize: day == 1 ? "20px" : "16px",
                  }}
                >
                  Mandag
                </p>
                <p
                  style={{
                    fontWeight: day == 1 ? 800 : 400,
                    fontSize: day == 1 ? "20px" : "16px",
                  }}
                >
                  15:00 - 22:00
                </p>
              </div>
              <div className="time_row">
                <p
                  style={{
                    fontWeight: day == 2 ? 800 : 400,
                    fontSize: day == 2 ? "20px" : "16px",
                  }}
                >
                  Tirsdag
                </p>
                <p
                  style={{
                    fontWeight: day == 2 ? 800 : 400,
                    fontSize: day == 2 ? "20px" : "16px",
                  }}
                >
                  15:00 - 22:00
                </p>
              </div>
              <div className="time_row">
                <p
                  style={{
                    fontWeight: day == 3 ? 800 : 400,
                    fontSize: day == 3 ? "20px" : "16px",
                  }}
                >
                  Onsdag
                </p>
                <p
                  style={{
                    fontWeight: day == 3 ? 800 : 400,
                    fontSize: day == 3 ? "20px" : "16px",
                  }}
                >
                  15:00 - 22:00
                </p>
              </div>
              <div className="time_row">
                <p
                  style={{
                    fontWeight: day == 4 ? 800 : 400,
                    fontSize: day == 4 ? "20px" : "16px",
                  }}
                >
                  Torsdag
                </p>
                <p
                  style={{
                    fontWeight: day == 4 ? 800 : 400,
                    fontSize: day == 4 ? "20px" : "16px",
                  }}
                >
                  15:00 - 22:00
                </p>
              </div>
              <div className="time_row">
                <p
                  style={{
                    fontWeight: day == 5 ? 800 : 400,
                    fontSize: day == 5 ? "20px" : "16px",
                  }}
                >
                  Fridag
                </p>
                <p
                  style={{
                    fontWeight: day == 5 ? 800 : 400,
                    fontSize: day == 5 ? "20px" : "16px",
                  }}
                >
                  13:00 - 22:00
                </p>
              </div>
              <div className="time_row">
                <p
                  style={{
                    fontWeight: day == 6 ? 800 : 400,
                    fontSize: day == 6 ? "20px" : "16px",
                  }}
                >
                  Lørdag
                </p>
                <p
                  style={{
                    fontWeight: day == 6 ? 800 : 400,
                    fontSize: day == 6 ? "20px" : "16px",
                  }}
                >
                  13:00 - 22:00
                </p>
              </div>
              <div className="time_row">
                <p
                  style={{
                    fontWeight: day == 0 ? 800 : 400,
                    fontSize: day == 0 ? "20px" : "16px",
                  }}
                >
                  Søndag
                </p>
                <p
                  style={{
                    fontWeight: day == 0 ? 800 : 400,
                    fontSize: day == 0 ? "20px" : "16px",
                  }}
                >
                  13:00 - 22:00
                </p>
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
