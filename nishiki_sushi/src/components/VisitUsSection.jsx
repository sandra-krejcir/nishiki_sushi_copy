export default function VisitUsSection() {
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
                <p>Mondag</p>
                <p>15:00 - 22:00</p>
              </div>
              <div className="time_row">
                <p>Tirsdag</p>
                <p>15:00 - 22:00</p>
              </div>
              <div className="time_row">
                <p>Onsdag</p>
                <p>15:00 - 22:00</p>
              </div>
              <div className="time_row">
                <p>Torsdag</p>
                <p>15:00 - 22:00</p>
              </div>
              <div className="time_row">
                <p>Fridag</p>
                <p>13:00 - 22:00</p>
              </div>
              <div className="time_row">
                <p>Lørdag</p>
                <p>13:00 - 22:00</p>
              </div>
              <div className="time_row">
                <p>Sondag</p>
                <p>13:00 - 22:00</p>
              </div>
            </div>
          </section>
          <div className="openingTimes_button">
            <a href="">
              <button className="secondaryBtn">Book bord</button>
            </a>
          </div>
        </div>
      </section>
    </section>
  );
}
