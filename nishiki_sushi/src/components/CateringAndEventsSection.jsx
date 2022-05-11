import CateringForm from "./CateringForm";

export default function CateringAndEventsSection() {
  return (
    <>
      <section className="catering_event_section">
        <div className="event_container">
          <img src="" alt="Image for events in the restaurant."></img>
          <div className="event_text">
            <h2>
              Catering & <b>Events</b>
            </h2>
            <p>
              Book et event hos os og del de vigtige øjeblikke med dine nærmeste
              i vores hyggelige omgivelser. Vi sørger for det praktiske så du
              kan fokusere på det mest vigtige - dine gæster.
            </p>
          </div>
        </div>
        <div className="catering_container">
          <img src="" alt="Image for the catering option."></img>
          <p>
            Lad os hjælpe med at gøre din festlige lejlighed speciel med vores
            catering service. Vi leverer frisklavet sushi til din fest,
            konference, reception, eller hvad du lige har brug for.
          </p>
        </div>
        <div className="form_section">
          <CateringForm />
        </div>
      </section>
    </>
  );
}
