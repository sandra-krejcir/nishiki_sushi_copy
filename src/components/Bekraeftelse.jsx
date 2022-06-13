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
import DocumentMeta from "react-document-meta";

function Bekræftelse(props) {
  const screenSize = useWindowDimensions();
  const { cartContents, setCartContents } = props;
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

  function resetBasket() {
    localStorage.clear();
    setCartContents([]);
  }

  const meta = {
    title: "Nishiki Sushi - betaling",
    description: "This is Nishiki Sushi's purchase connfirmation page with order details.",
    meta: {
      charset: "utf-8",
      name: {
        keywords: "react,meta,document,html,tags,sushi,frederikssund,takeaway,fish,table booking,reservation,ad libitum,payment,order",
        "theme-color": "#f3f0ee",
      },
    },
  };

  return (
    <AnimatedPage>
      <>
        <DocumentMeta {...meta} />
        {screenSize.width > 799 && <BurgerMenu page={"kurv"} resetPage={"bekræftelse"} setCartContents={setCartContents} />}
        {screenSize.width < 799 && <MobileNav cartContents={cartContents} page={"kurv"} resetPage={"bekræftelse"} setCartContents={setCartContents} />}
        <NavLink to="/" onClick={() => resetBasket()}>
          <img src="../icons/logo.svg" alt="The logo icon." className="header_logo" />
        </NavLink>
        <img className="hero_img hide_when_off_phone" src="/img/hero_img/takeaway_hero_mobile.webp" alt="takeaway" />
        <div className="bekræftelse_container">
          <img className="hero_img hide_when_on_phone" src="/img/hero_img/takeaway_hero.webp" alt="takeaway" />
          <div>
            <div className="bekræftelse_top">
              <h1>Bekræftelse</h1>
              <div className="ingen_lavering_container">
                <p className="remove_1rem text_left">Ingen Levering</p>
                <FaTruck className="hw20_icon" />
              </div>
            </div>
            <div className="button_and_afhentling_container">
              <NavLink to="/takeaway" className="primaryBtn" onClick={() => resetBasket()}>
                <MdOutlineKeyboardBackspace style={{ margin: "0 .5rem 0 -.5rem" }} className="hw20_icon" />
                Kategorier
              </NavLink>
              <p className="remove_1rem">
                Afhenting <MdRestaurant className="hw20_icon" />
              </p>
            </div>
          </div>
          <div className="order_info_container">
            <div className="order_h2">
              <h2 className={`show_lesser ${confirm ? "" : "hidden"}`}>Ordre Sendt</h2>
              <h2 className={`hidden ${confirm ? "" : "show"}`}>Ordre Bekræftet</h2>
            </div>
            <BsBagCheckFill className={`big_basket_icon ${confirm ? "" : "big_basket_icon_green"}`} />
            <div className="under_basket_icon_txt">
              <p className={`show_lesser ${confirm ? "" : "hidden"}`}>Du vil modtage en SMS når ordren er blevet bekræftet</p>
              <p className={`hidden ${confirm ? "" : "show"}`}>
                Hvis du ikke har modtaget en SMS, ring venligst til os for detaljer på <br></br> <strong>42 31 47 99</strong>
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
                  <p className="time_line_number">{formInfo.oplysninger_mobil}</p>
                </div>
              </div>
              <div className="time_line"></div>
              <div className="time_line_right">
                <div className="time_line_time_container">
                  <p className="time_line_time_label">Afhentning</p>
                  <p className="time_line_time">kl {formInfo.oplysninger_tid}</p>
                  <p>
                    Jernbanegade 9D, <br />
                    3600 Frederikssund
                  </p>
                </div>
                <div className="time_line_comment_container">
                  <p className="time_line_comment_label">Kommentarer</p>
                  <p className="time_line_comment">{formInfo.oplysninger_kommentarer}</p>
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
