import React, { useState } from "react";
import BurgerMenu from "./BurgerMenu";
import { IoIosSearch } from "react-icons/io";
import { TiArrowUnsorted } from "react-icons/ti";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import useWindowDimensions from "./screenResize_hook";
import MobileNav from "./MobileNavBar";
import cartSetup from "./Cart";
import { NavLink } from "react-router-dom";
import AnimatedPage from "./AnimatedPage";
import { motion } from "framer-motion";

let sushiData;
await fetchSushiData();
async function fetchSushiData() {
  const restSushi = await fetch(
    "https://kea21s-6eb0.restdb.io/rest/nishiki-sushi-products?fetchchildren=true",
    { headers: { "x-apikey": "606d606af55350043100752e" } }
  );
  const dataSushi = await restSushi.json();
  sushiData = dataSushi;
  /* console.log(sushiData); */
}

console.log(sushiData);

function Takeaway() {
  const [searchTerm, setsearchTerm] = useState("");
  const [filterTerm, setFilterTerm] = useState("");
  const [visible, setVisible] = useState(true);
  const [visible2, setVisible2] = useState(true);
  const screenSize = useWindowDimensions();
  const CART = cartSetup();

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
          src="../../img/hero_img/takeaway_hero_mobile.png"
          alt="takeaway"
        />

        <div className="takeaway_container">
          {screenSize.width > 799 && (
            <>
              <BurgerMenu page={"takeaway"} />
              <NavLink to="/kurv">
                <img
                  src={"../icons/basketColored.svg"}
                  alt="Basket icon."
                  className={
                    screenSize > 1224
                      ? "kurv_icon hw40_icon"
                      : "kurv_icon hw30_icon"
                  }
                ></img>
              </NavLink>
            </>
          )}
          {screenSize.width < 799 && <MobileNav page={"takeaway"} />}
          <NavLink to="/">
            <img
              src="../icons/logo.svg"
              alt="The logo icon."
              className="header_logo"
            />
          </NavLink>
          {screenSize.width < 799 && <MobileNav page={"takeaway"} />}
          <NavLink to="/">
            <img
              src="../icons/logo.svg"
              alt="The logo icon."
              className="header_logo"
            />
          </NavLink>
          <img
            className="hero_img hide_when_on_phone"
            src="../../img/hero_img/takeaway_hero.png"
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
                      src="../../img/kategorier_billeder/manedenstilbud.png"
                      alt="månedens_tilbud"
                    />
                    <h3>Månedens tilbud</h3>
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
                      src="../../img/kategorier_billeder/sushimenu.png"
                      alt="sushi_menu"
                    />
                    <h3>Sushi Menu</h3>
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
                      src="../../img/kategorier_billeder/forret.png"
                      alt="forret"
                    />
                    <h3>Forret</h3>
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
                      src="../../img/kategorier_billeder/yakitori_sticks.png"
                      alt="yakitori_sticks"
                    />
                    <h3>Yakitori Sticks</h3>
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
                      src="../../img/kategorier_billeder/nigiri.png"
                      alt="nigiri"
                    />
                    <h3>Nigiri 2stk</h3>
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
                      src="../../img/kategorier_billeder/hosomaki.png"
                      alt="hosomaki"
                    />
                    <h3>Hosomaki 8stk</h3>
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
                      src="../../img/kategorier_billeder/futomaki.png"
                      alt="futomaki"
                    />
                    <h3>Futomaki 5stk</h3>
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
                      src="../../img/kategorier_billeder/sashimi.png"
                      alt="sashimi"
                    />
                    <h3>Sashimi</h3>
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
                      src="../../img/kategorier_billeder/rispapir.png"
                      alt="rispapir"
                    />
                    <h3>Rispapir 6stk</h3>
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
                      src="../../img/kategorier_billeder/uramaki.png"
                      alt="uramaki"
                    />
                    <h3>Uramaki 8stk</h3>
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
                      src="../../img/kategorier_billeder/kaburimaki.png"
                      alt="kaburimaki"
                    />
                    <h3>Kaburimaki 8stk</h3>
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
                      src="../../img/kategorier_billeder/dip.png"
                      alt="dip"
                    />
                    <h3>Dip</h3>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatedPage>
            <h2 className={`hidden ${visible ? "hidden" : "show"}`}>
              {/*   {} Resultater for "{searchTerm}" */}
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
                  /*  console.log(
                  JSON.parse(localStorage.getItem(CART.KEY)).find(
                    (element) => element.name === val.name
                  )
                ); */
                  console.log(
                    /* JSON.stringify( */ JSON.parse(
                      localStorage.getItem(CART.KEY)
                    )
                  );
                  return (
                    <motion.div
                      key={val.name + "id10"}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        type: "spring",
                      }}
                    >
                      <motion.div
                        key={val.name + "id1"}
                        className="item"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.5,
                          type: "spring",
                        }}
                      >
                        <div className="in_basket_number_container">
                          <p className="in_basket_number">0</p>
                          {/* {CART.contents.find(
                            (element) => element.name === val.name
                          ).qty >= 1 ? <p className="in_basket_number"></p> : null} */}
                        </div>
                        <img
                          key={val.img_filename}
                          src={
                            "https://rikkeblom.com/nishiki_sushi-images/" +
                            val.img_filename
                          }
                          alt="sushi_img"
                        />
                        <h4 key={val.name}>
                          {val.name + " "}
                          {val.pieces_count}
                        </h4>
                        <div
                          style={{
                            display: "flex",
                            flexWrap: "wrap",
                            flexDirection: "row",
                            gap: "5px",
                            width: "inherit",
                          }}
                        >
                          {val.ingrediants.map((ingVal) => {
                            if (ingVal.name === "menu") {
                              return (
                                <div key={val.name + "id111"}>
                                  <p key={val.ingrediant_list}>
                                    {val.ingrediant_list}
                                  </p>
                                  <p key={val.ingrediant_list2}>
                                    {val.ingrediant_list2}
                                  </p>
                                  <p key={val.ingrediant_list3}>
                                    {val.ingrediant_list3}
                                  </p>
                                  <p key={val.ingrediant_list4}>
                                    {val.ingrediant_list4}
                                  </p>
                                  <p key={val.ingrediant_list5}>
                                    {val.ingrediant_list5}
                                  </p>
                                  <p key={val.ingrediant_list6}>
                                    {val.ingrediant_list6}
                                  </p>
                                </div>
                              );
                            }
                            return (
                              <p
                                style={{ width: "max-content", margin: "0" }}
                                key={ingVal.name}
                              >
                                {ingVal.name},
                              </p>
                            );
                          })}
                        </div>
                        <br />
                        <div style={{ display: "inline-flex" }}>
                          <p className="remove_1rem">Pris:</p>
                          <p className="discount remove_1rem" key={val.price}>
                            {val.price}kr
                          </p>
                          <p className="remove_1rem" key={val.discount}>
                            {val.discount}kr
                          </p>
                        </div>
                        <div className="basket_icons">
                          <motion.div
                            className="remove_from_basket"
                            onClick={() => CART.minusOne(val)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{
                              scale: 0.8,
                            }}
                          >
                            <img
                              className="hw40_icon"
                              src="../../icons/basket-minus.svg"
                              alt="basket_icon"
                            />
                          </motion.div>
                          <motion.div
                            className="add_to_basket"
                            onClick={() =>
                              CART.add({
                                name: val.name,
                                price: val.discount,
                                ingrediants: val.ingrediants,
                              })
                            }
                            whileHover={{ scale: 1.1 }}
                            whileTap={{
                              scale: 0.8,
                            }}
                          >
                            <img
                              className="hw40_icon"
                              src="../../icons/basket-plus.svg"
                              alt="basket_icon"
                            />
                          </motion.div>
                        </div>
                      </motion.div>
                    </motion.div>
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
              <MdOutlineKeyboardBackspace className="hw20_icon" />
              Kategorier
            </button>
            {/* <div className="search_container">
              <IoIosSearch className="hw20_icon" />
              <input
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
                    <>
                      <motion.div
                        key={val.name + "id11"}
                        className="item"
                        initial={false}
                        variants={animation}
                        animate={visible2 ? "hide" : "show"}
                        transition={{
                          duration: 0.5,
                          type: "spring",
                        }}
                      >
                        <div className="in_basket_number_container">
                          <p className="in_basket_number">0</p>
                        </div>
                        <img
                          key={val.img_filename + "2"}
                          src={
                            "https://rikkeblom.com/nishiki_sushi-images/" +
                            val.img_filename
                          }
                          alt="sushi_img"
                        />
                        <h4 key={val.name + "3"}>
                          {val.name + " "}
                          {val.pieces_count}
                        </h4>
                        <div
                          style={{
                            display: "flex",
                            flexWrap: "wrap",
                            flexDirection: "row",
                            gap: "5px",
                            width: "inherit",
                          }}
                        >
                          {val.ingrediants.map((ingVal) => {
                            if (ingVal.name === "menu") {
                              return (
                                <div key={val.name + "id222"}>
                                  <p key={val.ingrediant_list + "4"}>
                                    {val.ingrediant_list}
                                  </p>
                                  <p key={val.ingrediant_list2 + "5"}>
                                    {val.ingrediant_list2}
                                  </p>
                                  <p key={val.ingrediant_list3 + "6"}>
                                    {val.ingrediant_list3}
                                  </p>
                                  <p key={val.ingrediant_list4 + "7"}>
                                    {val.ingrediant_list4}
                                  </p>
                                  <p key={val.ingrediant_list5 + "8"}>
                                    {val.ingrediant_list5}
                                  </p>
                                  <p key={val.ingrediant_list6 + "9"}>
                                    {val.ingrediant_list6}
                                  </p>
                                </div>
                              );
                            }

                            return (
                              <p
                                style={{ width: "max-content", margin: "0" }}
                                key={ingVal.name + "10"}
                              >
                                {ingVal.name},
                              </p>
                            );
                          })}
                        </div>
                        <br />
                        <div style={{ display: "inline-flex" }}>
                          <p className="remove_1rem">Pris:</p>
                          <p
                            className="discount remove_1rem"
                            key={val.preice + "12"}
                          >
                            {val.price}kr
                          </p>
                          <p className="remove_1rem" key={val.discount + "11"}>
                            {val.discount}kr
                          </p>
                        </div>

                        <div className="basket_icons">
                          <motion.div
                            className="remove_from_basket"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{
                              scale: 0.8,
                            }}
                            onClick={() => CART.minusOne(val)}
                          >
                            <img
                              className="hw40_icon"
                              src="../../icons/basket-minus.svg"
                              alt="basket_icon"
                            />
                          </motion.div>
                          <motion.div
                            className="add_to_basket"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{
                              scale: 0.8,
                            }}
                            onClick={() =>
                              CART.add({
                                name: val.name,
                                price: val.discount,
                                ingrediants: val.ingrediants,
                              })
                            }
                          >
                            <img
                              className="hw40_icon"
                              src="../../icons/basket-plus.svg"
                              alt="basket_icon"
                            />
                          </motion.div>
                        </div>
                      </motion.div>
                    </>
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
