import React from "react";
import { IoIosSearch } from "react-icons/io";
import { BsBasket3Fill } from "react-icons/bs";
import { TiArrowUnsorted } from "react-icons/ti";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
/* import { MdOutlineKeyboardBackspace } from "../../img/kategorier_billeder/manedenstilbud.png"; */

let sushiData;
fetchSushiData();
async function fetchSushiData() {
  const restSushi = await fetch(
    "https://kea21s-6eb0.restdb.io/rest/nishiki-sushi-products?max=39" +
      "fetchchildren=true",
    { headers: { "x-apikey": "606d606af55350043100752e" } }
  );
  const dataSushi = await restSushi.json();
  const sushiData = dataSushi;
  console.log(sushiData);
}

function Takeaway() {
  return (
    <>
      <div className="takeaway_container">
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
          ></input>
        </div>
        <div className="kategorier_container">
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
          <div className="item">
            <div className="in_basket_number_container">
              <p className="in_basket_number">0</p>
            </div>
            <img
              src="https://images-global.nhst.tech/image/bUpscFAvOWZnVnVIQ283TlAyeFI0WFMwZ0RiVjRucGhyek52d0pCdUJ3OD0=/nhst/binary/66e1fa282d12f429459b8b83628bb8b4?image_version=640"
              alt="food_img"
            />
            <h4>Food Name</h4>
            <p>Food info ærguaobgro oirae opaiuhr opuerh opeuarhol</p>
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
        <div className="chosen_kategorie_container">
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
          <div className="item">
            <div className="in_basket_number_container">
              <p className="in_basket_number">0</p>
            </div>

            <img
              src="https://images-global.nhst.tech/image/bUpscFAvOWZnVnVIQ283TlAyeFI0WFMwZ0RiVjRucGhyek52d0pCdUJ3OD0=/nhst/binary/66e1fa282d12f429459b8b83628bb8b4?image_version=640"
              alt="food_img"
            />
            <h4>Food Name</h4>
            <p>Food info orfo wiufh owi eufh owei jfjf rjk f jkf jrffhoewifh</p>
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
    </>
  );
}

export default Takeaway;
