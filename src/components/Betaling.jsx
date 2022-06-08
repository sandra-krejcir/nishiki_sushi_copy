import React, { useState } from "react";
import BurgerMenu from "./BurgerMenu";
import OrdreInformation from "./OrdreInformation";
import { FaTruck } from "react-icons/fa";
import { MdOutlineKeyboardBackspace, MdRestaurant } from "react-icons/md";
import { NavLink } from "react-router-dom";
import useWindowDimensions from "./screenResize_hook";
import MobileNav from "./MobileNavBar";
import useFormBetaling from "./handleBetaling";
import validateInfoBetaling from "./ValidateBetalingForm";
import AnimatedPage from "./AnimatedPage";
import DocumentMeta from "react-document-meta";

const Betaling = ({ submitForm, cartContents }) => {
  const { handleChange, values, handleSubmit, errors } = useFormBetaling(
    submitForm,
    validateInfoBetaling
  );
  const screenSize = useWindowDimensions();

  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);

    const customerInfo = JSON.parse(localStorage.getItem("Oplysninger"));
    const orderInfo = localStorage.getItem("Orders");

    let payload = {
      name: customerInfo.oplysninger_navn,
      pickup_time: customerInfo.oplysninger_tid,
      phone_number: customerInfo.oplysninger_mobil,
      comment: customerInfo.oplysninger_kommentarer,
      order_details: orderInfo,
    };

    fetch("https://kea21s-6eb0.restdb.io/rest/nishiki-takeaway-form", {
      method: "POST",
      headers: {
        "x-apikey": "606d606af55350043100752e",
        "Content-Type": "application/json",
      },

      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((response) => {})
      .catch((err) => {
        console.error(err);
      });
  }

  const meta = {
    title: "Nishiki Sushi - betaling",
    description:
      "This is Nishiki Sushi's payment page with final steps to fill out the form.",
    meta: {
      charset: "utf-8",
      name: {
        keywords:
          "react,meta,document,html,tags,sushi,frederikssund,takeaway,fish,table booking,reservation,ad libitum,payment,order",
        "theme-color": "#f3f0ee",
      },
    },
  };

  return (
    <AnimatedPage>
      <>
        <DocumentMeta {...meta} />
        {screenSize.width > 799 && <BurgerMenu page={"kurv"} />}
        {screenSize.width < 799 && (
          <MobileNav cartContents={cartContents} page={"kurv"} />
        )}
        <NavLink to="/">
          <img
            src="../icons/logo.svg"
            alt="The logo icon."
            className="header_logo"
          />
        </NavLink>
        <img
          className="hero_img hide_when_off_phone"
          src="/img/hero_img/kurv_hero_mobile.webp"
          alt="takeaway"
        />
        <div className="betaling_container">
          <img
            className="hero_img hide_when_on_phone"
            src="/img/hero_img/kurv_hero.webp"
            alt="takeaway"
          />
          <div>
            <div className="betaling_top">
              <h1>Betaling</h1>
              <div className="ingen_lavering_container">
                <p className="remove_1rem">Ingen Levering</p>
                <FaTruck className="hw20_icon" />
              </div>
            </div>
            <div className="button_and_afhentling_container">
              {screenSize.width < 799 && (
                <NavLink to="/Oplysninger">
                  <button className="secondaryBtn hide_when_off_phone">
                    <MdOutlineKeyboardBackspace
                      style={{ margin: "0 .5rem 0 -.5rem" }}
                      className="hw20_icon"
                    />
                    Oplys
                  </button>
                </NavLink>
              )}
              {screenSize.width > 799 && (
                <NavLink to="/kurv">
                  <button className="secondaryBtn hide_when_on_phone">
                    <MdOutlineKeyboardBackspace
                      style={{ margin: "0 .5rem 0 -.5rem" }}
                      className="hw20_icon"
                    />
                    Kurv
                  </button>
                </NavLink>
              )}
              <p className="remove_1rem">
                Afhenting <MdRestaurant className="hw20_icon" />
              </p>
            </div>
          </div>
          <div className="betaling_og_info_container">
            <div className="betaling_form_container">
              <form onSubmit={handleSubmit} id="betaling_form">
                <label htmlFor="betaling_kortnummer">Kortnummer</label>
                <input
                  style={{
                    border: errors.betaling_kortnummer ? "2px solid red" : "",
                  }}
                  onChange={handleChange}
                  value={values.betaling_kortnummer}
                  type="text"
                  name="betaling_kortnummer"
                  id="betaling_kortnummer"
                  inputMode="numeric"
                  placeholder="0000 0000 0000 0000"
                  required
                />
                {errors.betaling_kortnummer && (
                  <p className="errorMessage">{errors.betaling_kortnummer}</p>
                )}
                <label htmlFor="betaling_navn">Navn på Kort</label>
                <input
                  style={{
                    border: errors.betaling_navn ? "2px solid red" : "",
                  }}
                  onChange={handleChange}
                  value={values.betaling_navn}
                  type="text"
                  name="betaling_navn"
                  id="betaling_navn"
                  placeholder="John Doe"
                  required
                />
                {errors.betaling_navn && (
                  <p className="errorMessage">{errors.betaling_navn}</p>
                )}
                <div className="betaling_form_third_row">
                  <div>
                    <label htmlFor="betaling_dato">Udløbsdato</label>
                    <div className="betaling_form_selections">
                      <select
                        name="betaling_dato_month"
                        id="betaling_dato_month"
                      >
                        <option value="01">01</option>
                        <option value="02">02 </option>
                        <option value="03">03</option>
                        <option value="04">04</option>
                        <option value="05">05</option>
                        <option value="06">06</option>
                        <option value="07">07</option>
                        <option value="08">08</option>
                        <option value="09">09</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                      </select>
                      <select
                        name="betaling_dato_month"
                        id="betaling_dato_month"
                      >
                        <option value="22"> 2022</option>
                        <option value="23"> 2023</option>
                        <option value="24"> 2024</option>
                        <option value="25"> 2025</option>
                        <option value="26"> 2026</option>
                        <option value="27"> 2027</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="betaling_cvc">Kontrolcifre</label>
                    <input
                      style={{
                        border: errors.betaling_cvc ? "2px solid red" : "",
                      }}
                      onChange={handleChange}
                      value={values.betaling_cvc}
                      type="text"
                      name="betaling_cvc"
                      id="betaling_cvc"
                      pattern="[0-9]*"
                      inputmode="numeric"
                      placeholder="CVC"
                      required
                    />
                    {errors.betaling_cvc && (
                      <p className="errorMessage">{errors.betaling_cvc}</p>
                    )}
                  </div>
                </div>
                <div className="handelsbetingelserne">
                  <input
                    type="checkbox"
                    id="betaling_handelsbetingelserne"
                    name="betaling_handelsbetingelserne"
                    required
                  />
                  <label htmlFor="betaling_handelsbetingelserne">
                    Jeg har læst og accepteret handelsbetingelserne
                  </label>
                </div>
                <div className="button_container_center">
                  {isSubmitted && (
                    <NavLink to="/Bekraeftelse">
                      <button className="primaryBtn">Betal</button>
                    </NavLink>
                  )}
                  {!isSubmitted && (
                    <button className="primaryBtn">Betal</button>
                  )}
                </div>
              </form>
            </div>
            <div className="ordre_inof_container_container">
              <OrdreInformation cartContents={cartContents} />
            </div>
          </div>
        </div>
      </>
    </AnimatedPage>
  );
};

export default Betaling;
