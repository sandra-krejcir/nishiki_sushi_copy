import { useEffect, useState } from "react";
import cartSetup from "./Cart";

export default function TakeawayItem(props) {
  const { product } = props;

  return (
    <>
      <div className="item">
        <div className="in_basket_number_container">
          <p className="in_basket_number">0</p>
        </div>
        <img
          src={
            "https://rikkeblom.com/nishiki_sushi-images/" + product.img_filename
          }
          alt="sushi_img"
        />

        <h4 key={product.name}>
          {product.name + " "}
          {product.pieces_count}
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
          {product.ingrediants.map((ingVal) => {
            return (
              <p
                style={{ width: "max-content", margin: "0" }}
                key={product.name}
              >
                {ingVal.name},
              </p>
            );
          })}
        </div>
        <br />
        <div style={{ display: "inline-flex" }}>
          <p className="remove_1rem">Pris:</p>
          <p className="discount remove_1rem" key={product.price}>
            {product.price}kr
          </p>
          <p className="remove_1rem" key={product.discount}>
            {product.discount}kr
          </p>
        </div>

        <div className="basket_icons">
          <div className="remove_from_basket">
            <img
              className="hw40_icon"
              src="../../icons/basket-minus.svg"
              alt="basket_icon"
            />
          </div>
          <div className="add_to_basket">
            <img
              className="hw40_icon"
              src="../../icons/basket-plus.svg"
              alt="basket_icon"
            />
          </div>
        </div>
      </div>
    </>
  );
}
