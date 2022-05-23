import React, { useState } from "react";
import BurgerMenu from "./BurgerMenu";
import { IoIosSearch } from "react-icons/io";
import { BsBasket3Fill } from "react-icons/bs";
import { TiArrowUnsorted } from "react-icons/ti";
import { MdOutlineKeyboardBackspace } from "react-icons/md";

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

/* console.log(sushiData); */

function Takeaway() {
  const [searchTerm, setsearchTerm] = useState("");
  const [visible, setVisible] = useState(true);

  const onChangeSearch = () => {
    setVisible(!visible);
    console.log("heloo");
  };
  return (
    <>
      <BurgerMenu page={"takeaway"} />
      <img
        className="hero_img hide_when_off_phone"
        src="../../img/hero_img/takeaway_hero_mobile.png"
        alt="takeaway"
      />

      <div className="takeaway_container">
        <img
          src="../icons/logo.svg"
          alt="The logo icon."
          className="header_logo"
        />
        <img
          className="hero_img hide_when_on_phone"
          src="../../img/hero_img/takeaway_hero.png"
          alt="takeaway"
        />
        <div className="takeaway_headline">
          <h1>
            <b>Take</b>Away
          </h1>
          <div className="sorter_pris">
            <p>Sorter Pris</p>
            <TiArrowUnsorted className="hw20_icon" />
          </div>
        </div>
        <div className="search_container">
          <IoIosSearch className="hw20_icon" />
          <input
            type="text"
            placeholder="Søg efter sushi eller ingredienser"
            onChange={(event) => {
              setsearchTerm(event.target.value);
              if (searchTerm.length < 1) {
                onChangeSearch();
              } else if (searchTerm.length === 0) {
              }
            }}
            /*  onClick={onChangeSearch} */
          ></input>
        </div>
        <div className={`hidden ${visible ? "show" : ""} kategorier_container`}>
          <h2>Kategorier</h2>
          <div className="kategorier">
            <div className="kategorie manedens_tilbud">
              <img
                src="../../img/kategorier_billeder/manedenstilbud.png"
                alt="månedens_tilbud"
              />
              <h3>Månedens tilbud</h3>
            </div>
            <div className="kategorie sushi_menu">
              <img
                src="../../img/kategorier_billeder/sushimenu.png"
                alt="sushi_menu"
              />
              <h3>Sushi Menu</h3>
            </div>
            <div className="kategorie forret">
              <img
                src="../../img/kategorier_billeder/forret.png"
                alt="forret"
              />
              <h3>Forret</h3>
            </div>
            <div className="kategorie yakitori_sticks">
              <img
                src="../../img/kategorier_billeder/yakitori_sticks.png"
                alt="yakitori_sticks"
              />
              <h3>Yakitori Sticks</h3>
            </div>
            <div className="kategorie nigiri">
              <img
                src="../../img/kategorier_billeder/nigiri.png"
                alt="nigiri"
              />
              <h3>Nigiri 2stk</h3>
            </div>
            <div className="kategorie hosomaki">
              <img
                src="../../img/kategorier_billeder/hosomaki.png"
                alt="hosomaki"
              />
              <h3>Hosomaki 8stk</h3>
            </div>
            <div className="kategorie futomaki">
              <img
                src="../../img/kategorier_billeder/futomaki.png"
                alt="futomaki"
              />
              <h3>Futomaki 5stk</h3>
            </div>
            <div className="kategorie sashimi">
              <img
                src="../../img/kategorier_billeder/sashimi.png"
                alt="sashimi"
              />
              <h3>Sashimi</h3>
            </div>
            <div className="kategorie rispapir">
              <img
                src="../../img/kategorier_billeder/rispapir.png"
                alt="rispapir"
              />
              <h3>Rispapir 6stk</h3>
            </div>
            <div className="kategorie uramaki">
              <img
                src="../../img/kategorier_billeder/uramaki.png"
                alt="uramaki"
              />
              <h3>Uramaki 8stk</h3>
            </div>
            <div className="kategorie kaburimaki">
              <img
                src="../../img/kategorier_billeder/kaburimaki.png"
                alt="kaburimaki"
              />
              <h3>Kaburimaki 8stk</h3>
            </div>
            <div className="kategorie dip">
              <img src="../../img/kategorier_billeder/dip.png" alt="dip" />
              <h3>Dip</h3>
            </div>
          </div>
        </div>
        <h2>
          {}1 Resultater for "{}"
        </h2>
        <div className="result_container">
          {sushiData
            .filter((val) => {
              if (searchTerm == "") {
                console.log("empty string");
                return null;
                /*  return val; */
              } else if (
                val.name.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                console.log("value");
                console.log(val.ingrediants);
                /*  onChangeSearch(); */
                return val;
              }
              /* else if (
                ingVal.name.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return val;
              } */
            })
            .map((val, key) => {
              return (
                <>
                  {/*  <div className={`hidden ${visible ? "show" : ""}item`}> */}
                  <div className="item">
                    <div className="in_basket_number_container">
                      <p className="in_basket_number">0</p>
                    </div>
                    <img
                      src={
                        "https://rikkeblom.com/nishiki_sushi-images/" +
                        val.img_filename
                      }
                      alt="sushi_img"
                    />
                    {/* <img src={val.sushi_img} alt="sushi_img" /> */}
                    <h4 key={val.name}>
                      {val.name + " "}
                      {val.pieces_count}
                    </h4>
                    {/*  {console.log(val.ingrediants)} */}
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
                      <p className="discount remove_1rem" key={val.discount}>
                        {val.discount}kr
                      </p>
                      <p className="remove_1rem" key={val.price}>
                        {val.price}kr
                      </p>
                    </div>

                    <div className="basket_icons">
                      <div className="remove_from_basket">
                        <BsBasket3Fill className="hw40_icon" />
                      </div>
                      <div className="add_to_basket">
                        <BsBasket3Fill className="hw40_icon" />
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
        </div>
        <div className="chosen_kategorie_container hidden">
          <button className="secondaryBtn">
            <MdOutlineKeyboardBackspace className="hw20_icon" />
            Kategorier
          </button>
          <div className="search_container">
            <IoIosSearch className="hw20_icon" />
            <input
              type="text"
              placeholder="Søg efter sushi eller ingredienser"
            ></input>
          </div>
          <h2>Name of Kategorie </h2>
          <div className="result_container">
            <div className="item">
              <div className="in_basket_number_container">
                <p className="in_basket_number">0</p>
              </div>
              <img
                src="https://images-global.nhst.tech/image/bUpscFAvOWZnVnVIQ283TlAyeFI0WFMwZ0RiVjRucGhyek52d0pCdUJ3OD0=/nhst/binary/66e1fa282d12f429459b8b83628bb8b4?image_version=640"
                alt="food_img"
              />
              <h4>Food Name</h4>
              <p>
                Food info orfo wiufh owi eufh owei jfjf rjk f jkf jrffhoewifh
              </p>
              <p className="remove_1rem">Pris:</p>
              <div className="basket_icons">
                <div className="remove_from_basket">
                  <BsBasket3Fill className="hw40_icon" />
                </div>
                <div className="add_to_basket">
                  <BsBasket3Fill className="hw40_icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Takeaway;
