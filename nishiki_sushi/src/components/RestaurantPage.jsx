import BookBord from "./BookBord";
import Footer from "./Footer";

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
      <main id="restaurant-page-main">
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
            <div className="restaurant-times-flex">
              <p className="caps">Besøg restauranten</p>
              <h3>Åbningstider</h3>
            </div>

            <div className="seperating-line-opening"></div>

            <div className="restaurant-times-flex">
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
        <section id="adlibitum-section">
          <div id="adlibitum-intro">
            <h2>
              <span className="hideOnMobile">Sushi </span>
              <b>Ad libitum</b>
            </h2>
            <div>
              <p>Betal et engangsbeløb og smag sushi og sticks fra hele vores ala carte menu.</p>
              <p>Du kan bestille så meget du ønsker, og maden serveres altid frisklavet.</p>
              <p>Da vi prøver at bekæmpe madspild, skal der betales 10 kr. pr stk. hvis der efterlades mere end 4 stk.</p>
            </div>
          </div>
          <div id="adlibitum-prices">
            <div>
              <p className="Large-caps-tag">
                Frokost <span>13-16</span>
              </p>
              <div className="flex-horisontal">
                <p>Mandag - Søndag</p>
                <p>199 kr.</p>
              </div>
            </div>
            <div>
              <div>
                <p className="Large-caps-tag">
                  Aften <span>16-22</span>
                </p>
                <div className="flex-horisontal">
                  <p>Mandag - Torsdag</p>
                  <p>229 kr.</p>
                </div>
                <div className="flex-horisontal">
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
          <div id="adlibitum-img-container"></div>
          <div id="adlibitum-line-container">
            <div className="adlibitum-line short"></div>
            <div className="adlibitum-line long"></div>
          </div>
        </section>
        <section id="table-booking-section">
          <div id="bookbord-img-container"></div>
          <div id="bookbord-line-container">
            <div className="adlibitum-line long"></div>
            <div className="adlibitum-line short"></div>
          </div>
          <BookBord />
        </section>
      </main>
      <Footer />
    </>
  );
}
