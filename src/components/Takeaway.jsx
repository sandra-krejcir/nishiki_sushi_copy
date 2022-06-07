import React, { useState } from "react";
import BurgerMenu from "./BurgerMenu";
import { IoIosSearch } from "react-icons/io";
import { TiArrowUnsorted } from "react-icons/ti";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import useWindowDimensions from "./screenResize_hook";
import MobileNav from "./MobileNavBar";
import { NavLink } from "react-router-dom";
import AnimatedPage from "./AnimatedPage";
import { motion } from "framer-motion";
import TakeawayItem from "./TakeawayItem";

function Takeaway(props) {
  const { cartContents, sushiData, onAdd, onRemove } = props;
  const [searchTerm, setsearchTerm] = useState("");
  const [filterTerm, setFilterTerm] = useState("");
  const [visible, setVisible] = useState(true);
  const [visible2, setVisible2] = useState(true);
  const screenSize = useWindowDimensions();
  const itemCartCount = cartContents.reduce((a, c) => a + c.qty, 0);

  const onChangeSearch = () => {
    setVisible(!visible);
  };

  const animation = {
    show: { opacity: 1, y: 0 },
    hide: { opacity: 0, y: 50 },
  };

  return (
    <AnimatedPage>
      <>
        <img
          className="hero_img hide_when_off_phone"
          src="../../img/hero_img/takeaway_hero_mobile.webp"
          alt="takeaway"
        />

        <div className="takeaway_container">
          {screenSize.width > 799 && (
            <>
              <BurgerMenu cartContents={props.cartContents} page={"takeaway"} />
              <NavLink cartContents={props.cartContents} to="/kurv">
                <div className="in_basket_number_container">
                  {itemCartCount > 0 && (
                    <p className="in_basket_number_head">{itemCartCount}</p>
                  )}
                  <img
                    src={"../icons/basketColored.svg"}
                    alt="Basket icon."
                    className={
                      screenSize > 1224
                        ? "kurv_icon hw40_icon"
                        : "kurv_icon hw30_icon"
                    }
                  ></img>
                </div>
              </NavLink>
            </>
          )}
          {screenSize.width < 799 && (
            <MobileNav cartContents={props.cartContents} page={"takeaway"} />
          )}
          <NavLink to="/">
            <img
              src="../icons/logo.svg"
              alt="The logo icon."
              className="header_logo"
            />
          </NavLink>
          {screenSize.width < 799 && (
            <MobileNav cartContents={props.cartContents} page={"takeaway"} />
          )}
          <NavLink to="/">
            <img
              src="../icons/logo.svg"
              alt="The logo icon."
              className="header_logo"
            />
          </NavLink>
          <img
            className="hero_img hide_when_on_phone"
            src="../../img/hero_img/takeaway_hero.webp"
            alt="takeaway"
          />
          <div className="takeaway_headline">
            <h1>
              <b>Take</b>Away
            </h1>
            {/* <div className={`hidden ${visible ? "hidden" : "show"} sorter_pris`}>
              <p>
                Sorter Pris <TiArrowUnsorted className="hw20_icon" />
              </p>
            </div> */}
          </div>
          <div className={`show_lesser ${visible2 ? "" : "hidden"}`}>
            <div className="search_container">
              <IoIosSearch className="hw20_icon" />
              <input
                type="text"
                placeholder="Søg efter sushi eller ingredienser"
                onChange={(event) => {
                  setsearchTerm(event.target.value);
                  if (searchTerm.length < 1) {
                    onChangeSearch();
                  }
                }}
              ></input>
            </div>
            <AnimatedPage>
              <motion.div
                className={`hidden ${
                  visible ? "show" : ""
                } kategorier_container`}
                initial={false}
                variants={animation}
                animate={visible ? "show" : "hide"}
                transition={{
                  duration: 0.5,
                  type: "spring",
                }}
              >
                <h2>Kategorier</h2>
                <div className="kategorier">
                  <motion.div
                    className="kategorie manedens_tilbud"
                    onClick={() => {
                      setFilterTerm("Månedsens tilbud");
                      setVisible2(!visible2);
                    }}
                    initial={false}
                    variants={animation}
                    animate={visible2 ? "show" : "hide"}
                    transition={{
                      duration: 0.5,
                      type: "spring",
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{
                      scale: 0.8,
                    }}
                  >
                    <img
                      src="../../img/kategorier_billeder/manedenstilbud.webp"
                      alt="månedens_tilbud"
                    />
                    <h3>
                      <span>Månedens tilbud</span>
                    </h3>
                  </motion.div>
                  <motion.div
                    className="kategorie sushi_menu"
                    onClick={() => {
                      setFilterTerm("Sushi menu");
                      setVisible2(!visible2);
                    }}
                    initial={false}
                    variants={animation}
                    animate={visible2 ? "show" : "hide"}
                    transition={{
                      duration: 0.5,
                      type: "spring",
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{
                      scale: 0.8,
                    }}
                  >
                    <img
                      src="../../img/kategorier_billeder/sushimenu.webp"
                      alt="sushi_menu"
                    />
                    <h3>
                      <span>Sushi Menu</span>
                    </h3>
                  </motion.div>
                  <motion.div
                    className="kategorie forret"
                    onClick={() => {
                      setFilterTerm("Forret");
                      setVisible2(!visible2);
                    }}
                    initial={false}
                    variants={animation}
                    animate={visible2 ? "show" : "hide"}
                    transition={{
                      duration: 0.5,
                      type: "spring",
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{
                      scale: 0.8,
                    }}
                  >
                    <img
                      src="../../img/kategorier_billeder/forret.webp"
                      alt="forret"
                    />
                    <h3>
                      <span>Forret</span>
                    </h3>
                  </motion.div>
                  <motion.div
                    className="kategorie yakitori_sticks"
                    onClick={() => {
                      setFilterTerm("Yakitori Sticks");
                      setVisible2(!visible2);
                    }}
                    initial={false}
                    variants={animation}
                    animate={visible2 ? "show" : "hide"}
                    transition={{
                      duration: 0.5,
                      type: "spring",
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{
                      scale: 0.8,
                    }}
                  >
                    <img
                      src="../../img/kategorier_billeder/yakitori_sticks.webp"
                      alt="yakitori_sticks"
                    />
                    <h3>
                      <span>Yakitori Sticks</span>
                    </h3>
                  </motion.div>
                  <motion.div
                    className="kategorie nigiri"
                    onClick={() => {
                      setFilterTerm("Nigiri");
                      setVisible2(!visible2);
                    }}
                    initial={false}
                    variants={animation}
                    animate={visible2 ? "show" : "hide"}
                    transition={{
                      duration: 0.5,
                      type: "spring",
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{
                      scale: 0.8,
                    }}
                  >
                    <img
                      src="../../img/kategorier_billeder/nigiri.webp"
                      alt="nigiri"
                    />
                    <h3>
                      <span>Nigiri 2stk</span>
                    </h3>
                  </motion.div>
                  <motion.div
                    className="kategorie hosomaki"
                    onClick={() => {
                      setFilterTerm("Hosomaki");
                      setVisible2(!visible2);
                    }}
                    initial={false}
                    variants={animation}
                    animate={visible2 ? "show" : "hide"}
                    transition={{
                      duration: 0.5,
                      type: "spring",
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{
                      scale: 0.8,
                    }}
                  >
                    <img
                      src="../../img/kategorier_billeder/hosomaki.webp"
                      alt="hosomaki"
                    />
                    <h3>
                      <span>Hosomaki 8stk</span>
                    </h3>
                  </motion.div>
                  <motion.div
                    className="kategorie futomaki"
                    onClick={() => {
                      setFilterTerm("Futomaki");
                      setVisible2(!visible2);
                    }}
                    initial={false}
                    variants={animation}
                    animate={visible2 ? "show" : "hide"}
                    transition={{
                      duration: 0.5,
                      type: "spring",
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{
                      scale: 0.8,
                    }}
                  >
                    <img
                      src="../../img/kategorier_billeder/futomaki.webp"
                      alt="futomaki"
                    />
                    <h3>
                      <span>Futomaki 5stk</span>
                    </h3>
                  </motion.div>
                  <motion.div
                    className="kategorie sashimi"
                    onClick={() => {
                      setFilterTerm("Sashimi");
                      setVisible2(!visible2);
                    }}
                    initial={false}
                    variants={animation}
                    animate={visible2 ? "show" : "hide"}
                    transition={{
                      duration: 0.5,
                      type: "spring",
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{
                      scale: 0.8,
                    }}
                  >
                    <img
                      src="../../img/kategorier_billeder/sashimi.webp"
                      alt="sashimi"
                    />
                    <h3>
                      <span>Sashimi</span>
                    </h3>
                  </motion.div>
                  <motion.div
                    className="kategorie rispapir"
                    onClick={() => {
                      setFilterTerm("Rispapir");
                      setVisible2(!visible2);
                    }}
                    initial={false}
                    variants={animation}
                    animate={visible2 ? "show" : "hide"}
                    transition={{
                      duration: 0.5,
                      type: "spring",
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{
                      scale: 0.8,
                    }}
                  >
                    <img
                      src="../../img/kategorier_billeder/rispapir.webp"
                      alt="rispapir"
                    />
                    <h3>
                      <span>Rispapir 6stk</span>
                    </h3>
                  </motion.div>
                  <motion.div
                    className="kategorie uramaki"
                    onClick={() => {
                      setFilterTerm("Uramaki");
                      setVisible2(!visible2);
                    }}
                    initial={false}
                    variants={animation}
                    animate={visible2 ? "show" : "hide"}
                    transition={{
                      duration: 0.5,
                      type: "spring",
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{
                      scale: 0.8,
                    }}
                  >
                    <img
                      src="../../img/kategorier_billeder/uramaki.webp"
                      alt="uramaki"
                    />
                    <h3>
                      <span>Uramaki 8stk</span>
                    </h3>
                  </motion.div>
                  <motion.div
                    className="kategorie kaburimaki"
                    onClick={() => {
                      setFilterTerm("Kaburimaki");
                      setVisible2(!visible2);
                    }}
                    initial={false}
                    variants={animation}
                    animate={visible2 ? "show" : "hide"}
                    transition={{
                      duration: 0.5,
                      type: "spring",
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{
                      scale: 0.8,
                    }}
                  >
                    <img
                      src="../../img/kategorier_billeder/kaburimaki.webp"
                      alt="kaburimaki"
                    />
                    <h3>
                      <span>Kaburimaki 8stk</span>
                    </h3>
                  </motion.div>
                  <motion.div
                    className="kategorie dip"
                    onClick={() => {
                      setFilterTerm("Dip");
                      setVisible2(!visible2);
                    }}
                    initial={false}
                    variants={animation}
                    animate={visible2 ? "show" : "hide"}
                    transition={{
                      duration: 0.5,
                      type: "spring",
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{
                      scale: 0.8,
                    }}
                  >
                    <img
                      src="../../img/kategorier_billeder/dip.webp"
                      alt="dip"
                    />
                    <h3>
                      <span>Dip</span>
                    </h3>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatedPage>
            <h2 className={`hidden ${visible ? "hidden" : "show"}`}>
              {} Resultater for "{searchTerm}"
            </h2>
            <div className="result_container">
              {sushiData
                .filter((val) => {
                  if (searchTerm === "") {
                    if (visible === false) {
                      setVisible(!visible);
                    }
                    return null;
                  } else if (
                    val.name.toLowerCase().includes(searchTerm.toLowerCase())
                  ) {
                    return val;
                  } else if (
                    val.ingrediant_list
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase())
                  ) {
                    return val;
                  } else if (searchTerm === "alle") {
                    return val;
                  }
                })
                .map((val, key) => {
                  return (
                    <TakeawayItem
                      {...val}
                      key={val.name}
                      onAdd={onAdd}
                      onRemove={onRemove}
                      cartContents={cartContents}
                    />
                  );
                })}
            </div>
          </div>
          <div
            className={`hidden ${
              visible2 ? "hidden" : "show"
            } chosen_kategorie_container`}
          >
            <button
              className="secondaryBtn"
              onClick={() => {
                if (visible2 === false) {
                  setVisible2(!visible2);
                }
              }}
            >
              <MdOutlineKeyboardBackspace
                style={{ margin: "0 .5rem 0 -.5rem" }}
                className="hw20_icon"
              />
              Kategorier
            </button>
            {/* <div className="search_container">
              <IoIosSearch className="hw20_icon" />
          TakeawayItem    <input
                type="text"
                placeholder="Søg efter sushi eller ingredienser"
              ></input>
            </div> */}
            <h2>{filterTerm}</h2>
            <div className="result_container">
              {sushiData
                .filter((val) => {
                  if (val.category.includes(filterTerm)) {
                    return val;
                  }
                })
                .map((val, key) => {
                  return (
                    <TakeawayItem
                      {...val}
                      key={val._id}
                      onAdd={onAdd}
                      onRemove={onRemove}
                      cartContents={cartContents}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </>
    </AnimatedPage>
  );
}

export default Takeaway;
