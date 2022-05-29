import React, { useState } from "react";
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
  const subtotalAmount = cartContents.reduce((a, c) => a + c.price * c.qty, 0);
  const rabatPrice = Math.round(subtotalAmount * 0.1);
  const totalAmount = subtotalAmount - rabatPrice;
  const screenSize = useWindowDimensions();

  return (
    <AnimatedPage>
      <>
        {screenSize.width > 799 && <BurgerMenu page={"kurv"} />}
        {screenSize.width < 799 && <MobileNav page={"kurv"} />}
        <NavLink to="/">
          <img src="../icons/logo.svg" alt="The logo icon." className="header_logo" />
        </NavLink>
        <img className="hero_img hide_when_off_phone" src="../../img/hero_img/kurv_hero_mobile.png" alt="takeaway" />
        <div className="kurv_container">
          <img className="hero_img hide_when_on_phone" src="../../img/hero_img/kurv_hero.png" alt="takeaway" />
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
              <MdOutlineKeyboardBackspace style={{ margin: "0 0.5rem 0 -0.5rem" }} className="hw20_icon" />
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
            {cartContents.map((item) => {
              const [viewIngrediants, setViewIngrediants] = useState(false);
              return (
                <div key={item.id}>
                  <div className="kurv_item_top">
                    <div className="kurv_remove_add">
                      <AiOutlineMinusSquare className="hw30_icon" onClick={() => onRemove(item)} />
                      <span>{item.qty}</span>
                      <AiOutlinePlusSquare className="hw30_icon" onClick={() => onAdd(item)} />
                    </div>
                    <p>{item.name}</p>
                    <span>{(Number(item.qty) * Number(item.price)).toFixed(2)}</span>
                  </div>
                  <div className="show_hide_indhold_container">
                    <div className={item.ingrediants.length === 0 ? "hide_ingrediants" : "show_hide_indhold"}>
                      {!viewIngrediants ? (
                        <p
                          onClick={() => {
                            setViewIngrediants(!viewIngrediants);
                          }}
                        >
                          Se Indhold <IoMdArrowDropdown className="hw20_icon" />
                        </p>
                      ) : (
                        <p
                          onClick={() => {
                            setViewIngrediants(!viewIngrediants);
                          }}
                        >
                          Gem Indhold
                          <IoMdArrowDropup className="hw20_icon" />
                        </p>
                      )}
                    </div>
                  </div>
                  {viewIngrediants && (
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        flexDirection: "row",
                        gap: "5px",
                        width: "inherit",
                        marginLeft: "calc((100% / 5.4) * 1.4)",
                        marginRight: "calc((100% / 5.4) * 1)",
                      }}
                    >
                      {item.ingrediants.map((ingVal) => {
                        if (item.ingrediants[0] === "menu") {
                          return (
                            <>
                              <p>{item.ingrediant_list}</p>
                              <p>{item.ingrediant_list2}</p>
                              <p>{item.ingrediant_list3}</p>
                              <p>{item.ingrediant_list4}</p>
                              <p>{item.ingrediant_list5}</p>
                              <p>{item.ingrediant_list6}</p>
                            </>
                          );
                        } else {
                          return (
                            <p style={{ width: "max-content", margin: "0" }} key={ingVal}>
                              {ingVal},
                            </p>
                          );
                        }
                      })}
                    </div>
                  )}
                </div>
              );
            })}
            {cartContents.length !== 0 && (
              <div className="kvitering_container">
                <div>
                  <p>Subtotal</p>
                  <span>{subtotalAmount.toFixed(2)}</span>
                </div>
                <div>
                  <p>10% Rabat</p>
                  <span>-{rabatPrice.toFixed(2)}</span>
                </div>
                <div className="line_kurv"></div>
                <div>
                  <p>
                    <strong>Total:</strong>
                  </p>
                  <span>
                    <strong>{totalAmount.toFixed(2)} DKK</strong>
                  </span>
                </div>
              </div>
            )}
            {screenSize.width < 799 && cartContents.length !== 0 && (
              <NavLink to="/Oplysninger" className="button_container_center">
                <button className="primaryBtn">Angiv Oplysninger</button>
              </NavLink>
            )}
          </div>
        </div>
        {screenSize.width > 799 && (
          <div>
            <Oplysninger />
          </div>
        )}
      </>
    </AnimatedPage>
  );
}

export default Kurv;
