import React from "react";
import OrdreInformation from "./OrdreInformation";
import { FaTruck } from "react-icons/fa";
import { MdOutlineKeyboardBackspace, MdRestaurant } from "react-icons/md";

function Betaling() {
  return (
    <>
      <div className="betaling_container">
        <div>
          <div className="betaling_top">
            <h1>Betaling</h1>
            <div className="ingen_lavering_container">
              <p className="remove_1rem">Ingen Levering</p>
              <FaTruck className="hw20_icon" />
            </div>
          </div>
          <div className="button_and_afhentling_container">
            <button className="secondaryBtn">
              <MdOutlineKeyboardBackspace className="hw20_icon" />
              Oplys
            </button>
            <p className="remove_1rem">
              Afhenting <MdRestaurant className="hw20_icon" />
            </p>
          </div>
        </div>
        <div className="betaling_og_info_container">
          <div className="betaling_form_container">
            <form id="betaling_form">
              <label htmlFor="betaling_kortnummer">Kortnummer</label>
              <input
                type="text"
                name="betaling_kortnummer"
                id="betaling_kortnummer"
                pattern="[0-9]*"
                inputMode="numeric"
                placeholder="0000 0000 0000 0000"
                required
              />
              <label htmlFor="betaling_navn">Navn på Kort</label>
              <input
                type="text"
                name="betaling_navn"
                id="betaling_navn"
                placeholder="John Doe"
                required
              />
              <div className="betaling_form_third_row">
                <div>
                  <label htmlFor="betaling_dato">Udløbsdato</label>
                  <div className="betaling_form_selections">
                    <select>
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
                    <select>
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
                    type="text"
                    pattern="[0-9]*"
                    inputmode="numeric"
                    placeholder="CVC"
                    required
                  />
                </div>
              </div>
              <div className="handelsbetingelserne">
                <input
                  type="checkbox"
                  id="betaling_handelsbetingelserne"
                  name="betaling_handelsbetingelserne"
                />
                <label htmlFor="betaling_handelsbetingelserne">
                  Jeg har læst og accepteret handelsbetingelserne
                </label>
              </div>
              <div className="button_container_center">
                <button className="primaryBtn">Betal</button>
              </div>
            </form>
          </div>
          <OrdreInformation />
        </div>
      </div>
    </>
  );
}

export default Betaling;
