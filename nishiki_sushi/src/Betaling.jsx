import React from "react";
import { FaTruck } from "react-icons/fa";
import { MdOutlineKeyboardBackspace, MdRestaurant } from "react-icons/md";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";

function Betaling() {
  return (
    <>
      <div>
        <div>
          <h1>Betaling</h1>
          <div>
            <p>Ingen Levering</p>
            <FaTruck />
          </div>
        </div>
        <div>
          <button>
            <MdOutlineKeyboardBackspace />
            Oplys
          </button>
          <p>
            Afhenting <MdRestaurant />
          </p>
        </div>
      </div>
      <div>
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
          <label htmlFor="betaling_dato">Udløbsdato</label>
          <select>
            <option value="01">January</option>
            <option value="02">February </option>
            <option value="03">March</option>
            <option value="04">April</option>
            <option value="05">May</option>
            <option value="06">June</option>
            <option value="07">July</option>
            <option value="08">August</option>
            <option value="09">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
          <select>
            <option value="16"> 2016</option>
            <option value="17"> 2017</option>
            <option value="18"> 2018</option>
            <option value="19"> 2019</option>
            <option value="20"> 2020</option>
            <option value="21"> 2021</option>
          </select>
          <label htmlFor="betaling_cvc">Kontrolcifre</label>
          <input
            type="text"
            pattern="[0-9]*"
            inputmode="numeric"
            placeholder="CVC"
            required
          />
          <input
            type="checkbox"
            id="betaling_handelsbetingelserne"
            name="betaling_handelsbetingelserne"
          />
          <label htmlFor="betaling_handelsbetingelserne">
            Jeg har læst og accepteret handelsbetingelserne
          </label>
          <button>Betal</button>
        </form>
        <div>
          <h2>Ordre Information</h2>

          <div>
            <div>
              <IoMdArrowDropdown />
              <IoMdArrowDropup />
              <p>Item</p>
              <span>000</span>
            </div>
            <p>Item information</p>
          </div>

          <div>
            <div>
              <p>Subtotal</p>
              <span>000</span>
            </div>
            <div>
              <p>10% Rabat</p>
              <span>-000</span>
            </div>
            <div
              style={{ backgroundColor: "black", width: "80%", height: "1px" }}
            ></div>
            <div>
              <p>Total:</p>
              <span>000</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Betaling;
