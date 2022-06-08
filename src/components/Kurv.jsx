import React from "react";
import BurgerMenu from "./BurgerMenu";
import { FaTruck } from "react-icons/fa";
import { MdOutlineKeyboardBackspace, MdRestaurant } from "react-icons/md";
import Oplysninger from "./Oplysninger";
import useWindowDimensions from "./screenResize_hook";
import { NavLink } from "react-router-dom";
import MobileNav from "./MobileNavBar";
import AnimatedPage from "./AnimatedPage";
import KurvItem from "./KurvItem";
import DocumentMeta from "react-document-meta";

function Kurv(props) {
  const { cartContents, onAdd, onRemove } = props;
  const subtotalAmount = cartContents.reduce((a, c) => a + c.price * c.qty, 0);
  const rabatPrice = Math.round(subtotalAmount * 0.1);
  const totalAmount = subtotalAmount - rabatPrice;
  const screenSize = useWindowDimensions();

  const meta = {
    title: "Nishiki Sushi - basket",
    description:
      "This is Nishiki Sushi's basket subpage for viewing contents of one's order and proceeding to checkout.",
    meta: {
      charset: "utf-8",
      name: {
        keywords:
          "react,meta,document,html,tags,sushi,frederikssund,takeaway,fish,table booking,reservation,ad libitum",
        "theme-color": "#f3f0ee",
      },
    },
  };

  return (
    <>
      <DocumentMeta {...meta} />
      <AnimatedPage>
        {screenSize.width > 799 && (
          <BurgerMenu cartContents={props.cartContents} page={"kurv"} />
        )}
        {screenSize.width < 799 && (
          <MobileNav cartContents={props.cartContents} page={"kurv"} />
        )}
        <NavLink to="/">
          <img
            src="../icons/logo.svg"
            alt="The logo icon."
            className="header_logo"
          />
        </NavLink>
        <img
          className="hero_img hide_when_off_phone"
          src="/img/hero_img/kurv_hero_mobile.webp"
          alt="takeaway"
        />
        <div className="kurv_container">
          <img
            className="hero_img hide_when_on_phone"
            src="/img/hero_img/kurv_hero.webp"
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
              <MdOutlineKeyboardBackspace
                style={{ margin: "0 0.5rem 0 -0.5rem" }}
                className="hw20_icon"
              />
              Tilføj
            </button>
          </NavLink>
          <p className="remove_1rem">
            Afhenting <MdRestaurant className="hw20_icon" />
          </p>
        </div>

        <div className="mid_kurv_container">
          <div className="inner_kurv_container">
            {cartContents.length === 0 && <div>Din kurv er tom.</div>}
            {cartContents.map((item) => {
              return <KurvItem onAdd={onAdd} onRemove={onRemove} item={item} />;
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
              <NavLink
                cartContents={props.cartContents}
                to="/Oplysninger"
                className="button_container_center"
              >
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
      </AnimatedPage>
    </>
  );
}

export default Kurv;
