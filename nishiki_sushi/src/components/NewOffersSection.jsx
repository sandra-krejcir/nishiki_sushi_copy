import AnimatedPage from "./AnimatedPage";
export default function LandingPage() {
  return (
    <AnimatedPage>
      <>
        <h2 className="offers_title">
          Nye <b>Tilbud</b>
        </h2>
        <section className="newOffers_section">
          <div className="side_ornament"></div>
          <div className="offers_section">
            <div className="row_flex">
              <div className="offers_container">
                <div className="offer disappearing_offer">
                  <div className="third_offer"></div>
                  <p>
                    Den nye sprøde dobbelte tempura maki-rulle med avocado- og
                    agurkeskiver og sojaglaseret spicy tun tekka maki er en
                    perfekt kombination af friskhed med et lidt pikant twist.
                  </p>
                </div>
                <div className="offer">
                  <div className="first_offer"></div>
                  <p>
                    Den nye sprøde dobbelte tempura maki-rulle med avocado- og
                    agurkeskiver og sojaglaseret spicy tun tekka maki er en
                    perfekt kombination af friskhed med et lidt pikant twist.
                  </p>
                </div>
                <div className="offer">
                  <div className="second_offer"></div>
                  <p>
                    Prøv vores friske, forårsinspirerede maki-rulle - blanding
                    af laks og torskefisk med agurker og forårsløg, pakket ind i
                    stegt Nori, gør denne rulle til en perfekt let, men knasende
                    snack.
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
          </div>
        </section>
      </>
    </AnimatedPage>
  );
}
