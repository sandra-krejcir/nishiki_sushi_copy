import { useEffect, useState } from "react";
import cartSetup from "./Cart";

export default function TakeawayItem(props) {
  //   const initialAmount = JSON.parse(localStorage.getItem("kurv")).map((KurvItem) => {
  //     // console.log("we are mapping");
  //     if (KurvItem.name === props.name) {
  //       return props.qty;
  //     } else if (KurvItem.name != props.name) {
  //       return 0;
  //     }
  //   });
  const [amount, setAmount] = useState(0);
  const CART = cartSetup();

  //   function componentDidMount() {
  //     window.addEventListener("DOMContentLoaded", () => {
  //       console.log("componentdidmount");
  //       JSON.parse(localStorage.getItem("kurv")).map((KurvItem) => {
  //         console.log("we are mapping");
  //         if (KurvItem.name === props.name) {
  //           setAmount(KurvItem.qty);
  //         }
  //       });
  //     });
  //   }

  //   componentDidMount();

  //   useEffect(() => {
  //     if (!amount.current) {
  //       changeAmount();
  //     }
  //   }, [amount]);

  function changeAmount(newAmount) {
    setAmount(newAmount);
    // JSON.parse(localStorage.getItem("kurv")).map((KurvItem) => {
    //   if (KurvItem.name === props.name) {
    //     console.log(KurvItem);
    //     setAmount(KurvItem.qty);
    //   }
    // });
  }

  function HandlePlus() {}

  return (
    <>
      <div className="item">
        <div className="in_basket_number_container">
          <p className="in_basket_number">{amount}</p>
        </div>
        <img src={"https://rikkeblom.com/nishiki_sushi-images/" + props.img_filename} alt="sushi_img" />

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

        <div style={{ pointerEvents: "None" }} className="basket_icons">
          <div
          // style={{ pointerEvents: "all" }}
          // className="remove_from_basket"
          // onClick={() => {
          //   CART.minusOne(props);
          //   //   changeAmount();
          // }}
          >
            <img className="hw40_icon" src="../../icons/basket-minus.svg" alt="basket_icon" />
          </div>
          <div
          // style={{ pointerEvents: "all" }}
          // className="add_to_basket"
          // onClick={() => {
          //   CART.add({
          //     name: props.name,
          //     price: props.discount,
          //     ingrediants: props.ingrediants,
          //   });
          //   //   let newAmount = parseInt(amount) + 1;
          //   //   console.log(newAmount);
          //   //   changeAmount(newAmount);
          // }}
          >
            <img className="hw40_icon" src="../../icons/basket-plus.svg" alt="basket_icon" />
          </div>
        </div>
      </div>
    </>
  );
}
