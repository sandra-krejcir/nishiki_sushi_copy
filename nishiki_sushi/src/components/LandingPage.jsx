import NewOffersSection from "./NewOffersSection";
import VisitUsSection from "./VisitUsSection";
import CateringAndEventsSection from "./CateringAndEventsSection";

export default function LandingPage() {
  return (
    <>
      <section className="thumbnail_images">
        <a href="" className="thumbnail_img restaurant_thumbnail">
          <h4 className="restaurant_title">
            <b>BESØG RESTAURANTEN</b>
          </h4>
        </a>
        <a href="" className="thumbnail_img takeaway_thumbnail">
          <h4 className="takeaway_title">
            <b>TAKEAWAY</b>
          </h4>
        </a>
      </section>
      <NewOffersSection />
      <VisitUsSection />
      <CateringAndEventsSection />
    </>
  );
}
