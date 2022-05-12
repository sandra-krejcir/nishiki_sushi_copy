export default function RestaurantPage() {
  return (
    <>
      <header>
        <div className="hero-container">
          <img className="hero-image" src="../img/restaurant_header-image.webp" alt="image of Nishiki Sushis interior in Frederikssund" />
        </div>
        <div>
          <img src="" alt="" />
          <p></p>
        </div>
      </header>
      <main>
        <div id="restaurant-grid-intro">
          <section id="restaurant-intro-section">
            <h1>Hos Nishiki Sushi</h1>
            <div>
              <p>Besøg os i hjertet af Frederikssund. Vi sætter en ære i altid at tilbyde friske råvarer og lækre specialiteter i top kvalitet til gode priser.</p>
              <p>Prøv vores populære ad libitum menu fra kun 199kr eller bestil ala carte fra vores mange sushi varianter, lækre forreter eller sticks.</p>
            </div>
            <div className="restaurant-flex-buttons">
              <button className="primaryBtn">Ad Libitum</button>
              <button className="secondaryBtn">Book Bord</button>
            </div>
          </section>

          <section id="restaurant-openinghours-section">
            <div class="restaurant-times-flex">
              <p className="caps">Besøg restauranten</p>
              <h3>Åbningstider</h3>
            </div>

            <div className="seperating-line"></div>

            <div class="restaurant-times-flex">
              <div className="flex-horisontal">
                <p>Mandag - Torsdag</p>
                <p>15:00 - 22:00</p>
              </div>
              <div className="flex-horisontal">
                <p>Fredag - Søndag</p>
                <p>13:00 - 22:00</p>
              </div>
            </div>
          </section>
        </div>
        <section>
          <div>
            <h2>Ad libitum</h2>
            <p>Betal et engangsbeløb og smag sushi og sticks fra hele vores ala carte menu.</p>
            <p>Du kan bestille så meget du ønsker, og maden serveres altid frisklavet.</p>
            <p>Da vi prøver at bekæmpe madspild, skal der betales 10 kr. pr stk. hvis der efterlades mere end 4 stk.</p>
          </div>
          <div>
            <div>
              <p>
                Frokost <span>13-16</span>
              </p>
              <div>
                <p>Mandag - Søndag</p>
                <p>199 kr.</p>
              </div>
            </div>
            <div>
              <div>
                <p>
                  Aften <span>16-22</span>
                </p>
                <div>
                  <p>Mandag - Torsdag</p>
                  <p>229 kr.</p>
                </div>
                <div>
                  <p>Fredag - Søndag</p>
                  <p>249 kr.</p>
                </div>
              </div>
            </div>
            <div>
              <p>Børn under 10 år spiser til halv pris</p>
              <p>Børn under 3 år spiser gratis</p>
            </div>
          </div>
          <img src="" alt="" />
        </section>
      </main>
    </>
  );
}
