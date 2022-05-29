import React from "react";
import BurgerMenu from "./BurgerMenu";
import { FaTruck } from "react-icons/fa";
import { MdOutlineKeyboardBackspace, MdRestaurant } from "react-icons/md";
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from "react-icons/ai";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import Oplysninger from "./Oplysninger";
import useWindowDimensions from "./screenResize_hook";
import { NavLink } from "react-router-dom";
import MobileNav from "./MobileNavBar";
import AnimatedPage from "./AnimatedPage";

function Kurv(props) {
  const { cartContents, onAdd, onRemove } = props;
  const screenSize = useWindowDimensions();
  return (
    <AnimatedPage>
      <>
        {screenSize.width > 799 && <BurgerMenu page={"kurv"} />}
        {screenSize.width < 799 && <MobileNav page={"kurv"} />}
        <NavLink to="/">
          <img
            src="../icons/logo.svg"
            alt="The logo icon."
            className="header_logo"
          />
        </NavLink>
        <img
          className="hero_img hide_when_off_phone"
          src="../../img/hero_img/kurv_hero_mobile.png"
          alt="takeaway"
        />
        <div className="kurv_container">
          <img
            className="hero_img hide_when_on_phone"
            src="../../img/hero_img/kurv_hero.png"
            alt="takeaway"
          />
          <div className="kurv_top">
            <h1>Kurv</h1>
            <div className="ingen_lavering_container">
              <p className="remove_1rem">Ingen Levering</p>
              <FaTruck className="hw20_icon" />
            </div>
          </div>
        </div>
        <div className="button_and_afhentling_container">
          <NavLink to="/takeaway">
            <button className="secondaryBtn">
              <MdOutlineKeyboardBackspace className="hw20_icon" />
              Tilføj
            </button>
          </NavLink>
          <p className="remove_1rem">
            Afhenting <MdRestaurant className="hw20_icon" />
          </p>
        </div>
        <div className="mid_kurv_container">
          {cartContents.length === 0 && <div>Your cart is empty</div>}
          <div className="inner_kurv_container">
            {cartContents.map((item) => (
              <div key={item.id}>
                <div className="kurv_item_top">
                  <div className="kurv_remove_add">
                    <AiOutlineMinusSquare
                      className="hw30_icon"
                      onClick={() => onRemove(item)}
                    />
                    <span>{item.qty}</span>
                    <AiOutlinePlusSquare
                      className="hw30_icon"
                      onClick={() => onAdd(item)}
                    />
                  </div>
                  <p>{item.name}</p>
                  <span>{item.qty * item.price}DKK</span>
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
                  <p>{item.ingrediants}</p>
                </div>
              </div>
            ))}
            {cartContents.length !== 0 && (
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
            )}
            {screenSize.width < 799 && cartContents.length !== 0 && (
              <NavLink to="/Oplysninger" className="button_container_center">
                <button className="primaryBtn">Angiv Oplysninger</button>
              </NavLink>
            )}
          </div>
          {screenSize.width > 799 && (
            <div>
              <Oplysninger />
            </div>
          )}
        </div>
      </>
    </AnimatedPage>
  );
}

export default Kurv;
