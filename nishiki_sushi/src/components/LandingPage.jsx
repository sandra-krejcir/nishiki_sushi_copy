import NewOffersSection from "./NewOffersSection";
import VisitUsSection from "./VisitUsSection";
import CateringAndEventsSection from "./CateringAndEventsSection";

export default function LandingPage() {
  return (
    <>
      <section className="thumbnail_images">
        <a href="" className="thumbnail_img">
          <img src="" alt="Thumbnail image for besøg restaurant."></img>
          <p>Besøg restauranten</p>
        </a>
        <a href="" className="thumbnail_img">
          <img src="" alt="Thumbnail image for ordre takeaway."></img>
          <p>Takeaway</p>
        </a>
      </section>
      <NewOffersSection />
      <VisitUsSection />
      <CateringAndEventsSection />
    </>
  );
}
