import { motion } from "framer-motion";

export default function TakeawayItem(props) {
  const { cartContents, onAdd, onRemove } = props;
  return (
    <>
      <motion.div
        className="item"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <div className="in_basket_number_container">
          {cartContents.map(
            (ele) =>
              ele.name === props.name && (
                <p className="in_basket_number">{ele.qty}</p>
              )
          )}
          {cartContents.map(
            (ele) =>
              ele.name !== props.name && (
                <div style={{ width: "0px", height: "20px" }}></div>
              )
          )}
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
            if (ingVal.name === "menu") {
              return (
                <>
                  <p>{props.ingrediant_list}</p>
                  <p>{props.ingrediant_list2}</p>
                  <p>{props.ingrediant_list3}</p>
                  <p>{props.ingrediant_list4}</p>
                  <p>{props.ingrediant_list5}</p>
                  <p>{props.ingrediant_list6}</p>
                </>
              );
            }
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
          <p className="discount remove_1rem" key={props.price}>
            {props.price}kr
          </p>
          <p className="remove_1rem" key={props.discount}>
            {props.discount}kr
          </p>
        </div>

        <div className="basket_icons">
          {cartContents.map(
            (ele) =>
              ele.name === props.name && (
                <motion.div
                  className="remove_from_basket"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{
                    scale: 0.8,
                  }}
                  onClick={() =>
                    onRemove({
                      id: props._id,
                      name: props.name,
                      price: props.discount,
                      ingrediants: props.ingrediants.map(
                        (ingrediant) => ingrediant.name
                      ),
                      ingrediant_list: props.ingrediant_list,
                      ingrediant_list2: props.ingrediant_list2,
                      ingrediant_list3: props.ingrediant_list3,
                      ingrediant_list4: props.ingrediant_list4,
                      ingrediant_list5: props.ingrediant_list5,
                      ingrediant_list6: props.ingrediant_list6,
                    })
                  }
                >
                  <img
                    className="hw40_icon"
                    src="../../icons/basket-minus.svg"
                    alt="basket_icon"
                  />
                </motion.div>
              )
          )}
          <motion.div
            className="add_to_basket"
            whileHover={{ scale: 1.1 }}
            whileTap={{
              scale: 0.8,
            }}
            onClick={() =>
              onAdd({
                id: props._id,
                name: props.name,
                price: props.discount,
                ingrediants: props.ingrediants.map(
                  (ingrediant) => ingrediant.name
                ),
                ingrediant_list: props.ingrediant_list,
                ingrediant_list2: props.ingrediant_list2,
                ingrediant_list3: props.ingrediant_list3,
                ingrediant_list4: props.ingrediant_list4,
                ingrediant_list5: props.ingrediant_list5,
                ingrediant_list6: props.ingrediant_list6,
              })
            }
          >
            <img
              className="hw40_icon"
              src="../../icons/basket-plus.svg"
              alt="basket_icon"
            />
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
