import React from "react";
import { FaTruck } from "react-icons/fa";
import { MdOutlineKeyboardBackspace, MdRestaurant } from "react-icons/md";
import { BsBagCheckFill } from "react-icons/bs";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";

function Bekræftelse() {
  return (
    <>
      <div>
        <div>
          <h1>Bekræftelse</h1>
          <div>
            <p>Ingen Levering</p>
            <FaTruck />
          </div>
        </div>
        <div>
          <button>
            <MdOutlineKeyboardBackspace />
            Kategorier
          </button>
          <p>
            Afhenting <MdRestaurant />
          </p>
        </div>
      </div>

      <div>
        <div>
          <h2>Ordre Sendt</h2>
          <h2>Ordre Bekræftet</h2>
        </div>
        <BsBagCheckFill />
        <div>
          <p>Du vil modtage en SMS når ordren er blevet bekræftet</p>
          <p>
            Hvis du ikke har modtaget en SMS, ring venligst til os for detalier
            42 31 47 99
          </p>
        </div>
      </div>
      <div>
        <div>
          <div>
            <p>Navn</p>
            <p>John Doe</p>
          </div>
          <div>
            <p>Mobil Nummer</p>
            <p>00 00 00 00</p>
          </div>
        </div>
        <div
          style={{ backgroundColor: "black", width: "1px", height: "200px" }}
        ></div>
        <div>
          <div>
            <p>Afhentnings tid</p>
            <p>15:00</p>
          </div>
          <div>
            <p>Kommentarer</p>
            <p>Ingen Citrus</p>
          </div>
        </div>
      </div>
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
    </>
  );
}

export default Bekræftelse;
