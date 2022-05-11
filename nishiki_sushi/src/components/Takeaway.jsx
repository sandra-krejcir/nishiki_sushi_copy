import React from "react";
import { IoIosSearch } from "react-icons/io";
import { BsBasket3Fill } from "react-icons/bs";
import { TiArrowUnsorted } from "react-icons/ti";
import { MdOutlineKeyboardBackspace } from "react-icons/md";

function Takeaway() {
  return (
    <>
      <div>
        <h1>
          <b>Take</b>Away
        </h1>
      </div>
      <div>
        <p>Sorter Pris</p>
        <TiArrowUnsorted />
      </div>

      <div>
        <IoIosSearch />
        <input type="text" placeholder="Søg efter sushi eller ingredienser"></input>
      </div>

      <div className="kategorier_container">
        <h2>Kategorier</h2>

        <div className="blue_box"></div>
        <img src="" alt="food_img" />
        <h3>Food Name</h3>
      </div>

      <div className="result_container">
        <h2>Results for </h2>

        <span>0</span>
        <div
          className="blue_box"
          style={{
            backgroundColor: "#30404F",
            width: "300px",
            height: "130px",
          }}
        ></div>
        <img src="" alt="food_img" />
        <h3>Food Name</h3>
        <p>Food info</p>
        <p>Pris:</p>
        <div className="remove_from_basket">
          <BsBasket3Fill />
          <p>-</p>
        </div>
        <div className="add_to_basket">
          <BsBasket3Fill c />
          <p>+</p>
        </div>
      </div>

      <div className="chosen_kategorie_container">
        <button className="secondaryBtn">
          {" "}
          <MdOutlineKeyboardBackspace />
          Kategorier
        </button>
        <div>
          <IoIosSearch />
          <input type="text" placeholder="Søg efter sushi eller ingredienser"></input>
        </div>
        <h2>Name of Kategorie </h2>

        <span>0</span>
        <div
          className="blue_box"
          style={{
            backgroundColor: "#30404F",
            width: "300px",
            height: "130px",
          }}
        ></div>
        <img src="" alt="food_img" />
        <h3>Food Name</h3>
        <p>Food info</p>
        <p>Pris:</p>
        <div className="remove_from_basket">
          <BsBasket3Fill />
          <p>-</p>
        </div>
        <div className="add_to_basket">
          <BsBasket3Fill style={{ color: "green" }} />
          <p>+</p>
        </div>
      </div>
    </>
  );
}

export default Takeaway;
