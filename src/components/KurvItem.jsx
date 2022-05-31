import { useState } from "react";
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from "react-icons/ai";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";

export default function KurvItem(props) {
  const { item, onAdd, onRemove } = props;
  const [viewIngrediants, setViewIngrediants] = useState(false);
  return (
    <>
      <div style={{ marginBottom: "2rem" }} key={item.id}>
        <div className="kurv_item_top">
          <div className="kurv_remove_add">
            <AiOutlineMinusSquare
              className="hw30_icon"
              onClick={() => onRemove(item)}
            />
            <span>{item.qty}</span>
            <AiOutlinePlusSquare
              className="hw30_icon"
              onClick={() => onAdd(item)}
            />
          </div>
          <p>{item.name}</p>
          <span>{(Number(item.qty) * Number(item.price)).toFixed(2)}</span>
        </div>
        <div className="show_hide_indhold_container">
          <div
            className={
              item.ingrediants.length === 0
                ? "hide_ingrediants"
                : "show_hide_indhold"
            }
          >
            {!viewIngrediants ? (
              <p
                className={item.ingrediants.length === 0 && "hidden"}
                style={{ margin: "-.5rem 0 0rem 0" }}
                onClick={() => {
                  setViewIngrediants(!viewIngrediants);
                }}
              >
                Se Indhold <IoMdArrowDropdown className="hw20_icon" />
              </p>
            ) : (
              <p
                style={{ marginTop: "-.5rem" }}
                onClick={() => {
                  setViewIngrediants(!viewIngrediants);
                }}
              >
                Gem Indhold
                <IoMdArrowDropup className="hw20_icon" />
              </p>
            )}
            {viewIngrediants && (
              <div
                className="order_information"
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  flexDirection: "row",
                  gap: "5px",
                  width: "inherit",
                  marginBottom: "2rem",
                }}
              >
                {item.ingrediants.map((ingVal) => {
                  if (item.ingrediants[0] === "menu") {
                    return (
                      <div>
                        <p>{item.ingrediant_list}</p>
                        <p>{item.ingrediant_list2}</p>
                        <p>{item.ingrediant_list3}</p>
                        <p>{item.ingrediant_list4}</p>
                        <p>{item.ingrediant_list5}</p>
                        <p>{item.ingrediant_list6}</p>
                      </div>
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
        </div>
      </div>
    </>
  );
}
