import React from "react";
import { useEffect, useState } from "react";
import BurgerMenu from "./BurgerMenu";
import { FaTruck } from "react-icons/fa";
import { MdOutlineKeyboardBackspace, MdRestaurant } from "react-icons/md";
import { BsBagCheckFill } from "react-icons/bs";
import OrdreInformation from "./OrdreInformation";
import { NavLink } from "react-router-dom";
import useWindowDimensions from "./screenResize_hook";
import MobileNav from "./MobileNavBar";
import AnimatedPage from "./AnimatedPage";

function Bekræftelse(props) {
  const screenSize = useWindowDimensions();
  const { cartContents } = props;
  let _formInfo = localStorage.getItem("Oplysninger");
  const formInfo = JSON.parse(_formInfo);
  const [confirm, setConfirm] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (confirm === true) {
        setConfirm(!confirm);
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatedPage>
      <>
        {screenSize.width > 799 && <BurgerMenu page={"kurv"} />}
        {screenSize.width < 799 && <MobileNav page={"kurv"} />}
        <NavLink to="/">
          <img
            src="../icons/logo.svg"
            alt="The logo icon."
            className="header_logo"
          />
        </NavLink>
        <img
          className="hero_img hide_when_off_phone"
          src="../../img/hero_img/takeaway_hero_mobile.png"
          alt="takeaway"
        />
        <div className="bekræftelse_container">
          <img
            className="hero_img hide_when_on_phone"
            src="../../img/hero_img/takeaway_hero.png"
            alt="takeaway"
          />
          <div>
            <div className="bekræftelse_top">
              <h1>Bekræftelse</h1>
              <div className="ingen_lavering_container">
                <p className="remove_1rem text_left">Ingen Levering</p>
                <FaTruck className="hw20_icon" />
              </div>
            </div>
            <div className="button_and_afhentling_container">
              <NavLink to="/takeaway" className="primaryBtn">
                <MdOutlineKeyboardBackspace className="hw20_icon" />
                Kategorier
              </NavLink>
              <p className="remove_1rem">
                Afhenting <MdRestaurant className="hw20_icon" />
              </p>
            </div>
          </div>
          <div className="order_info_container">
            <div className="order_h2">
              <h2 className={`show_lesser ${confirm ? "" : "hidden"}`}>
                Ordre Sendt
              </h2>
              <h2 className={`hidden ${confirm ? "" : "show"}`}>
                Ordre Bekræftet
              </h2>
            </div>
            <BsBagCheckFill
              className={`big_basket_icon ${
                confirm ? "" : "big_basket_icon_green"
              }`}
            />
            <div className="under_basket_icon_txt">
              <p className={`show_lesser ${confirm ? "" : "hidden"}`}>
                Du vil modtage en SMS når ordren er blevet bekræftet
              </p>
              <p className={`hidden ${confirm ? "" : "show"}`}>
                Hvis du ikke har modtaget en SMS, ring venligst til os for
                detalier <br></br> 42 31 47 99
              </p>
            </div>
          </div>
          <div className="time_and_info">
            <div className="time_line_container">
              <div className="time_line_left">
                <div className="time_line_name_container">
                  <p className="time_line_name_label">Navn</p>
                  <p className="time_line_name">{formInfo.oplysninger_navn}</p>
                </div>
                <div className="time_line_number_container">
                  <p className="time_line_number_label">Mobil Nummer</p>
                  <p className="time_line_number">
                    {formInfo.oplysninger_mobil}
                  </p>
                </div>
              </div>
              <div className="time_line"></div>
              <div className="time_line_right">
                <div className="time_line_time_container">
                  <p className="time_line_time_label">Afhentnings tid</p>
                  <p className="time_line_time">{formInfo.oplysninger_tid}</p>
                </div>
                <div className="time_line_comment_container">
                  <p className="time_line_comment_label">Kommentarer</p>
                  <p className="time_line_comment">
                    {formInfo.oplysninger_kommentarer}
                  </p>
                </div>
              </div>
            </div>
            <div className="ordre_inof_container_container">
              <OrdreInformation cartContents={cartContents} />
            </div>
          </div>
        </div>
      </>
    </AnimatedPage>
  );
}

export default Bekræftelse;
