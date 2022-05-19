import React from "react";
import BurgerMenu from "./BurgerMenu";
import { FaTruck } from "react-icons/fa";
import { MdOutlineKeyboardBackspace, MdRestaurant } from "react-icons/md";
/* import useForm from "react-hook-form"; */

function Oplysninger() {
  /* const { register, handleSubmit, errors } = useForm(); */
  return (
    <>
     
      <img
        className="hero_img hide_when_off_phone"
        src="../../img/hero_img/kurv_hero_mobile.png"
        alt="takeaway"
      />
      <div className="oplysninger_container">
        <div className="hide_when_off_phone">
          <div className="oplysninger_top">
            <h1>Oplysninger</h1>
            <div className="ingen_lavering_container">
              <p className="remove_1rem">Ingen Levering</p>
              <FaTruck className="hw20_icon" />
            </div>
          </div>
          <div className="button_and_afhentling_container">
            <button className="secondaryBtn">
              <MdOutlineKeyboardBackspace className="hw20_icon" />
              Kurv
            </button>
            <p className="remove_1rem">
              Afhenting <MdRestaurant className="hw20_icon" />
            </p>
          </div>
        </div>
        <div className="oplysninger_form_container">
          <p>
            For vi bedst kan servere dig mad, får vi brug for nogen oplysninger
            om dig. Efter bestillingen er bekræftet vil du modtage en SMS
          </p>
          <form id="oplysninger_form">
            <label htmlFor="oplysninger_navn">Navn</label>
            <input
              type="text"
              name="oplysninger_navn"
              id="oplysninger_navn"
              minLength="2"
              placeholder="John Doe"
              required
            />
            <label htmlFor="oplysninger_tid">Afhentnings tidspunkt</label>
            <input
              type="time"
              id="oplysninger_tid"
              name="oplysninger_tid"
              min="15:00"
              max="21:00"
              required
            />
            <label htmlFor="oplysninger_mobil">Mobil Nummer</label>
            <input
              type="tel"
              id="oplysninger_mobil"
              name="oplysninger_mobil"
              pattern="[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}"
              placeholder="00 00 00 00"
              required
            />
            <label htmlFor="oplysninger_kommentarer">Kommentarer</label>
            <input
              type="text"
              name="oplysninger_kommentarer"
              id="oplysninger_kommentarer"
              pattern="^[A-Z][a-z]*(\s([A-Z]|\([A-Z])[a-z\'\(\)]*)?((\s|\-)([A-Z]|\([A-Z])[a-z\'\(\)]*)?((\s|\-)([A-Z]|\([A-Z])[a-z\'\(\)]*)?((\s|\-)([A-Z]|\([A-Z])[a-z\'\(\)]*)?$"
              placeholder="Jeg vil gerne tilføje..."
            />
            <div className="button_container_center">
              <button className="primaryBtn">Til Betaling</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Oplysninger;
