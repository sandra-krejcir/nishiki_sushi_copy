export default function VisitUsSection() {
  return (
    <>
      <section className="visitUs_section">
        <div className="row_flex">
          <div className="side_space"></div>
          <div className="openingTimes_container">
            <h2>
              Besøg <b>Os</b>
            </h2>
            <div className="offer">
              <h3>Åbningtider</h3>
              <div className="times_container">
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
            </div>
            <div className="openingTimes_button">
              <a href="">Book bord</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
