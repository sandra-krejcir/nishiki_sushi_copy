import React from "react";
import { FaTruck } from "react-icons/fa";
import { MdOutlineKeyboardBackspace, MdRestaurant } from "react-icons/md";
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from "react-icons/ai";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";

function Kurv() {
  return (
    <>
      <div>
        <h1>Kurv</h1>
        <div>
          <p>Ingen Levering</p>
          <FaTruck />
        </div>
      </div>

      <div>
        <button>
          <MdOutlineKeyboardBackspace />
          Tilføj mere
        </button>
        <p>
          Afhenting <MdRestaurant />
        </p>
      </div>

      <div>
        <div>
          <div>
            <AiOutlineMinusSquare />
            <span>0</span>
            <AiOutlinePlusSquare />
          </div>
          <p>Name of Item</p>
          <span>000</span>
        </div>
        <p>
          Se Indhold <IoMdArrowDropdown />
        </p>
        <p>
          Gem Indhold <IoMdArrowDropup />
        </p>
        <p>Food Info</p>
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
      <button>Angiv Oplysninger</button>
    </>
  );
}

export default Kurv;
