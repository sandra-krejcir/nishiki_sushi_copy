import React, { useState } from "react";
import { FaTruck } from "react-icons/fa";
import { MdOutlineKeyboardBackspace, MdRestaurant } from "react-icons/md";
import { NavLink } from "react-router-dom";
import useWindowDimensions from "./screenResize_hook";
import MobileNav from "./MobileNavBar";
import useFormOplysninger from "./HandleOplysninger";
import validateInfoOplysninger from "./validateOplysningerForm";
import AnimatedPage from "./AnimatedPage";

const Oplysninger = ({ submitForm, cartContents }) => {
  const { handleChange, values, handleSubmit, errors } = useFormOplysninger(
    submitForm,
    validateInfoOplysninger
  );
  const screenSize = useWindowDimensions();

  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <AnimatedPage>
      <div className="kurv_oplysninger">
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
        <div className="oplysninger_container">
          <div className="hide_when_off_phone">
            <div className="oplysninger_top">
              <h1>Oplysninger</h1>
              <div
                className="ingen_lavering_container"
                style={{ textAlign: "right" }}
              >
                <p className="remove_1rem">Ingen Levering</p>
                <FaTruck className="hw20_icon" />
              </div>
            </div>
            <div className="button_and_afhentling_container">
              <NavLink to="/kurv">
                <button className="secondaryBtn">
                  <MdOutlineKeyboardBackspace className="hw20_icon" />
                  Kurv
                </button>
              </NavLink>
              <p className="remove_1rem">
                Afhenting <MdRestaurant className="hw20_icon" />
              </p>
            </div>
          </div>
          <div className="oplysninger_form_container">
            <h2 className="hide_when_on_phone">Oplysninger</h2>
            <p>
              For vi bedst kan servere dig mad, får vi brug for nogen
              oplysninger om dig. Efter bestillingen er bekræftet vil du modtage
              en SMS
            </p>
            <form onSubmit={handleSubmit} id="oplysninger_form">
              <div className="from_name_time_number">
                <div>
                  <label htmlFor="oplysninger_navn">Navn</label>
                  <input
                    style={{
                      border: errors.oplysninger_navn ? "2px solid red" : "",
                    }}
                    onChange={handleChange}
                    value={values.oplysninger_navn}
                    type="text"
                    name="oplysninger_navn"
                    id="oplysninger_navn"
                    minLength="2"
                    placeholder="John Doe"
                  />
                  {errors.oplysninger_navn && (
                    <p className="errorMessage">{errors.oplysninger_navn}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="oplysninger_tid">Afhentnings tidspunkt</label>
                  <input
                    style={{
                      border: errors.oplysninger_tid ? "2px solid red" : "",
                    }}
                    onChange={handleChange}
                    value={values.oplysninger_tid}
                    type="time"
                    id="oplysninger_tid"
                    name="oplysninger_tid"
                    min="15:00"
                    max="21:00"
                  />
                  {errors.oplysninger_tid && (
                    <p className="errorMessage">{errors.oplysninger_tid}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="oplysninger_mobil">Mobil Nummer</label>
                  <input
                    style={{
                      border: errors.oplysninger_mobil ? "2px solid red" : "",
                    }}
                    onChange={handleChange}
                    value={values.oplysninger_mobil}
                    type="tel"
                    id="oplysninger_mobil"
                    name="oplysninger_mobil"
                    // pattern="[0-9]{8}"
                    placeholder="00 00 00 00"
                  />
                  {errors.oplysninger_mobil && (
                    <p className="errorMessage">{errors.oplysninger_mobil}</p>
                  )}
                </div>
              </div>
              <label htmlFor="oplysninger_kommentarer">Kommentarer</label>
              <input
                onChange={handleChange}
                value={values.oplysninger_kommentarer}
                type="text"
                name="oplysninger_kommentarer"
                id="oplysninger_kommentarer"
                placeholder="Jeg vil gerne tilføje..."
              />
              {errors.oplysninger_kommentarer && (
                <p className="errorMessage">{errors.oplysninger_kommentarer}</p>
              )}
              <div className="button_container_center">
                {isSubmitted && (
                  <NavLink to="/betaling">
                    <button className="primaryBtn">Til Betaling</button>
                  </NavLink>
                )}
                {!isSubmitted && (
                  <button className="primaryBtn">Til Betaling</button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Oplysninger;
