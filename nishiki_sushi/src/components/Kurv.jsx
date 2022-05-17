import React from "react";
import { FaTruck } from "react-icons/fa";
import { MdOutlineKeyboardBackspace, MdRestaurant } from "react-icons/md";
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from "react-icons/ai";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import Oplysninger from "./Oplysninger";

function Kurv() {
  return (
    <>
      <div className="kurv_container">
        <div className="kurv_top">
          <h1>Kurv</h1>
          <div className="ingen_lavering_container">
            <p className="remove_1rem">Ingen Levering</p>
            <FaTruck className="hw20_icon" />
          </div>
        </div>
        <div className="button_and_afhentling_container">
          <button className="secondaryBtn">
            <MdOutlineKeyboardBackspace className="hw20_icon" />
            Tilføj mere
          </button>
          <p className="remove_1rem">
            Afhenting <MdRestaurant className="hw20_icon" />
          </p>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className="inner_kurv_container">
            <div>
              <div className="kurv_item_top">
                <div className="kurv_remove_add">
                  <AiOutlineMinusSquare className="hw30_icon" />
                  <span>0</span>
                  <AiOutlinePlusSquare className="hw30_icon" />
                </div>
                <p>Name of Item</p>
                <span>000</span>
              </div>
              <div className="show_hide_indhold_container">
                <div className="show_hide_indhold">
                  <p>
                    Se Indhold <IoMdArrowDropdown className="hw20_icon" />
                  </p>
                  <p>
                    Gem Indhold <IoMdArrowDropup className="hw20_icon" />
                  </p>
                </div>
              </div>
              <div className="kurv_item_info">
                <p>Food Info relgjnerog oerh oehr opehropuehrt prp oeu</p>
              </div>
            </div>
            <div className="kvitering_container">
              <div>
                <p>Subtotal</p>
                <span>000</span>
              </div>
              <div>
                <p>10% Rabat</p>
                <span>-000</span>
              </div>
              <div className="line_kurv"></div>
              <div>
                <p>Total:</p>
                <span>000</span>
              </div>
            </div>
            <div className="button_container_center">
              <button className="primaryBtn hide_when_off_phone">
                Angiv Oplysninger
              </button>
            </div>
          </div>
        </div>
        <div className="hide_when_on_phone">
          <Oplysninger />
        </div>
      </div>
    </>
  );
}

export default Kurv;
