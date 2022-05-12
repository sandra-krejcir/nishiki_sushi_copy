export default function LandingPage() {
  return (
    <>
      <section className="newOffers_section">
        <div className="row_flex">
          <div className="side_ornament"></div>
          <div className="offers_container">
            <h2>
              Nye <b>Tilbud</b>
            </h2>
            <div className="offer">
              <img
                src="../img/offer1.webp"
                alt="Image of a new sushi/ menu offer."
              ></img>
              <p>
                Den nye sprøde dobbelte tempura maki-rulle med avocado- og
                agurkeskiver og sojaglaseret spicy tun tekka maki er en perfekt
                kombination af friskhed med et lidt pikant twist.
              </p>
            </div>
            <div className="offer">
              <img
                src="../img/offer2.webp"
                alt="Image of a new sushi/ menu offer."
              ></img>
              <p>
                Prøv vores friske, forårsinspirerede maki-rulle - blanding af
                laks og torskefisk med agurker og forårsløg, pakket ind i stegt
                Nori, gør denne rulle til en perfekt let, men knasende snack.
              </p>
            </div>
          </div>
        </div>
        <div className="newOffers_buttons">
          <a href="">
            <button className="primaryBtn">Bestil nu</button>
          </a>
          <a href="">
            <button className="secondaryBtn">Book bord</button>
          </a>
        </div>
      </section>
    </>
  );
}
