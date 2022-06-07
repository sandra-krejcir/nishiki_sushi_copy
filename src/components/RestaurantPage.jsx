import BookBord from "./BookBord";
import Footer from "./Footer";
import useWindowDimensions from "./screenResize_hook";
import BurgerMenu from "./BurgerMenu";
import MobileNav from "./MobileNavBar";
import { NavLink } from "react-router-dom";
import AnimatedPage from "./AnimatedPage";

export default function RestaurantPage(props) {
  const screenSize = useWindowDimensions();

  return (
    <AnimatedPage>
      <>
        <header>
          {screenSize.width > 799 && <BurgerMenu cartContents={props.cartContents} page={"restaurant"} />}
          {screenSize.width < 799 && <MobileNav cartContents={props.cartContents} page={"restaurant"} />}
          <NavLink to="/">
            <img src="../icons/logo.svg" alt="The logo icon." className="header_logo" />
          </NavLink>
          <div className="hero-container">
            <div className="hero-shadow"></div>
          </div>
          <div>
            <img src="" alt="" />
            <p></p>
          </div>
        </header>
        <main id="restaurant-page-main">
          <div id="restaurant-grid-intro">
            <AnimatedPage>
              <section id="restaurant-intro-section">
                <h1>Hos Nishiki Sushi</h1>
                <div>
                  <p>Besøg os i hjertet af Frederikssund. Vi sætter en ære i altid at tilbyde friske råvarer og lækre specialiteter i top kvalitet til gode priser.</p>
                  <p>Prøv vores populære ad libitum menu fra kun 199kr eller bestil ala carte fra vores mange sushi varianter, lækre forreter eller sticks.</p>
                </div>
                <div className="restaurant-flex-buttons">
                  <a href="#adlibitum-intro">
                    <button className="primaryBtn">Ad Libitum</button>
                  </a>
                  <a href="#table-booking-section">
                    <button className="secondaryBtn">Book Bord</button>
                  </a>
                </div>
              </section>
            </AnimatedPage>
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
          <AnimatedPage>
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
          </AnimatedPage>

          <section id="table-booking-section" style={{ marginBottom: "150px" }}>
            <div id="bookbord-img-container"></div>
            <div id="bookbord-line-container">
              <div className="adlibitum-line long"></div>
              <div className="adlibitum-line short"></div>
            </div>
            <BookBord />
          </section>
        </main>
      </>
    </AnimatedPage>
  );
}
