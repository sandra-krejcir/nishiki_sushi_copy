import React from "react";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";

function OrdreInformation() {
  return (
    <div className="ordreInformation_container">
      <h2>
        <b>Ordre</b> Information
      </h2>
      <div>
        <div className="order_information_item_container">
          <div className="order_information_item_arrows">
            <IoMdArrowDropdown className="hw20_icon" />
            <IoMdArrowDropup className="hw20_icon hidden" />
          </div>
          <p className="remove_1rem">Item</p>
          <span>000</span>
        </div>
        <div className="order_information">
          <p>Item information</p>
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
          <p>
            <strong>Total:</strong>
          </p>
          <span>
            <strong>000</strong>
          </span>
        </div>
      </div>
    </div>
  );
}

export default OrdreInformation;
