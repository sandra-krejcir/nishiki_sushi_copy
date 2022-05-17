import React from "react";
import { FaTruck } from "react-icons/fa";
import { MdOutlineKeyboardBackspace, MdRestaurant } from "react-icons/md";
import { BsBagCheckFill } from "react-icons/bs";
import OrdreInformation from "./OrdreInformation";

function Bekræftelse() {
  return (
    <>
      <div className="bekræftelse_container">
        <div>
          <div className="bekræftelse_top">
            <h1>Bekræftelse</h1>
            <div className="ingen_lavering_container">
              <p className="remove_1rem">Ingen Levering</p>
              <FaTruck className="hw20_icon" />
            </div>
          </div>
          <div className="button_and_afhentling_container">
            <button className="primaryBtn">
              <MdOutlineKeyboardBackspace className="hw20_icon" />
              Kategorier
            </button>
            <p className="remove_1rem">
              Afhenting <MdRestaurant className="hw20_icon" />
            </p>
          </div>
        </div>
        <div className="order_info_container">
          <div className="order_h2">
            <h2>Ordre Sendt</h2>
            <h2 className="hidden">Ordre Bekræftet</h2>
          </div>
          <BsBagCheckFill className="big_basket_icon" />
          <div className="under_basket_icon_txt">
            <p>Du vil modtage en SMS når ordren er blevet bekræftet</p>
            <p className="hidden">
              Hvis du ikke har modtaget en SMS, ring venligst til os for
              detalier 42 31 47 99
            </p>
          </div>
        </div>
        <div className="time_and_info">
          <div className="time_line_container">
            <div className="time_line_left">
              <div className="time_line_name_container">
                <p className="time_line_name_label">Navn</p>
                <p className="time_line_name">John Doe</p>
              </div>
              <div className="time_line_number_container">
                <p className="time_line_number_label">Mobil Nummer</p>
                <p className="time_line_number">00 00 00 00</p>
              </div>
            </div>
            <div className="time_line"></div>
            <div className="time_line_right">
              <div className="time_line_time_container">
                <p className="time_line_time_label">Afhentnings tid</p>
                <p className="time_line_time">15:00</p>
              </div>
              <div className="time_line_comment_container">
                <p className="time_line_comment_label">Kommentarer</p>
                <p className="time_line_comment">Ingen Citrus</p>
              </div>
            </div>
          </div>
          <OrdreInformation />
        </div>
      </div>
    </>
  );
}

export default Bekræftelse;
