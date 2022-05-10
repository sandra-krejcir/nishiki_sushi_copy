import React from "react";
import { IoIosSearch } from "react-icons/io";
import { BsBasket3Fill } from "react-icons/bs";
import { TiArrowUnsorted } from "react-icons/ti";
import { MdOutlineKeyboardBackspace } from "react-icons/md";

function Takeaway() {
  return (
    <>
      <div>
        <h1>Take Away</h1>
      </div>
      <div>
        <p>Sorter Pris</p>
        <TiArrowUnsorted />
      </div>

      <div>
        <IoIosSearch />
        <input
          type="text"
          placeholder="Søg efter sushi eller ingredienser"
        ></input>
      </div>

      <div className="kategorier_container">
        <h2>Kategorier</h2>
        {/* <template> */}
        <div
          className="blue_box"
          style={{
            backgroundColor: "#30404F",
            width: "200px",
            height: "120px",
          }}
        ></div>
        <img src="" alt="food_img" />
        <h3>Food Name</h3>
        {/*  </template> */}
      </div>

      <div className="result_container">
        <h2>Results for </h2>
        {/* <template> */}
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
        {/*  </template> */}
      </div>

      <div className="chosen_kategorie_container">
        <button>
          {" "}
          <MdOutlineKeyboardBackspace />
          Kategorier
        </button>
        <div>
          <IoIosSearch />
          <input
            type="text"
            placeholder="Søg efter sushi eller ingredienser"
          ></input>
        </div>
        <h2>Name of Kategorie </h2>
        {/* <template> */}
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
        {/*  </template> */}
      </div>
    </>
  );
}

export default Takeaway;
