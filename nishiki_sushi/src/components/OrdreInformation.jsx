import React, { useState } from "react";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";

function OrdreInformation(props) {
  const { cartContents } = props;
  console.log(cartContents);
  const subtotalAmount = cartContents.reduce((a, c) => a + c.price * c.qty, 0);
  const rabatPrice = Math.round(subtotalAmount * 0.1);
  const totalAmount = subtotalAmount - rabatPrice;
  return (
    <div className="ordreInformation_container">
      <h2>
        <b>Ordre</b> Information
      </h2>
      {cartContents.map((item) => {
        const [viewIngrediants, setViewIngrediants] = useState(false);
        return (
          <>
            <div>
              <div
                className={
                  item.ingrediants.length === 0
                    ? "hide_ingrediants"
                    : "order_information_item_container"
                }
              >
                <div className="order_information_item_arrows">
                  {!viewIngrediants ? (
                    <IoMdArrowDropdown
                      className="hw20_icon"
                      onClick={() => {
                        setViewIngrediants(!viewIngrediants);
                      }}
                    />
                  ) : (
                    <IoMdArrowDropup
                      className="hw20_icon"
                      onClick={() => {
                        setViewIngrediants(!viewIngrediants);
                      }}
                    />
                  )}
                </div>
                <p className="remove_1rem">{item.name}</p>
                <span>
                  {(Number(item.qty) * Number(item.price)).toFixed(2)}
                </span>
              </div>
              {viewIngrediants && (
                <div
                  className="order_information"
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    flexDirection: "row",
                    gap: "5px",
                    width: "inherit",
                  }}
                >
                  {item.ingrediants.map((ingVal) => {
                    if (item.ingrediants[0] === "menu") {
                      return (
                        <>
                          <p>{item.ingrediant_list}</p>
                          <p>{item.ingrediant_list2}</p>
                          <p>{item.ingrediant_list3}</p>
                          <p>{item.ingrediant_list4}</p>
                          <p>{item.ingrediant_list5}</p>
                          <p>{item.ingrediant_list6}</p>
                        </>
                      );
                    } else {
                      return (
                        <p
                          style={{ width: "max-content", margin: "0" }}
                          key={ingVal}
                        >
                          {ingVal},
                        </p>
                      );
                    }
                  })}
                </div>
              )}
            </div>
          </>
        );
      })}
      <div className="kvitering_container">
        <div>
          <p>Subtotal</p>
          <span>{subtotalAmount.toFixed(2)}</span>
        </div>
        <div>
          <p>10% Rabat</p>
          <span>-{rabatPrice.toFixed(2)}</span>
        </div>
        <div className="line_kurv"></div>
        <div>
          <p>Total:</p>
          <span>{totalAmount.toFixed(2)} DKK</span>
        </div>
      </div>
    </div>
  );
}

export default OrdreInformation;
