import React from "react";
import { IoIosSearch } from "react-icons/io";
import { BsBasket3Fill } from "react-icons/bs";
import { TiArrowUnsorted } from "react-icons/ti";
import { MdOutlineKeyboardBackspace } from "react-icons/md";

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
            <img
              src="https://www.nishikisushi.dk/media/31wn4jmh/m%C3%A5ned-tilbud-1.jpg"
              alt="food_img"
            />
            <h3>Food Name</h3>
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
            <p>Pris:</p>
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
            <p>Kategorier</p>
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
            <p>Pris:</p>

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
