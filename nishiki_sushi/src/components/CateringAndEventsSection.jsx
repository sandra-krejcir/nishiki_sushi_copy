import CateringForm from "./CateringForm";
import AnimatedPage from "./AnimatedPage";
export default function CateringAndEventsSection() {
  return (
    <AnimatedPage>
      <section className="events_catering" id="cateringAndEvents">
        <h2 className="catering_title">
          Catering & <b>Events</b>
        </h2>
        <section className="catering_event_section">
          <div className="event_container">
            <img
              src="../img/visit1.webp"
              alt="Image for events in the restaurant."
            ></img>
            <div>
              <p>
                Book et event hos os og del de vigtige øjeblikke med dine
                nærmeste i vores hyggelige omgivelser. Vi sørger for det
                praktiske så du kan fokusere på det mest vigtige - dine gæster.
              </p>
            </div>
          </div>
          <div className="catering_container">
            <p>
              Lad os hjælpe med at gøre din festlige lejlighed speciel med vores
              catering service. Vi leverer frisklavet sushi til din fest,
              konference, reception, eller hvad du lige har brug for.
            </p>
            <p className="disappear_para">
              Vi hjælper dig med at vurdere hvilke mængder og varianter passer
              til dit og dine gæsters behov, og hjælper med at sætte maden op i
              et lækkert display så det er klar til at blive nydt når gæsterne
              ankommer.
            </p>
          </div>
        </section>
        <CateringForm />
      </section>
    </AnimatedPage>
  );
}
