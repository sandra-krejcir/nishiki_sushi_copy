import { useEffect, useState } from "react";
import cartSetup from "./Cart";

export default function TakeawayItem(props) {
  const { /* cartContents */ onAdd, onRemove } = props;
  return (
    <>
      <div className="item">
        <div className="in_basket_number_container">
          {/* {cartContents.find(
            (ele) =>
              ele.id === props.id && (
                <p className="in_basket_number"> {ele.qty} </p>
              )
          )} */}
        </div>
        <img
          src={
            "https://rikkeblom.com/nishiki_sushi-images/" + props.img_filename
          }
          alt="sushi_img"
        />

        <h4 key={props.name}>
          {props.name + " "}
          {props.pieces_count}
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
          {props.ingrediants.map((ingVal) => {
            return (
              <p style={{ width: "max-content", margin: "0" }} key={props.name}>
                {ingVal.name},
              </p>
            );
          })}
        </div>
        <br />
        <div style={{ display: "inline-flex" }}>
          <p className="remove_1rem">Pris:</p>
          <p className="discount remove_1rem" key={props.price}>
            {props.price}kr
          </p>
          <p className="remove_1rem" key={props.discount}>
            {props.discount}kr
          </p>
        </div>

        <div className="basket_icons">
          <div
            className="remove_from_basket"
            onClick={() =>
              onRemove({
                id: props._id,
                name: props.name,
                price: props.discount,
                ingrediants: props.ingrediants.map(
                  (ingrediant) => ingrediant.name
                ),
              })
            }
          >
            <img
              className="hw40_icon"
              src="../../icons/basket-minus.svg"
              alt="basket_icon"
            />
          </div>
          <div
            className="add_to_basket"
            onClick={() =>
              onAdd({
                id: props._id,
                name: props.name,
                price: props.discount,
                ingrediants: props.ingrediants.map(
                  (ingrediant) => ingrediant.name
                ),
              })
            }
          >
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
