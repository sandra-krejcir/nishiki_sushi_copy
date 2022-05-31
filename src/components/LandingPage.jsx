import NewOffersSection from "./NewOffersSection";
import VisitUsSection from "./VisitUsSection";
import CateringAndEventsSection from "./CateringAndEventsSection";
import BurgerMenu from "./BurgerMenu";
import MobileNav from "./MobileNavBar";
import useWindowDimensions from "./screenResize_hook";
import { NavLink } from "react-router-dom";
import AnimatedPage from "./AnimatedPage";
import { motion } from "framer-motion";

export default function LandingPage(props) {
  const screenSize = useWindowDimensions();

  return (
    <>
      <AnimatedPage>
        {screenSize.width > 799 && (
          <BurgerMenu cartContents={props.cartContents} page={"home"} />
        )}
        {screenSize.width < 799 && (
          <MobileNav cartContents={props.cartContents} page={"home"} />
        )}
        <section className="thumbnail_images">
          <img
            style={{ zIndex: "99" }}
            src="../icons/logo.svg"
            alt="The logo icon."
            className="header_logo header_logo_landing_page"
          />

          <motion.div
            className="thumbnail_img restaurant_thumbnail"
            whileHover={{ scale: 1.03 }}
            whileTap={{
              scale: 0.98,
            }}
          >
            <NavLink
              to="/restaurant"
              className="thumbnail_img restaurant_thumbnail"
            >
              <h4 className="restaurant_title">
                <b>BESØG RESTAURANTEN</b>
              </h4>
            </NavLink>
          </motion.div>

          <motion.div
            className="thumbnail_img takeaway_thumbnail"
            whileHover={{ scale: 1.03 }}
            whileTap={{
              scale: 0.98,
            }}
          >
            <NavLink
              to="/takeaway"
              className="thumbnail_img takeaway_thumbnail"
            >
              <h4 className="takeaway_title">
                <b>TAKEAWAY</b>
              </h4>
            </NavLink>
          </motion.div>
        </section>
        <NewOffersSection />
        <VisitUsSection />
        <CateringAndEventsSection />
      </AnimatedPage>
    </>
  );
}
